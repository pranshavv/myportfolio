import { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/'
import Background from '../Background'
import './index.scss'

const DESKTOP = '(min-width: 1201px)'
const DURATION = 700

// Quick start, long gentle settle — no overshoot
const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

const Layout = ({ children }) => {
  const [active, setActive] = useState('home')

  useEffect(() => {
    // Old page URLs like /about still land on their section
    const id = window.location.hash.slice(1) || window.location.pathname.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  useEffect(() => {
    const page = document.querySelector('.page')
    const desktop = window.matchMedia(DESKTOP)
    const sections = () => [...document.querySelectorAll('.section')]
    let lockedUntil = 0
    let frame
    let touchY = null

    const currentIndex = () => {
      const list = sections()
      let best = 0
      list.forEach((s, i) => {
        if (Math.abs(s.offsetTop - page.scrollTop) < Math.abs(list[best].offsetTop - page.scrollTop)) best = i
      })
      return best
    }

    const goTo = (index) => {
      const list = sections()
      const target = list[Math.max(0, Math.min(index, list.length - 1))]
      if (!desktop.matches) {
        target.scrollIntoView({ behavior: 'smooth' })
        return
      }
      const from = page.scrollTop
      const to = target.offsetTop
      if (from === to) return
      const start = performance.now()
      lockedUntil = start + DURATION + 300
      cancelAnimationFrame(frame)
      const step = (now) => {
        const t = Math.min((now - start) / DURATION, 1)
        page.scrollTop = from + (to - from) * easeOutQuart(t)
        if (t < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
    }

    const isLocked = () => {
      const now = performance.now()
      if (now < lockedUntil) {
        // Swallow trackpad inertia so one swipe moves exactly one section
        lockedUntil = Math.max(lockedUntil, now + 200)
        return true
      }
      return false
    }

    const onWheel = (e) => {
      if (!desktop.matches) return
      e.preventDefault()
      if (Math.abs(e.deltaY) < 4 || isLocked()) return
      goTo(currentIndex() + (e.deltaY > 0 ? 1 : -1))
    }

    const onKey = (e) => {
      const keys = { ArrowDown: 1, PageDown: 1, ' ': 1, ArrowUp: -1, PageUp: -1 }
      if (!desktop.matches || !(e.key in keys) || e.target.closest('input, textarea')) return
      e.preventDefault()
      if (!isLocked()) goTo(currentIndex() + keys[e.key])
    }

    const onTouchStart = (e) => {
      touchY = e.target.closest('.leaflet-container') ? null : e.touches[0].clientY
    }

    const onTouchMove = (e) => {
      if (desktop.matches && touchY !== null) e.preventDefault()
    }

    const onTouchEnd = (e) => {
      if (!desktop.matches || touchY === null) return
      const dy = touchY - e.changedTouches[0].clientY
      touchY = null
      if (Math.abs(dy) > 50 && !isLocked()) goTo(currentIndex() + (dy > 0 ? 1 : -1))
    }

    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const index = sections().findIndex((s) => `#${s.id}` === link.getAttribute('href'))
      if (index === -1) return
      e.preventDefault()
      goTo(index)
    }

    const onResize = () => {
      if (desktop.matches) page.scrollTop = sections()[currentIndex()].offsetTop
    }

    page.addEventListener('wheel', onWheel, { passive: false })
    page.addEventListener('touchstart', onTouchStart, { passive: true })
    page.addEventListener('touchmove', onTouchMove, { passive: false })
    page.addEventListener('touchend', onTouchEnd)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    document.addEventListener('click', onClick)
    return () => {
      cancelAnimationFrame(frame)
      page.removeEventListener('wheel', onWheel)
      page.removeEventListener('touchstart', onTouchStart)
      page.removeEventListener('touchmove', onTouchMove)
      page.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          setActive(id)
          window.history.replaceState(window.history.state, '', id === 'home' ? '/' : `/#${id}`)
        })
      },
      // Active section = the one crossing the middle of the screen
      { rootMargin: '-50% 0px -50% 0px' }
    )
    document.querySelectorAll('.section').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <Background />
      <Sidebar active={active} />
      <div className="page">
        <div className="sections">
          <span className="tags top-tags">&lt;body&gt;</span>
          {children}
          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br />
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Layout

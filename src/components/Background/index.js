import { useEffect, useRef } from 'react'
import './index.scss'

const PURPLE = '166, 65, 255'
const GOLD = '255, 215, 0'

const rand = (min, max) => min + Math.random() * (max - min)

const createWaves = (w, h) => {
  const count = h > w ? 6 : 8
  const waves = Array.from({ length: count }, (_, i) => ({
    // Evenly spaced top to bottom so the waves fill the whole screen
    y: (i + 0.5) / count,
    amp: rand(0.04, 0.1) * h,
    freq: rand(0.0012, 0.003),
    speed: rand(0.0002, 0.0005),
    phase: rand(0, Math.PI * 2),
    color: i % 2 ? GOLD : PURPLE,
  }))
  let time = 0

  return {
    draw(ctx, dt) {
      time += dt
      waves.forEach((wave) => {
        const gradient = ctx.createLinearGradient(0, 0, w, 0)
        gradient.addColorStop(0, `rgba(${wave.color}, 0.35)`)
        gradient.addColorStop(0.5, `rgba(${wave.color}, 1)`)
        gradient.addColorStop(1, `rgba(${wave.color}, 0.35)`)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5

        // A few offset strands per wave give a ribbon look
        for (let strand = 0; strand < 4; strand++) {
          ctx.globalAlpha = 0.4 - strand * 0.08
          ctx.beginPath()
          for (let x = 0; x <= w; x += 10) {
            const t = x * wave.freq + time * wave.speed + wave.phase + strand * 0.18
            const y =
              wave.y * h +
              Math.sin(t) * wave.amp +
              Math.sin(t * 2.3 + time * wave.speed) * wave.amp * 0.35
            x ? ctx.lineTo(x, y) : ctx.moveTo(x, y)
          }
          ctx.stroke()
        }
      })
      ctx.globalAlpha = 1
    },
  }
}

const Background = () => {
  const ref = useRef()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let scene
    let frame
    let last = performance.now()

    const setup = () => {
      // Ignore mobile address-bar show/hide so the scene doesn't regenerate mid-scroll
      if (window.innerWidth === w && Math.abs(window.innerHeight - h) < 150) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      scene = createWaves(w, h)
      if (reduceMotion) {
        ctx.clearRect(0, 0, w, h)
        scene.draw(ctx, 0)
      }
    }

    const loop = (now) => {
      const dt = Math.min(now - last, 50)
      last = now
      ctx.clearRect(0, 0, w, h)
      scene.draw(ctx, dt)
      frame = requestAnimationFrame(loop)
    }

    setup()
    if (!reduceMotion) frame = requestAnimationFrame(loop)
    window.addEventListener('resize', setup)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', setup)
    }
  }, [])

  return <canvas className="background" ref={ref} aria-hidden="true" />
}

export default Background

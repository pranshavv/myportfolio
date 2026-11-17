import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import './App.scss'
import Skill from './components/Skill/Skill'
import Dashboard from './components/Dashboard/dash'
import Section from './components/Section'

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="*"
        element={
          <Layout>
            <Section id="home"><Home /></Section>
            <Section id="about"><About /></Section>
            <Section id="portfolio"><Portfolio /></Section>
            <Section id="skill"><Skill /></Section>
            <Section id="contact"><Contact /></Section>
          </Layout>
        }
      />
    </Routes>
  )
}

export default App

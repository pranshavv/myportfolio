import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'
import './Skill.scss'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const TextSphere = () => {
    useEffect(() => {
      const container = '.tagcloud'
      const texts = [
  'Database',
  'AWS RDS',
  'SQL',
  'PL/SQL',
  'RMAN',
  'Terraform',
  'GitHub Actions',
  'Scripting',
  'CloudWatch',
  'Grafana',
  'Prometheus',
  'OEM',
  'AWR Reports',
  'Docker',
  'NGINX',
  'HAProxy',
  'Jenkins',
  'S3',
  'IAM (AWS)',
  'Route 53',
  'expdp/impdp',
  'CI/CD',
  'Monitoring & Observability',
  'Infrastructure as Code (IaC)'
]
      const options = {
        radius: 350,
        maxSpeed: 'fast',
        initSpeed: 'normal',
        keep: true,
      }
      TagCloud(container, texts, options)
    }, [])

    return <div className="tagcloud" />
  }

  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
          I am a DevOps and DBRE (Database Reliability Engineering) professional at Coforge Ltd 
          with hands-on experience in managing and automating Oracle database environments across 
          cloud and on-prem infrastructure. I specialize in provisioning AWS RDS (Oracle) using Terraform, 
          automating backup and recovery processes, and enhancing database observability through tools like 
          CloudWatch, Grafana, and Prometheus.
          </p>

          <p align="left">
            My work involves optimizing daily operations across 150+ Oracle environments—using OEM, AWR, and 
            custom scripts to reduce manual tasks by over 60%. I've containerized schema migration workflows 
            with Docker, implemented robust CI/CD pipelines using GitHub Actions and Jenkins, and contributed 
            to the resilience of critical systems by managing RMAN backups and disaster recovery strategies. 
            My expertise also spans configuring DNS with Route 53, reverse proxies like NGINX, and 
            performance tuning through proactive space and log management.
            With a B.Tech in Computer Science and a passion for automation, I bring a blend of development 
            and infrastructure knowledge that enables me to design scalable, secure, and reliable systems. 
            I'm driven by curiosity, thrive in cross-functional teams, and constantly strive to build 
            better engineering workflows across the DevOps and data reliability stack.
          </p>
        </div>
        <div className="sphere-cloud">
          <TextSphere />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skill

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useInView } from '../Section'
import { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'
import './Skill.scss'

const SKILLS = [
  'AWS', 'Azure', 'EKS', 'Kubernetes', 'Terraform', 'ArgoCD', 'Helm',
  'Karpenter', 'HPA', 'Docker', 'GitHub Actions', 'GitLab CI', 'Prometheus',
  'Grafana', 'Nagios', 'CloudWatch', 'Oracle', 'PostgreSQL', 'MySQL',
  'MS SQL Server', 'AWS RDS', 'Python', 'Bash', 'NGINX', 'Route 53',
  'VPC', 'IAM', 'S3', 'Security Hub', 'SLI/SLO', 'GitOps',
]

// Defined outside Skill so re-renders don't remount it and spawn duplicate clouds
const TextSphere = () => {
  useEffect(() => {
    // Sphere sits in the right half on desktop, full width on tablet/phone
    const desktop = window.innerWidth > 1200
    const available = desktop ? window.innerWidth / 2 : window.innerWidth
    const radius = Math.min(
      350,
      Math.floor((available - 40) / 2),
      desktop ? Math.floor(window.innerHeight * 0.4) : Infinity
    )
    const cloud = TagCloud('.tagcloud', SKILLS, {
      radius,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      keep: true,
    })
    return () => cloud.destroy()
  }, [])

  return <div className="tagcloud" />
}

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const inView = useInView()

  useEffect(() => {
    if (!inView) return
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [inView])

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
            At PhonePe, I provision and scale Azure Virtual Machines and build
            highly available Azure MySQL Flexible Server clusters with
            Terraform, using Azure Compute Gallery images to standardize
            provisioning. I also manage production Azure infrastructure — VM
            health, networking, proxies, and platform updates.
          </p>
          <p align="left">
            At Coforge, I migrated pre-production Oracle databases to Oracle
            Linux 8/9, resolved a P1 incident where OS patching broke Oracle
            primary startup, and migrated a 70 GB on-prem MySQL database to
            Amazon RDS using binlog replication with near-zero downtime. I wrote
            Python and Bash automation for backup validation and deployment
            health checks.
          </p>
          <p>
            On the side, I built a multi-environment EKS platform with
            Terraform, ArgoCD (App-of-Apps), and a Prometheus-based SLI/SLO
            framework with error-budget tracking.
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

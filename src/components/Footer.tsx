import { useState, useEffect } from 'react'
import './Footer.css'

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-time">{currentTime}</p>
        <p className="footer-copyright">&copy; Inkpen Enterprise 2026</p>
      </div>
    </footer>
  )
}

export default Footer
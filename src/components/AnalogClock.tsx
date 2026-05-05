import { useState, useEffect } from 'react'
import './AnalogClock.css'

function AnalogClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const seconds = time.getSeconds()
  const minutes = time.getMinutes()
  const hours = time.getHours() % 12

  // Calculate angles (0 degrees = 12 o'clock position)
  const secondAngle = (seconds * 6) - 90 // 6 degrees per second
  const minuteAngle = (minutes * 6) + (seconds * 0.1) - 90 // 6 degrees per minute + smooth second transition
  const hourAngle = (hours * 30) + (minutes * 0.5) - 90 // 30 degrees per hour + smooth minute transition

  return (
    <div className="analog-clock">
      <svg className="clock-face" viewBox="0 0 200 200">
        {/* Clock border */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="var(--bg)"
          stroke="var(--accent)"
          strokeWidth="3"
        />

        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180)
          const x1 = 100 + Math.cos(angle) * 80
          const y1 = 100 + Math.sin(angle) * 80
          const x2 = 100 + Math.cos(angle) * 85
          const y2 = 100 + Math.sin(angle) * 85
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--text-h)"
              strokeWidth="2"
            />
          )
        })}

        {/* Minute markers */}
        {[...Array(60)].map((_, i) => {
          if (i % 5 !== 0) { // Skip hour markers
            const angle = (i * 6) * (Math.PI / 180)
            const x1 = 100 + Math.cos(angle) * 82
            const y1 = 100 + Math.sin(angle) * 82
            const x2 = 100 + Math.cos(angle) * 85
            const y2 = 100 + Math.sin(angle) * 85
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--border)"
                strokeWidth="1"
              />
            )
          }
          return null
        })}

        {/* Hour numbers */}
        {[...Array(12)].map((_, i) => {
          const number = i === 0 ? 12 : i
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const x = 100 + Math.cos(angle) * 70
          const y = 100 + Math.sin(angle) * 70
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              className="clock-number"
            >
              {number}
            </text>
          )
        })}

        {/* Hour hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + Math.cos(hourAngle * Math.PI / 180) * 45}
          y2={100 + Math.sin(hourAngle * Math.PI / 180) * 45}
          stroke="var(--text-h)"
          strokeWidth="4"
          strokeLinecap="round"
          className="hour-hand"
        />

        {/* Minute hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + Math.cos(minuteAngle * Math.PI / 180) * 65}
          y2={100 + Math.sin(minuteAngle * Math.PI / 180) * 65}
          stroke="var(--text-h)"
          strokeWidth="3"
          strokeLinecap="round"
          className="minute-hand"
        />

        {/* Second hand */}
        <line
          x1="100"
          y1="100"
          x2={100 + Math.cos(secondAngle * Math.PI / 180) * 75}
          y2={100 + Math.sin(secondAngle * Math.PI / 180) * 75}
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="second-hand"
        />

        {/* Center dot */}
        <circle
          cx="100"
          cy="100"
          r="4"
          fill="var(--accent)"
        />
      </svg>

      {/* Digital time display */}
      <div className="digital-time">
        {time.toLocaleTimeString()}
      </div>
    </div>
  )
}

export default AnalogClock
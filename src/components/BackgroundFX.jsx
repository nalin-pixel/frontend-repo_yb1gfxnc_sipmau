import { useEffect, useRef } from 'react'

export default function BackgroundFX() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const DPR = Math.min(Math.max(window.devicePixelRatio || 1, 1), 2)
    const resize = () => {
      canvas.width = window.innerWidth * DPR
      canvas.height = window.innerHeight * DPR
    }
    resize()

    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      s: Math.random() * 0.6 + 0.2,
    }))

    const render = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // subtle gradient backdrop
      const grad = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.1,
        0,
        canvas.width * 0.2,
        canvas.height * 0.1,
        canvas.width * 0.9
      )
      grad.addColorStop(0, 'rgba(56,189,248,0.05)')
      grad.addColorStop(0.5, 'rgba(37,99,235,0.05)')
      grad.addColorStop(1, 'rgba(2,6,23,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        const tw = (Math.sin(t * 0.002 + i * 7) + 1) * 0.5
        const r = star.r + tw * 0.6
        ctx.beginPath()
        ctx.arc(star.x, star.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(165,243,252,${0.35 + tw * 0.5})`
        ctx.fill()
      }

      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute -inset-32 blur-3xl opacity-60 animate-aurora" style={{
        background:
          'conic-gradient(from 180deg at 50% 50%, rgba(34,211,238,0.08), rgba(59,130,246,0.08), rgba(14,165,233,0.08), rgba(34,211,238,0.08))',
      }} />
    </div>
  )
}

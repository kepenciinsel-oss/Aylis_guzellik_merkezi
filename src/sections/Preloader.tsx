import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false)
      }
    })

    tl.fromTo(logoRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }
    )
    .to(logoRef.current, {
      scale: 1.05,
      duration: 1.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1
    })
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut'
    }, '+=0.2')

    return () => { tl.kill() }
  }, [])

  if (!visible) return null

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#faf8f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img
        ref={logoRef}
        src="/images/aylislogo.jpg"
        alt="AyliS Logo"
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'contain',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}

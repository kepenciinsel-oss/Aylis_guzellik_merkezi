import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const mosaicImages = [
  { src: '/images/service-vacuactiv.jpg', label: 'Vacu Activ', span: 'span 1' },
  { src: '/images/service-ems.jpg', label: 'EMS Body Pro', span: 'span 2' },
  { src: '/images/service-liposuction.jpg', label: 'Ameliyatsız Liposuction', span: 'span 1' },
  { src: '/images/service-lenf.jpg', label: 'Lenf Drenaj', span: 'span 1' },
]

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const left = leftRef.current
    const right = rightRef.current
    if (!section || !left || !right) return

    const ctx = gsap.context(() => {
      gsap.from(left.children, {
        x: -40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          once: true,
        },
      })

      gsap.from(right.querySelectorAll('.mosaic-item'), {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: right,
          start: 'top 70%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="results"
      ref={sectionRef}
      style={{
        backgroundColor: '#f0ebe3',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 60px)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 2fr) minmax(300px, 3fr)',
          gap: 'clamp(40px, 5vw, 80px)',
          alignItems: 'start',
        }}
      >
        <div ref={leftRef}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.22em',
              color: '#8a8a8a',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 500,
            }}
          >
            DÖNÜŞÜM HİKAYELERİ
          </p>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#1a1a1a',
              marginBottom: '24px',
              fontFamily: '"Playfair Display", Georgia, serif',
            }}
          >
            Öncesi &amp; Sonrası
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#2d2d2d',
              marginBottom: '32px',
            }}
          >
            Müşterilerimizin AyliS deneyimi sonrası elde ettikleri etkileyici sonuçlar. Profesyonel ekibimiz ve son teknoloji cihazlarımızla farkı kendiniz görün.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1a1a1a',
              backgroundColor: 'transparent',
              border: '1px solid #1a1a1a',
              padding: '14px 32px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: '"Inter", sans-serif',
              marginBottom: '40px',
            }}
            onMouseEnter={(e) => {
              const btn = e.target as HTMLButtonElement
              btn.style.backgroundColor = '#1a1a1a'
              btn.style.color = '#ffffff'
            }}
            onMouseLeave={(e) => {
              const btn = e.target as HTMLButtonElement
              btn.style.backgroundColor = 'transparent'
              btn.style.color = '#1a1a1a'
            }}
          >
            Tüm Sonuçları Gör →
          </button>

          <div
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src="/images/phibrows-transformation.png"
              alt="PhiBrows Microblading - Öncesi ve Sonrası"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>

        <div
          ref={rightRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(3, 200px)',
            gap: '16px',
          }}
        >
          {mosaicImages.map((item, i) => (
            <div
              key={item.label}
              className="mosaic-item"
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                gridRow: i === 1 ? 'span 2' : 'span 1',
                cursor: 'pointer',
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLImageElement).style.transform = 'scale(1.03)'
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLImageElement).style.transform = 'scale(1)'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: '#c9a87c',
                  color: '#ffffff',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

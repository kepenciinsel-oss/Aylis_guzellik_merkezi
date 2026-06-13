import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from(section.querySelector('.philosophy-quote'), {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          once: true,
        },
      })

      gsap.from(section.querySelector('.philosophy-attr'), {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          once: true,
        },
      })

      gsap.from(section.querySelectorAll('.philosophy-tag'), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      style={{
        backgroundColor: '#faf8f5',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 60px)',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <blockquote
          className="philosophy-quote"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(24px, 3.5vw, 48px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#1a1a1a',
            lineHeight: 1.3,
            marginBottom: '32px',
          }}
        >
          "Gazipaşa'da güzelliğin ve sağlıklı yaşamın adresi. Her müşterimize özel, profesyonel ve konforlu bir deneyim sunmak için buradayız."
        </blockquote>

        <p
          className="philosophy-attr"
          style={{
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#8a8a8a',
            fontFamily: '"Inter", sans-serif',
            marginBottom: '48px',
          }}
        >
          — AYLİN SÖZEN, Kurucu
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {['ZAYIFLAMA', 'GÜZELLİK', 'SAĞLIK'].map((tag) => (
            <span
              key={tag}
              className="philosophy-tag"
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c9a87c',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

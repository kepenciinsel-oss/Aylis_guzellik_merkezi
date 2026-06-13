import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ctaHover, setCtaHover] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const image = imageRef.current
    if (!section || !content || !image) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(content.querySelector('.eyebrow'), {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 2.8,
      })
      .from(content.querySelector('.hero-title-1'), {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.5')
      .from(content.querySelector('.hero-title-2'), {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.6')
      .from(content.querySelector('.hero-subtitle'), {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.6')
      .from(content.querySelector('.hero-cta'), {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, '-=0.6')
      .from(content.querySelector('.hero-link'), {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')

      gsap.to(image, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#faf8f5',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        dangerouslySetInnerHTML={{
          __html: `
            <video
              src="/videos/hero-bg.mp4"
              autoplay
              loop
              muted
              playsinline
              style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;"
            ></video>
          `
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(250,248,245,0.92) 0%, rgba(250,248,245,0.75) 50%, rgba(250,248,245,0.4) 100%)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 clamp(24px, 4vw, 60px)',
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh',
          paddingTop: '100px',
          paddingBottom: '60px',
        }}
      >
        <div
          ref={contentRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <span
              className="eyebrow"
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.22em',
                color: '#8a8a8a',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '24px',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              GAZİPAŞA'NIN PREMİYUM GÜZELLİK MERKEZİ
            </span>

            <h1
              style={{
                fontSize: 'clamp(42px, 6vw, 80px)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: '#1a1a1a',
                marginBottom: '16px',
                fontFamily: '"Playfair Display", Georgia, serif',
              }}
            >
              <span className="hero-title-1" style={{ display: 'block' }}>
                Güzelliğiniz
              </span>
              <span
                className="hero-title-2"
                style={{
                  display: 'block',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Yeniden Tanımlanır
              </span>
            </h1>

            <p
              className="hero-subtitle"
              style={{
                fontSize: 'clamp(15px, 1.2vw, 17px)',
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#2d2d2d',
                maxWidth: '460px',
                marginBottom: '36px',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              AyliS Zayıflama & Güzellik olarak, Gazipaşa'da profesyonel ekibimiz ve son teknoloji cihazlarımızla sizlere özel çözümler sunuyoruz.
            </p>

            <div className="hero-cta" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={() => setCtaHover(true)}
                onMouseLeave={() => setCtaHover(false)}
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: ctaHover ? '#ffffff' : '#ffffff',
                  backgroundColor: ctaHover ? '#1a1a1a' : '#c9a87c',
                  border: 'none',
                  padding: '16px 40px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                  fontFamily: '"Inter", sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Phone size={16} />
                Randevu Al
              </button>
              <button
                className="hero-link"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  color: '#1a1a1a',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '16px 8px',
                  cursor: 'pointer',
                  fontFamily: '"Inter", sans-serif',
                  textDecoration: 'underline',
                  textUnderlineOffset: '6px',
                  textDecorationColor: '#c9a87c',
                }}
              >
                Hizmetlerimizi Keşfedin →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={imageRef}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '45%',
          height: '120%',
          zIndex: 1,
          display: window.innerWidth < 768 ? 'none' : 'block',
        }}
      >
        <img
          src="/images/hero-woman.jpg"
          alt="Beauty"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
          }}
        />
      </div>
    </section>
  )
}

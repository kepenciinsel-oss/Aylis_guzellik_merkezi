import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Microblading',
    description: 'PhiBrows microblading teknolojisiyle doğal ve kalıcı kaşlara kavuşun. Uzman estetisyenlerimizden profesyonel hizmet.',
    image: '/images/service-microblading.jpg',
  },
  {
    title: 'Vacu Activ',
    description: 'Vakum teknolojisiyle hedeflenen bölgelerde etkili zayıflama ve selülit tedavisi. Yeni nesil cihazımızla tanışın.',
    image: '/images/service-vacuactiv.jpg',
  },
  {
    title: 'Rollshape / Selülit',
    description: 'Selülit canavarınıza veda edin. Rollshape teknolojisiyle pürüzsüz bir cilt görünümü elde edin.',
    image: '/images/service-rollshape.jpg',
  },
  {
    title: 'Ameliyatsız Liposuction',
    description: 'Ameliyatsız, ağrısız ve konforlu yağ eritme çözümleri. Modern teknolojiyle güvenli bir deneyim.',
    image: '/images/service-liposuction.jpg',
  },
  {
    title: 'EMS Body Pro',
    description: '30 dakikada 30.000 mekik etkisi! Kasları güçlendirin, metabolizmayı hızlandırın.',
    image: '/images/service-ems.jpg',
  },
  {
    title: 'Lenf Drenaj / G5',
    description: 'Lenf drenaj ve G5 masajıyla ödemden kurtulun, vücut formunuza kavuşun.',
    image: '/images/service-lenf.jpg',
  },
]

function OrbitalBadge() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const pathId = `orbital-path-services`
    const duration = 25

    const path = svg.querySelector('path')
    if (!path) return

    path.setAttribute('id', pathId)
    path.setAttribute('fill', 'none')

    const textContent = 'AYLIŞ \u2022 ZAYIFLAMA \u0026 GÜZELLİK \u2022 GAZİPAŞA \u2022 '

    const textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text')
    textEl.setAttribute('fill', '#c9a87c')
    textEl.setAttribute('font-family', '"Inter", sans-serif')
    textEl.setAttribute('font-size', '16px')
    textEl.setAttribute('font-weight', '500')
    textEl.setAttribute('letter-spacing', '2px')

    const tp1 = document.createElementNS('http://www.w3.org/2000/svg', 'textPath')
    tp1.setAttribute('href', `#${pathId}`)
    tp1.setAttribute('startOffset', '0%')
    tp1.textContent = textContent

    const tp2 = document.createElementNS('http://www.w3.org/2000/svg', 'textPath')
    tp2.setAttribute('href', `#${pathId}`)
    tp2.setAttribute('startOffset', '0%')
    tp2.textContent = textContent

    textEl.appendChild(tp1)
    textEl.appendChild(tp2)
    svg.appendChild(textEl)

    const textPaths = svg.querySelectorAll('textPath')

    const tween1 = gsap.fromTo(
      textPaths[0],
      { attr: { startOffset: '0%' } },
      { attr: { startOffset: '-100%' }, duration, ease: 'none', repeat: -1 }
    )

    const tween2 = gsap.fromTo(
      textPaths[1],
      { attr: { startOffset: '100%' } },
      { attr: { startOffset: '0%' }, duration, ease: 'none', repeat: -1 }
    )

    return () => {
      tween1.kill()
      tween2.kill()
    }
  }, [])

  return (
    <div
      style={{
        width: 'clamp(160px, 18vw, 240px)',
        height: 'clamp(160px, 18vw, 240px)',
        transform: 'rotate(-15deg)',
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 400 400"
        style={{ width: '100%', height: '100%' }}
      >
        <path
          d="M200,40 A160,160 0 1,1 199.99,40"
          fill="none"
          stroke="#c9a87c"
          strokeWidth="0.5"
          opacity="0.35"
        />
      </svg>
    </div>
  )
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current
    if (!section || !cards) return

    const ctx = gsap.context(() => {
      gsap.from(section.querySelector('.services-header'), {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from(cards.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cards,
          start: 'top 75%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        backgroundColor: '#faf8f5',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 60px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          className="services-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '60px',
            flexWrap: 'wrap',
            gap: '40px',
          }}
        >
          <div>
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
              HİZMETLERİMİZ
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#1a1a1a',
                fontFamily: '"Playfair Display", Georgia, serif',
              }}
            >
              Size Özel Çözümler
            </h2>
          </div>
          <OrbitalBadge />
        </div>

        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, description, image }: { title: string; description: string; image: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 8px 32px rgba(0,0,0,0.08)'
          : '0 2px 16px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '4/3',
          overflow: 'hidden',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
        />
      </div>
      <div style={{ padding: '28px' }}>
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 500,
            color: '#1a1a1a',
            marginBottom: '10px',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            fontWeight: 300,
            color: '#2d2d2d',
            lineHeight: 1.6,
            marginBottom: '16px',
          }}
        >
          {description}
        </p>
        <span
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: '#c9a87c',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: '"Inter", sans-serif',
          }}
        >
          Detaylı Bilgi →
        </span>
      </div>
    </div>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Elif K.',
    service: 'Microblading',
    avatar: '/images/testimonial-1.jpg',
    text: 'AyliS\'te yaptırdığım microblading sonrası kaşlarım inanılmaz doğal görünüyor. Aylin Hanım\'ın profesyonelliği ve ilgisi çok güzeldi. Kesinlikle tavsiye ediyorum!',
    rating: 5,
  },
  {
    name: 'Zeynep T.',
    service: 'Vacu Activ',
    avatar: '/images/testimonial-2.jpg',
    text: 'Vacu Activ seanslarından sonra vücudumda inanılmaz bir fark hissettim. Hem zayıfladım hem de cildim çok daha pürüzsüz oldu. Harika bir ekip!',
    rating: 5,
  },
  {
    name: 'Merve A.',
    service: 'EMS Body Pro',
    avatar: '/images/testimonial-3.jpg',
    text: 'EMS Body Pro ile 30 dakikada gerçekten 30.000 mekik etkisini hissediyorsunuz. Spora gitmeye vakit bulamayanlar için mükemmel bir çözüm. Teşekkürler AyliS!',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current
    if (!section || !cards) return

    const ctx = gsap.context(() => {
      gsap.from(section.querySelector('.testimonials-header'), {
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
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
      ref={sectionRef}
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 60px)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="testimonials-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            MÜŞTERİ YORUMLARI
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
            Deneyimleyenler Ne Diyor?
          </h2>
        </div>

        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '32px',
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  name,
  service,
  avatar,
  text,
  rating,
}: {
  name: string
  service: string
  avatar: string
  text: string
  rating: number
}) {
  return (
    <div
      style={{
        backgroundColor: '#faf8f5',
        borderRadius: '8px',
        padding: '40px 32px',
      }}
    >
      <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} fill="#c9a87c" color="#c9a87c" />
        ))}
      </div>

      <p
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '18px',
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#2d2d2d',
          lineHeight: 1.6,
          marginBottom: '32px',
        }}
      >
        "{text}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img
          src={avatar}
          alt={name}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
        <div>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#1a1a1a',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontSize: '12px',
              fontWeight: 400,
              color: '#8a8a8a',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            {service}
          </p>
        </div>
      </div>
    </div>
  )
}

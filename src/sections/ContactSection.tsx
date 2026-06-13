import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'
gsap.registerPlugin(ScrollTrigger)

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isPending, setIsPending] = useState(false)
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from(section.querySelector('.contact-left'), {
        x: -30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          once: true,
        },
      })

      gsap.from(section.querySelector('.contact-right'), {
        x: 30,
        opacity: 0,
        duration: 0.9,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.phone) return
    setIsPending(true)
    setTimeout(() => {
      setIsPending(false)
      setSubmitted(true)
      setFormData({ fullName: '', email: '', phone: '', service: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        backgroundColor: '#1a1a1a',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 4vw, 60px)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr',
          gap: 'clamp(40px, 5vw, 80px)',
          alignItems: 'start',
        }}
      >
        <div className="contact-left">
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#ffffff',
              fontFamily: '"Playfair Display", Georgia, serif',
              marginBottom: '20px',
            }}
          >
            Randevu İçin Bize Ulaşın
          </h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '440px',
              marginBottom: '40px',
            }}
          >
            Size özel bir güzellik deneyimi için hemen randevu alın. Profesyonel ekibimiz sizi bekliyor.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <a
              href="tel:+905074092995"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 400,
                fontFamily: '"Inter", sans-serif',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#c9a87c'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
              }}
            >
              <Phone size={20} color="#c9a87c" />
              0507 409 29 95
            </a>

            <a
              href="https://wa.me/905074092995"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: '#c9a87c',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              <MessageCircle size={20} color="#c9a87c" />
              WhatsApp'tan Yazın
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '14px',
                fontWeight: 300,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              <MapPin size={20} color="#c9a87c" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                Uğur Mumcu Caddesi, Pazarcı Mahallesi,<br />
                Ayşe Tuncer Apartmanı Kat:4 Daire:11<br />
                Gazipaşa/Antalya
              </span>
            </div>

            <a
              href="https://www.instagram.com/ayliszayiflamaguzellik/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: '#c9a87c',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 400,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              <Instagram size={20} color="#c9a87c" />
              @ayliszayiflamaguzellik
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '12px',
              padding: '40px',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#c9a87c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#ffffff',
                    fontFamily: '"Playfair Display", Georgia, serif',
                    marginBottom: '8px',
                  }}
                >
                  Teşekkürler!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                  Randevu talebiniz alındı. En kısa sürede size dönüş yapacağız.
                </p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '24px' }}>
                  <InputField
                    label="Ad Soyad"
                    value={formData.fullName}
                    onChange={(v) => setFormData({ ...formData, fullName: v })}
                    required
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <InputField
                    label="E-posta"
                    type="email"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <InputField
                    label="Telefon"
                    type="tel"
                    value={formData.phone}
                    onChange={(v) => setFormData({ ...formData, phone: v })}
                    required
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.25)',
                      color: formData.service ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      fontSize: '14px',
                      fontFamily: '"Inter", sans-serif',
                      padding: '14px 0',
                      outline: 'none',
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" style={{ color: '#1a1a1a' }}>Hizmet Seçin</option>
                    <option value="microblading" style={{ color: '#1a1a1a' }}>Microblading</option>
                    <option value="vacu-activ" style={{ color: '#1a1a1a' }}>Vacu Activ</option>
                    <option value="rollshape" style={{ color: '#1a1a1a' }}>Rollshape / Selülit</option>
                    <option value="liposuction" style={{ color: '#1a1a1a' }}>Ameliyatsız Liposuction</option>
                    <option value="ems" style={{ color: '#1a1a1a' }}>EMS Body Pro</option>
                    <option value="lenf-drenaj" style={{ color: '#1a1a1a' }}>Lenf Drenaj / G5</option>
                  </select>
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <textarea
                    placeholder="Mesajınız"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.25)',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontFamily: '"Inter", sans-serif',
                      padding: '14px 0',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: isPending ? '#8a7a64' : '#c9a87c',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: '"Inter", sans-serif',
                    cursor: isPending ? 'wait' : 'pointer',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isPending) {
                      (e.target as HTMLButtonElement).style.backgroundColor = '#b89868'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isPending) {
                      (e.target as HTMLButtonElement).style.backgroundColor = '#c9a87c'
                    }
                  }}
                >
                  {isPending ? 'Gönderiliyor...' : 'Randevu Talep Et'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function InputField({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <input
      type={type}
      placeholder={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      style={{
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.25)',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
        padding: '14px 0',
        outline: 'none',
      }}
      onFocus={(e) => {
        e.target.style.borderBottomColor = '#c9a87c'
      }}
      onBlur={(e) => {
        e.target.style.borderBottomColor = 'rgba(255,255,255,0.25)'
      }}
    />
  )
}

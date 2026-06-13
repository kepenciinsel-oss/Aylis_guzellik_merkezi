import { Phone, MapPin, Clock, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#f0ebe3',
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 4vw, 60px) 40px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <img
            src="/images/aylislogo.jpg"
            alt="AyliS Zayıflama & Güzellik"
            style={{
              width: '80px',
              height: '80px',
              objectFit: 'cover',
              borderRadius: '50%',
              marginBottom: '16px',
            }}
          />
          <p
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '18px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              color: '#1a1a1a',
            }}
          >
            AYLİS
          </p>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.18em',
              color: '#8a8a8a',
              textTransform: 'uppercase',
              fontFamily: '"Inter", sans-serif',
              marginTop: '4px',
            }}
          >
            ZAYIFLAMA & GÜZELLİK
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                marginBottom: '20px',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              İletişim
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="tel:+905074092995"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#2d2d2d',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontFamily: '"Inter", sans-serif',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#c9a87c' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2d2d2d' }}
              >
                <Phone size={14} color="#c9a87c" />
                0507 409 29 95
              </a>
              <a
                href="mailto:info@aylis.com.tr"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#2d2d2d',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontFamily: '"Inter", sans-serif',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#c9a87c' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2d2d2d' }}
              >
                <Mail size={14} color="#c9a87c" />
                info@aylis.com.tr
              </a>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#2d2d2d',
                  fontSize: '13px',
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                <MapPin size={14} color="#c9a87c" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Uğur Mumcu Caddesi,<br />
                  Pazarcı Mahallesi,<br />
                  Gazipaşa/Antalya
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                marginBottom: '20px',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Çalışma Saatleri
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { day: 'Pazartesi – Cuma', hours: '09:00 – 19:00' },
                { day: 'Cumartesi', hours: '10:00 – 18:00' },
                { day: 'Pazar', hours: 'Kapalı' },
              ].map((item) => (
                <div
                  key={item.day}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '13px',
                    color: '#2d2d2d',
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  <Clock size={14} color="#c9a87c" />
                  <span>{item.day}: {item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                marginBottom: '20px',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Hızlı Linkler
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Hizmetler', target: '#services' },
                { label: 'Sonuçlar', target: '#results' },
                { label: 'Hakkımızda', target: '#philosophy' },
                { label: 'İletişim', target: '#contact' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.querySelector(link.target)?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#2d2d2d',
                    fontSize: '13px',
                    fontFamily: '"Inter", sans-serif',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = '#c9a87c' }}
                  onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = '#2d2d2d' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1a1a1a',
                marginBottom: '20px',
                fontFamily: '"Inter", sans-serif',
              }}
            >
              Sosyal Medya
            </h4>
            <a
              href="https://www.instagram.com/ayliszayiflamaguzellik/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#2d2d2d',
                textDecoration: 'none',
                fontSize: '13px',
                fontFamily: '"Inter", sans-serif',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#c9a87c' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2d2d2d' }}
            >
              <Instagram size={14} color="#c9a87c" />
              @ayliszayiflamaguzellik
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(26,26,26,0.1)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p
            style={{
              fontSize: '12px',
              color: '#8a8a8a',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            © 2025 AyliS Zayıflama & Güzellik. Tüm hakları saklıdır.
          </p>
          <a
            href="https://www.instagram.com/ayliszayiflamaguzellik/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#c9a87c', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#1a1a1a' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#c9a87c' }}
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

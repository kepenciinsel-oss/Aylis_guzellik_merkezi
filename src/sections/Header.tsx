import { useEffect, useRef, useState } from 'react'

interface HeaderProps {
  scrollRef: React.MutableRefObject<{ y: number; speed: number }>
}

const navItems = [
  { label: 'Hizmetler', target: '#services' },
  { label: 'Sonuçlar', target: '#results' },
  { label: 'Hakkımızda', target: '#philosophy' },
  { label: 'İletişim', target: '#contact' },
]

export default function Header({ scrollRef }: HeaderProps) {
  const [isCompact, setIsCompact] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const check = () => {
      const y = scrollRef.current.y
      setIsCompact(y > 100)
      setOverHero(y < window.innerHeight * 0.85)
      rafRef.current = requestAnimationFrame(check)
    }
    rafRef.current = requestAnimationFrame(check)
    return () => cancelAnimationFrame(rafRef.current)
  }, [scrollRef])

  const handleNavClick = (target: string) => {
    const el = document.querySelector(target)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const textColor = overHero ? '#ffffff' : '#1a1a1a'
  const bgColor = overHero ? 'transparent' : 'rgba(250,248,245,0.92)'
  const borderColor = overHero ? 'rgba(255,255,255,0.18)' : 'rgba(26,26,26,0.08)'
  const backdropFilter = overHero ? 'none' : 'blur(12px)'

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: isCompact ? '56px' : '72px',
        backgroundColor: bgColor,
        backdropFilter,
        WebkitBackdropFilter: backdropFilter,
        borderBottom: `1px solid ${borderColor}`,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 4vw, 60px)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img
          src="/images/aylislogo.jpg"
          alt="AyliS Logo"
          style={{
            width: isCompact ? '36px' : '44px',
            height: isCompact ? '36px' : '44px',
            objectFit: 'cover',
            borderRadius: '50%',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        <span
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '16px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            color: textColor,
            transition: 'color 0.4s ease',
            display: window.innerWidth < 768 ? 'none' : 'block',
          }}
        >
          AYLİS
        </span>
      </div>

      <nav style={{ display: 'flex', alignItems: 'stretch', height: '100%' }}>
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            overHero={overHero}
            onClick={() => handleNavClick(item.target)}
          />
        ))}
        <button
          onClick={() => handleNavClick('#contact')}
          style={{
            marginLeft: 'auto',
            padding: window.innerWidth < 768 ? '0 14px' : '0 24px',
            fontSize: window.innerWidth < 768 ? '10px' : '12px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#ffffff',
            backgroundColor: '#c9a87c',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            fontFamily: '"Inter", sans-serif',
            height: isCompact ? '36px' : '40px',
            alignSelf: 'center',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = '#1a1a1a'
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor = '#c9a87c'
          }}
        >
          Randevu Al
        </button>
      </nav>
    </header>
  )
}

function NavItem({
  label,
  overHero,
  onClick,
}: {
  label: string
  overHero: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)

  const baseColor = overHero ? '#ffffff' : '#1a1a1a'
  const hoverBg = overHero ? '#ffffff' : '#1a1a1a'
  const hoverFg = overHero ? '#1a1a1a' : '#ffffff'

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        display: window.innerWidth < 768 ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 18px',
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        backgroundColor: hovered ? hoverBg : 'transparent',
        color: hovered ? hoverFg : baseColor,
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.25s ease, color 0.25s ease',
        whiteSpace: 'nowrap',
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {label}
    </button>
  )
}

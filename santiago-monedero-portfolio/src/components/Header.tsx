import { profile } from '../data/profile'
import { useI18n } from '../i18n/useI18n'
import { useViewportWidth } from '../hooks/useViewportWidth'
import { c, mono } from '../theme'
import { LanguageSwitch } from './LanguageSwitch'

export function Header() {
  const { t } = useI18n()
  const vw = useViewportWidth()
  const wide = vw >= 860

  const links = [
    { href: '#stack', label: t.nav.stack },
    { href: '#build', label: t.nav.services },
    { href: '#trace', label: t.nav.how },
    { href: '#work', label: t.nav.work },
  ]

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '14px clamp(16px, 4vw, 56px)',
        background: 'oklch(0.15 0.006 250 / 0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${c.line}`,
      }}
    >
      <a
        href="#top"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontFamily: mono,
          fontSize: 13,
          letterSpacing: '0.02em',
          color: c.text,
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: c.acc,
            animation: 'pulseDot 2.4s infinite',
            flexShrink: 0,
          }}
        />
        <span style={{ fontWeight: 700 }}>{profile.handle}</span>
        <span className="logo-suffix" style={{ color: c.meta }}>
          /dev
        </span>
      </a>

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(10px, 2vw, 26px)',
          fontFamily: mono,
          fontSize: 12,
          letterSpacing: '0.04em',
          minWidth: 0,
        }}
      >
        {wide &&
          links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link" style={{ whiteSpace: 'nowrap' }}>
              {l.label}
            </a>
          ))}

        <LanguageSwitch />

        <a
          href="#contact"
          className="btn-hire"
          style={{
            whiteSpace: 'nowrap',
            padding: '7px 14px',
            border: '1px solid oklch(0.82 0.15 152 / 0.5)',
            borderRadius: 4,
            color: c.acc,
            background: 'oklch(0.82 0.15 152 / 0.08)',
          }}
        >
          {t.nav.hire}
        </a>
      </nav>
    </header>
  )
}

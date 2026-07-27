import { profile } from '../data/profile'
import { useI18n } from '../i18n/useI18n'
import type { Dict } from '../i18n/types'
import { useViewportWidth } from '../hooks/useViewportWidth'
import { c, mono } from '../theme'
import { LanguageSwitch } from './LanguageSwitch'
import { StableLabel } from './StableLabel'

/**
 * Nav labels are addressed by getter rather than by value: StableLabel needs
 * both languages at once to reserve the wider of the two.
 */
const LINKS: { href: string; pick: (d: Dict) => string }[] = [
  { href: '#stack', pick: (d) => d.nav.stack },
  { href: '#build', pick: (d) => d.nav.services },
  { href: '#trace', pick: (d) => d.nav.how },
  { href: '#work', pick: (d) => d.nav.work },
]

export function Header() {
  const vw = useViewportWidth()
  const wide = vw >= 860

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
          LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              <StableLabel pick={l.pick} />
            </a>
          ))}

        <LanguageSwitch />

        <HireButton />
      </nav>
    </header>
  )
}

function HireButton() {
  const { t } = useI18n()

  return (
    <a
      href="#contact"
      className="btn-hire"
      aria-label={t.nav.hire}
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        padding: '7px 14px',
        border: '1px solid oklch(0.82 0.15 152 / 0.5)',
        borderRadius: 4,
        color: c.acc,
        background: 'oklch(0.82 0.15 152 / 0.08)',
      }}
    >
      <StableLabel pick={(d) => d.nav.hire} />
    </a>
  )
}

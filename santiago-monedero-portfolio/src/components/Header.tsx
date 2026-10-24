import { profile } from '../data/profile'
import { useI18n } from '../i18n/useI18n'
import type { Dict } from '../i18n/types'
import { useViewportWidth } from '../hooks/useViewportWidth'
import { c, display, mono } from '../theme'
import { LanguageSwitch } from './LanguageSwitch'
import { Seal } from './Seal'
import { StableLabel } from './StableLabel'
import { ThemeToggle } from './ThemeToggle'

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
        background: c.headerBg,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${c.line}`,
      }}
    >
      <a
        href="#top"
        aria-label={profile.name}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          fontFamily: display,
          fontSize: 16,
          fontWeight: 700,
          color: c.text,
          whiteSpace: 'nowrap',
        }}
      >
        <Seal size={34} />
        <span className="logo-name">{profile.name}</span>
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

        <ThemeToggle />

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
        padding: '8px 15px',
        borderRadius: 5,
        color: c.accInk,
        background: c.acc,
        fontWeight: 700,
      }}
    >
      <StableLabel pick={(d) => d.nav.hire} />
    </a>
  )
}

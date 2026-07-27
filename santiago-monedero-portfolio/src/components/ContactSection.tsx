import { useState, type FormEvent } from 'react'
import { profile } from '../data/profile'
import { useI18n } from '../i18n/useI18n'
import { c, mono, sans, shell } from '../theme'

interface Sent {
  name: string
  ms: number
}

export function ContactSection() {
  const { t } = useI18n()
  const f = t.contact.form

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [needs, setNeeds] = useState<string[]>([])
  const [sent, setSent] = useState<Sent | null>(null)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const first = name.trim().split(' ')[0] || 'there'
    setSent({ name: first, ms: 40 + Math.floor(Math.random() * 90) })
  }

  const reset = () => {
    setSent(null)
    setName('')
    setEmail('')
    setMessage('')
    setNeeds([])
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: mono,
    fontSize: 10.5,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: c.label,
  }

  const fieldStyle: React.CSSProperties = {
    background: c.bgInput,
    border: `1px solid ${c.lineStrong}`,
    borderRadius: 5,
    padding: '12px 13px',
    fontSize: 14.5,
    outline: 'none',
  }

  const contactRow = (label: string, node: React.ReactNode) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <span style={{ color: c.textFaint, minWidth: 74 }}>{label}</span>
      {node}
    </div>
  )

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(56px, 10vh, 120px) clamp(16px, 4vw, 56px) clamp(40px, 6vh, 70px)',
        borderTop: `1px solid ${c.lineSoft}`,
      }}
    >
      <div
        style={{
          ...shell,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(28px, 4vw, 60px)',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: mono,
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: c.acc,
              marginBottom: 14,
            }}
          >
            {t.contact.eyebrow}
          </div>

          <h2
            style={{
              fontSize: 'clamp(30px, 5vw, 62px)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              fontWeight: 600,
              margin: '0 0 22px',
              textWrap: 'balance',
            }}
          >
            {t.contact.headline[0]}
            <br />
            {t.contact.headline[1]}
          </h2>

          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.7,
              color: c.textMuted,
              margin: '0 0 30px',
              maxWidth: '44ch',
              textWrap: 'pretty',
            }}
          >
            {t.contact.body}
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              fontFamily: mono,
              fontSize: 13.5,
            }}
          >
            <a href={`mailto:${profile.email}`} style={{ display: 'flex', gap: 12 }}>
              <span style={{ color: c.textFaint, minWidth: 74 }}>{t.contact.labels.email}</span>
              {profile.email}
            </a>
            <a
              href={profile.github.url}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', gap: 12 }}
            >
              <span style={{ color: c.textFaint, minWidth: 74 }}>{t.contact.labels.github}</span>
              {profile.github.label}
            </a>
            <a
              href={profile.instagram.url}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', gap: 12 }}
            >
              <span style={{ color: c.textFaint, minWidth: 74 }}>{t.contact.labels.instagram}</span>
              {profile.instagram.label}
            </a>
            {contactRow(
              t.contact.labels.based,
              <span style={{ color: c.textSoft }}>{t.contact.basedValue}</span>,
            )}
            {contactRow(
              t.contact.labels.languages,
              <span style={{ color: c.textSoft }}>{t.contact.languagesValue}</span>,
            )}
          </div>
        </div>

        <div
          style={{
            border: `1px solid ${c.line}`,
            borderRadius: 10,
            background: c.bgPanel,
            padding: 'clamp(22px, 3vw, 32px)',
          }}
        >
          {sent ? (
            <div
              style={{
                minHeight: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 14,
                fontFamily: mono,
              }}
            >
              <div style={{ fontSize: 12.5, color: 'oklch(0.55 0.01 250)' }}>{f.sentRoute}</div>
              <div style={{ fontSize: 12.5, color: c.acc }}>
                {f.sentStatus} · {sent.ms}ms
              </div>
              <div
                style={{
                  fontSize: 19,
                  color: c.text,
                  fontFamily: sans,
                  fontWeight: 600,
                  marginTop: 8,
                }}
              >
                {f.sentGreeting} {sent.name}.
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: 'oklch(0.68 0.01 250)',
                  fontFamily: sans,
                  lineHeight: 1.6,
                  maxWidth: '40ch',
                }}
              >
                {f.sentBody}
              </div>
              <button
                type="button"
                className="btn-outline"
                onClick={reset}
                style={{
                  alignSelf: 'flex-start',
                  marginTop: 8,
                  padding: '10px 16px',
                  borderRadius: 5,
                  border: `1px solid ${c.lineBright}`,
                  background: 'transparent',
                  cursor: 'pointer',
                  fontFamily: mono,
                  fontSize: 12,
                  color: c.textSoft,
                }}
              >
                {f.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <label htmlFor="cf-name" style={labelStyle}>
                  {f.name}
                </label>
                <input
                  id="cf-name"
                  className="field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={f.namePlaceholder}
                  style={fieldStyle}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <label htmlFor="cf-email" style={labelStyle}>
                  {f.email}
                </label>
                <input
                  id="cf-email"
                  className="field"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={f.emailPlaceholder}
                  style={fieldStyle}
                />
              </div>

              <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
                <legend style={{ ...labelStyle, padding: 0, marginBottom: 9 }}>{f.needs}</legend>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {f.needOptions.map((option) => {
                    const on = needs.includes(option)
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={on}
                        onClick={() =>
                          setNeeds((prev) =>
                            on ? prev.filter((x) => x !== option) : [...prev, option],
                          )
                        }
                        style={{
                          fontFamily: mono,
                          fontSize: 11.5,
                          padding: '7px 13px',
                          borderRadius: 999,
                          cursor: 'pointer',
                          border: `1px solid ${on ? 'oklch(0.82 0.15 152 / 0.6)' : c.lineBright}`,
                          background: on ? 'oklch(0.82 0.15 152 / 0.14)' : 'transparent',
                          color: on ? c.acc : 'oklch(0.66 0.01 250)',
                          transition: 'all 180ms ease',
                        }}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <label htmlFor="cf-msg" style={labelStyle}>
                  {f.project}
                </label>
                <textarea
                  id="cf-msg"
                  className="field"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={f.projectPlaceholder}
                  style={{
                    ...fieldStyle,
                    resize: 'vertical',
                    fontFamily: sans,
                    lineHeight: 1.55,
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: '14px 20px',
                  borderRadius: 5,
                  border: 'none',
                  cursor: 'pointer',
                  background: c.acc,
                  color: c.accInk,
                  fontFamily: mono,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {f.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

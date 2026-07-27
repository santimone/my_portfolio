import { useState, type FormEvent, type ReactNode } from 'react'
import { profile } from '../data/profile'
import { useI18n } from '../i18n/useI18n'
import { canPostDirectly, mailtoUrl, postContact, type ContactPayload } from '../lib/sendContact'
import { c, mono, sans, shell } from '../theme'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from './Icons'

type Status = 'idle' | 'sending' | 'sent' | 'handoff' | 'error'

export function ContactSection() {
  const { t } = useI18n()
  const f = t.contact.form

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [needs, setNeeds] = useState<string[]>([])
  const [honey, setHoney] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [ms, setMs] = useState(0)

  const payload = (): ContactPayload => ({ name, email, message, needs })

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (honey) return // a bot filled the hidden field

    // No form key configured? Hand the message to the visitor's mail client
    // rather than pretending it was delivered.
    if (!canPostDirectly) {
      window.location.href = mailtoUrl(payload())
      setStatus('handoff')
      return
    }

    setStatus('sending')
    const started = performance.now()
    try {
      await postContact(payload())
      setMs(Math.max(1, Math.round(performance.now() - started)))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setStatus('idle')
    setName('')
    setEmail('')
    setMessage('')
    setNeeds([])
  }

  const firstName = name.trim().split(' ')[0]

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
              gap: 13,
              fontFamily: mono,
              fontSize: 13.5,
            }}
          >
            <ContactLink
              href={`mailto:${profile.email}`}
              label={t.contact.labels.email}
              icon={<MailIcon />}
            >
              {profile.email}
            </ContactLink>

            <ContactLink
              href={`https://wa.me/${profile.whatsapp.e164}`}
              label={t.contact.labels.whatsapp}
              icon={<WhatsAppIcon />}
              external
            >
              {profile.whatsapp.label}
            </ContactLink>

            <ContactLink
              href={profile.github.url}
              label={t.contact.labels.github}
              icon={<GitHubIcon />}
              external
            >
              {profile.github.label}
            </ContactLink>

            <ContactLink
              href={profile.linkedin.url}
              label={t.contact.labels.linkedin}
              icon={<LinkedInIcon />}
              external
            >
              {profile.linkedin.label}
            </ContactLink>

            <ContactLink
              href={profile.instagram.url}
              label={t.contact.labels.instagram}
              icon={<InstagramIcon />}
              external
            >
              {profile.instagram.label}
            </ContactLink>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px 18px',
                marginTop: 6,
                paddingTop: 14,
                borderTop: `1px solid ${c.lineDim}`,
                color: c.textFaint,
                fontSize: 12.5,
              }}
            >
              <span>{t.contact.basedValue}</span>
              <span>{t.contact.languagesValue}</span>
            </div>
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
          {status === 'sent' || status === 'handoff' ? (
            <Panel
              route={f.sentRoute}
              status={status === 'sent' ? `${f.sentStatus} · ${ms}ms` : f.sentStatus}
              statusColor={c.acc}
              title={`${f.sentGreeting} ${firstName || 'there'}.`}
              bodyText={status === 'sent' ? f.sentBody : f.handoffBody}
            >
              <button
                type="button"
                className="btn-outline"
                onClick={reset}
                style={outlineButton}
              >
                {f.sendAnother}
              </button>
            </Panel>
          ) : status === 'error' ? (
            <Panel
              route={f.sentRoute}
              status={f.errorStatus}
              statusColor={c.danger}
              title={f.errorRetry}
              bodyText={f.errorBody}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <a href={mailtoUrl(payload())} className="btn-primary" style={primaryButton}>
                  {f.errorMailto}
                </a>
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => setStatus('idle')}
                  style={outlineButton}
                >
                  {f.errorRetry}
                </button>
              </div>
            </Panel>
          ) : (
            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <label htmlFor="cf-name" style={labelStyle}>
                  {f.name}
                </label>
                <input
                  id="cf-name"
                  name="name"
                  className="field"
                  required
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
                  name="email"
                  className="field"
                  type="email"
                  required
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
                  name="message"
                  className="field"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={f.projectPlaceholder}
                  style={{ ...fieldStyle, resize: 'vertical', fontFamily: sans, lineHeight: 1.55 }}
                />
              </div>

              <div className="honey" aria-hidden>
                <label htmlFor="cf-botcheck">Leave this empty</label>
                <input
                  id="cf-botcheck"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
                style={{
                  ...primaryButton,
                  padding: '14px 20px',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'progress' : 'pointer',
                }}
              >
                {status === 'sending' ? f.sending : f.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

const primaryButton: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 18px',
  borderRadius: 5,
  border: 'none',
  cursor: 'pointer',
  background: c.acc,
  color: c.accInk,
  fontFamily: mono,
  fontSize: 13,
  fontWeight: 700,
}

const outlineButton: React.CSSProperties = {
  alignSelf: 'flex-start',
  padding: '10px 16px',
  borderRadius: 5,
  border: `1px solid ${c.lineBright}`,
  background: 'transparent',
  cursor: 'pointer',
  fontFamily: mono,
  fontSize: 12,
  color: c.textSoft,
}

/** One row of the contact list: brand logo, then something a human can read. */
function ContactLink({
  href,
  label,
  icon,
  external = false,
  children,
}: {
  href: string
  label: string
  icon: ReactNode
  external?: boolean
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className="contact-row"
      aria-label={`${label}: ${String(children)}`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : null)}
    >
      {icon}
      <span>{children}</span>
    </a>
  )
}

/** Shared frame for the post-submit states, styled like an HTTP response. */
function Panel({
  route,
  status,
  statusColor,
  title,
  bodyText,
  children,
}: {
  route: string
  status: string
  statusColor: string
  title: string
  bodyText: string
  children: ReactNode
}) {
  return (
    <div
      role="status"
      style={{
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 14,
        fontFamily: mono,
      }}
    >
      <div style={{ fontSize: 12.5, color: 'oklch(0.55 0.01 250)' }}>{route}</div>
      <div style={{ fontSize: 12.5, color: statusColor }}>{status}</div>
      <div
        style={{
          fontSize: 19,
          color: c.text,
          fontFamily: sans,
          fontWeight: 600,
          marginTop: 8,
        }}
      >
        {title}
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
        {bodyText}
      </div>
      <div style={{ marginTop: 8 }}>{children}</div>
    </div>
  )
}

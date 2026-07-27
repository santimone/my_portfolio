import { useCallback, useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useI18n } from '../i18n/useI18n'
import type { Dict, Lang } from '../i18n/types'
import { c, mono } from '../theme'
import { TerminalChrome } from './heroes/HeroBoot'

type Tone = 'prompt' | 'normal' | 'dim' | 'accent' | 'error'

interface Line {
  text: string
  tone: Tone
}

const toneColor: Record<Tone, string> = {
  prompt: 'oklch(0.82 0.15 152)',
  normal: 'oklch(0.9 0.008 250)',
  dim: 'oklch(0.62 0.01 250)',
  accent: 'oklch(0.82 0.15 152)',
  error: 'oklch(0.68 0.16 25)',
}

const dim = (text: string): Line => ({ text, tone: 'dim' })
const nor = (text: string): Line => ({ text, tone: 'normal' })
const acc = (text: string): Line => ({ text, tone: 'accent' })
const blank = (): Line => ({ text: '', tone: 'dim' })

const greeting = (t: Dict): Line[] => [dim(t.terminal.welcome), blank()]

/** Pads command names so the help output lines up like a real man page. */
function helpLines(t: Dict): Line[] {
  const width = Math.max(...t.terminal.help.map((r) => r.cmd.length)) + 2
  return [
    dim(t.terminal.helpIntro),
    ...t.terminal.help.map((r) => nor('  ' + r.cmd.padEnd(width) + r.desc)),
    blank(),
  ]
}

export function Terminal() {
  const { t, lang, setLang } = useI18n()
  const [lines, setLines] = useState<Line[]>(() => greeting(t))
  const [value, setValue] = useState('')
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  // A transcript half in English and half in Spanish reads like a bug, so
  // AboutSection keys this component by language — switching remounts it with
  // a fresh greeting.

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [lines])

  const run = useCallback(
    (raw: string) => {
      const cmd = raw.trim()
      const key = cmd.toLowerCase()
      const term = t.terminal

      if (key === 'clear') {
        setLines([])
        return
      }

      const out: Line[] = [{ text: '❯ ' + cmd, tone: 'prompt' }]

      if (key === '') {
        setLines((prev) => [...prev, ...out])
        return
      }

      switch (true) {
        case key === 'help':
          out.push(...helpLines(t))
          break

        case key === 'whoami':
          out.push(nor(term.whoami[0]), dim(term.whoami[1]), blank())
          break

        case key === 'stack':
          for (const g of t.stack.groups) {
            out.push(acc(g.dir), nor('  ' + g.items.map((i) => i.name).join(', ')))
          }
          out.push(blank())
          break

        case key === 'mobile':
          out.push(nor(term.mobile[0]), dim(term.mobile[1]), dim(term.mobile[2]), blank())
          break

        case key === 'projects':
          for (const k of t.work.cases) {
            out.push(acc(k.num + '  ' + k.title), dim('    ' + k.meta))
          }
          out.push(blank(), dim(term.projectsNote), blank())
          break

        case key === 'rates':
          out.push(...term.rates.map(nor), blank())
          break

        case key === 'contact':
          out.push(
            acc(profile.email),
            nor(`${profile.github.label}  ·  ${profile.linkedin.label}`),
            dim(term.contactLocation),
            blank(),
          )
          break

        case key === 'sudo hire' || key === 'sudo hire me' || key === 'hire':
          out.push(dim(term.sudoPrompt), acc(term.sudoGranted), nor(term.sudoWhere), blank())
          break

        case key === 'ls':
          out.push(nor(term.ls), blank())
          break

        case key === 'lang' || key === 'lang es' || key === 'lang en': {
          const requested = key.split(' ')[1] as Lang | undefined
          const next: Lang = requested ?? (lang === 'en' ? 'es' : 'en')
          setLang(next)
          // The remount wipes the buffer, so printing anything here is pointless.
          return
        }

        case key === 'exit':
          out.push(dim(term.exit), blank())
          break

        default:
          out.push({ text: `${term.notFound} ${cmd}`, tone: 'error' }, dim(term.tryHelp), blank())
      }

      setLines((prev) => [...prev, ...out])
    },
    [t, lang, setLang],
  )

  const focus = () => inputRef.current?.focus()

  return (
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
        {t.about.terminalEyebrow}
      </div>

      {/* clicking anywhere in the window puts the caret in the input, like a real terminal */}
      <div
        onClick={focus}
        style={{
          border: `1px solid ${c.lineStrong}`,
          borderRadius: 9,
          background: c.bgTerminal,
          overflow: 'hidden',
          boxShadow: '0 30px 70px -34px oklch(0.05 0 0 / 0.9)',
        }}
      >
        <TerminalChrome title={t.terminal.title} />

        <div
          ref={scrollRef}
          style={{
            height: 'clamp(330px, 52vh, 460px)',
            overflowY: 'auto',
            padding: 16,
            fontFamily: mono,
            fontSize: 12.5,
            lineHeight: 1.75,
          }}
        >
          <div aria-live="polite">
            {lines.map((l, i) => (
              <div
                key={i}
                style={{ color: toneColor[l.tone], whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
              >
                {l.text || ' '}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
            <span style={{ color: c.acc }}>❯</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  run(value)
                  setValue('')
                }
              }}
              spellCheck={false}
              autoComplete="off"
              aria-label={t.terminal.title}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontFamily: mono,
                fontSize: 12.5,
                color: c.text,
                padding: 0,
                minWidth: 0,
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
        {t.terminal.hints.map((cmd) => (
          <button
            key={cmd}
            type="button"
            className="hint-pill"
            onClick={() => {
              run(cmd)
              focus()
            }}
            style={{
              fontFamily: mono,
              fontSize: 11,
              padding: '5px 11px',
              borderRadius: 999,
              border: `1px solid ${c.lineStrong}`,
              background: 'transparent',
              color: c.textDim,
              cursor: 'pointer',
            }}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  )
}

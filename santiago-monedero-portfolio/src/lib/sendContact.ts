import { profile } from '../data/profile'

export interface ContactPayload {
  name: string
  email: string
  message: string
  needs: string[]
}

const KEY = (import.meta.env.VITE_WEB3FORMS_KEY ?? '').trim()

/**
 * True when a Web3Forms key is configured and the form can post straight to
 * the inbox. Without one the form still works — it hands off to the visitor's
 * mail client instead, which is honest rather than a silent no-op.
 */
export const canPostDirectly = KEY.length > 0

const body = (p: ContactPayload) =>
  [
    `Name: ${p.name || '—'}`,
    `Email: ${p.email || '—'}`,
    `Needs: ${p.needs.length ? p.needs.join(', ') : '—'}`,
    '',
    p.message,
  ].join('\n')

export function mailtoUrl(p: ContactPayload): string {
  const subject = p.name ? `Project enquiry — ${p.name}` : 'Project enquiry'
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body(p))}`
}

/** Posts to Web3Forms. Throws on any non-success so the caller can show the fallback. */
export async function postContact(p: ContactPayload): Promise<void> {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: KEY,
      subject: p.name ? `Portfolio — ${p.name}` : 'Portfolio — new enquiry',
      from_name: 'santiagomonedero.dev',
      name: p.name,
      email: p.email,
      needs: p.needs.join(', '),
      message: p.message,
    }),
  })

  const data: { success?: boolean; message?: string } = await res
    .json()
    .catch(() => ({}) as Record<string, never>)

  if (!res.ok || !data.success) {
    throw new Error(data.message ?? `Web3Forms responded ${res.status}`)
  }
}

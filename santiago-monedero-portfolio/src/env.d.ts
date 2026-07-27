/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Web3Forms access key. Without it the contact form falls back to opening
   * the visitor's mail client. Safe to expose in the bundle — it only permits
   * submitting to the address the key was registered with.
   */
  readonly VITE_WEB3FORMS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

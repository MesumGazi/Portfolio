/**
 * Thin wrapper around fetch for the portfolio backend.
 *
 * NOTE: everything in this file ships to the browser. Never put API keys,
 * secrets or private data here — only public endpoints.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

export const isBackendConfigured = Boolean(API_BASE_URL)

async function request(path, options = {}) {
  if (!isBackendConfigured) {
    throw new Error('BACKEND_NOT_CONFIGURED')
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`)
  }

  // 204 No Content → nothing to parse.
  return response.status === 204 ? null : response.json()
}

/** Returns the public portfolio payload. Expected shape = fallbackPortfolio. */
export function fetchPortfolio(signal) {
  return request('/api/portfolio', { signal })
}

/** Sends a contact message. The backend decides where it actually goes. */
export function sendContactMessage(payload) {
  return request('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}
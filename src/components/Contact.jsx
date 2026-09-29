import { useState } from 'react'
import { isBackendConfigured, sendContactMessage } from '../lib/api'

const EMPTY_FORM = { name: '', email: '', message: '' }

export default function Contact({ socials }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    setErrorMessage('')

    try {
      await sendContactMessage(form)
      setForm(EMPTY_FORM)
      setStatus('sent')
    } catch {
      setErrorMessage(
        isBackendConfigured
          ? 'Something went wrong. Please try again.'
          : 'The contact form is not connected yet.'
      )
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__intro">
            <p className="eyebrow">CONTACT</p>
            <h2 className="section__title contact__title">
              <span>Let’s</span> talk.
            </h2>

            {socials?.length > 0 && (
              <ul className="socials">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      className="link"
                      href={social.url}
                      target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                      rel={social.url.startsWith('mailto:') ? undefined : 'noreferrer noopener'}
                    >
                      {social.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate={false}>
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                minLength={3}
                maxLength={50}
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="field field--message">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={500}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="form__footer">
              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              <p className="form__status" role="status" aria-live="polite">
                {status === 'sent' && (
                  <span className="form__status--success">
                    Thanks — your message was sent.
                  </span>
                )}
                {status === 'error' && (
                  <span className="form__status--error">{errorMessage}</span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
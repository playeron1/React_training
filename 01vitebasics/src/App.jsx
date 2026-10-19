import { useState } from 'react'
import { deleteCookie, getCookie, setCookie } from '../../cookies.js'
import './App.css'

function App() {
  const [consent, setConsent] = useState(() => getCookie('cookieConsent'))

  function chooseConsent(choice) {
    setCookie('cookieConsent', choice)
    setConsent(choice)
  }

  function changeChoice() {
    deleteCookie('cookieConsent')
    setConsent(null)
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Cookie Lab home">
          <span className="wordmark-mark" aria-hidden="true">C</span>
          COOKIE LAB
        </a>
        <span className="lesson-label">BROWSER BASICS <span> / </span> 01</span>
      </header>

      <section className="lesson" id="home">
        <div className="lesson-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> INTERACTIVE LESSON</p>
          <h1>A tiny choice.<br />A real cookie.</h1>
          <p className="intro">
            This demo asks whether you want to accept or deny cookies. Your choice
            is saved in a browser cookie, so it stays here when you come back.
          </p>

          <section className="consent-panel" aria-labelledby="consent-title">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">YOUR PREFERENCE</p>
                <h2 id="consent-title">
                  {consent ? 'You have made your choice' : 'Can we use cookies?'}
                </h2>
              </div>
              <span className={`status-dot ${consent ? 'is-set' : ''}`} aria-hidden="true" />
            </div>
            <p className="panel-description">
              {consent
                ? `Cookie consent is currently set to “${consent}”. You can change it any time.`
                : 'This tutorial only stores your answer. No tracking or advertising cookies are used.'}
            </p>
            {consent ? (
              <button className="change-button" type="button" onClick={changeChoice}>
                Change my choice <span aria-hidden="true">↗</span>
              </button>
            ) : (
              <div className="actions">
                <button className="accept-button" type="button" onClick={() => chooseConsent('accepted')}>
                  Accept cookies <span aria-hidden="true">→</span>
                </button>
                <button className="deny-button" type="button" onClick={() => chooseConsent('denied')}>
                  Deny
                </button>
              </div>
            )}
          </section>
        </div>

        <aside className="cookie-readout" aria-label="Cookie value in your browser">
          <div className="readout-top">
            <span className="readout-light" />
            <span className="readout-light" />
            <span className="readout-light" />
            <span className="readout-title">BROWSER COOKIE</span>
            <span className="readout-live">LIVE</span>
          </div>
          <div className="readout-body">
            <p className="readout-label">document.cookie</p>
            <code>{consent ? `cookieConsent=${consent}` : 'No consent cookie yet'}</code>
            <div className="readout-rule" />
            <p className="readout-label">WHAT HAPPENS</p>
            <p className="readout-note">
              {consent
                ? 'Refresh the page. Your preference will be read back from the cookie.'
                : 'Choose either option above to write a cookie and update this readout.'}
            </p>
          </div>
          <div className="readout-footer">
            <span>cookieConsent</span>
            <span>SameSite=Lax</span>
          </div>
        </aside>
      </section>

      <footer className="page-footer">
        <span>LEARN BY DOING</span>
        <span>01 / COOKIES <span className="footer-mark">●</span></span>
      </footer>
    </main>
  )
}

export default App

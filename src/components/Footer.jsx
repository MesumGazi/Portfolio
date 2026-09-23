export default function Footer({ lastUpdated }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__copyright">© Mesum Gazi</p>

        <hr className="footer__rule" />

        <p className="footer__line">
          Developed, maintained and owned by Gazi Mohammad Meesam
          <span className="footer__dot">·</span>
          Last updated {lastUpdated}
        </p>
      </div>
    </footer>
  )
}
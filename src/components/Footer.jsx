import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">
            <div className="footer-logo-badge">
              DS
            </div>

            <div className="footer-logo-text">
              <span className="footer-logo-dev">
                Dev
              </span>

              <span className="footer-logo-stack">
                Stack
              </span>
            </div>
          </div>

          <p className="footer-tagline">
            Curated tools, technologies, and resources for
            developers building modern software.
          </p>

          {/* Social links */}
          <div className="footer-socials">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>

        </div>

        {/* Product */}
        <div className="footer-column">
          <h3>PRODUCT</h3>

          <a href="#root">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>COMPANY</h3>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Careers</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>LEGAL</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

      {/* Footer bottom  */}  
      <div className="footer-bottom">
        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer
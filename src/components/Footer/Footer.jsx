import { Github, Instagram, Linkedin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-col left">
          <span className="logo-interactive">Capacity</span>
          <p className="copyright">
            © 2026 ARCHIVE_COLLECTION. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="footer-col right">
          <span className="system-status">
            SYSTEM_STATUS: <span className="status-online">ONLINE</span>
          </span>
          <div className="social-links">
            <a
              href="https://github.com/rafaelramunieh/ProjectCapacity.git"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-ramunieh-15a069287/"
              target="_blank"
              rel="roreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/rafael.ramunieh_?igsh=bjk1ZzB5MTQwZTNm&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

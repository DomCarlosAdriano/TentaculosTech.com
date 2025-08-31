import React from "react";
import styles from "./Header.module.css";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll"; // 🔥 Import do react-scroll
import logo from "../../../public/logo.png";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <Fade
      className={styles.containerFade}
      direction="up"
      delay={150}
      cascade
      damping={0.1}
      triggerOnce
    >
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <h3 className={styles.logoText}>TentaculosTech</h3>
          </div>

          <nav className={styles.navDesktop}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              style={{ cursor: "pointer" }}
            >
              Home
            </Link>
            <Link
              to="SobreNos"
              smooth={true}
              duration={150}
              offset={0}
              style={{ cursor: "pointer" }}
            >
              Sobre
            </Link>
            <Link
              to="plans"
              smooth={true}
              duration={150}
              offset={-50}
              style={{ cursor: "pointer" }}
            >
              Planos
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={150}
              offset={-50}
              style={{ cursor: "pointer" }}
            >
              Portfólio
            </Link>
            <Link
              to="processo"
              smooth={true}
              duration={150}
              offset={0}
              style={{ cursor: "pointer" }}
            >
              Processo
            </Link>
            <Link
              to="faq"
              smooth={true}
              duration={150}
              offset={0}
              style={{ cursor: "pointer" }}
            >
              FAQ
            </Link>
          </nav>

          <a
            className={styles.sellButton}
            href="https://wa.me/5582993647023"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:"none"}}
          >
            Fale conosco
          </a>

          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {menuOpen && (
          <nav className={styles.navMobile} onClick={() => setMenuOpen(false)}>
            <div className={styles.closeButton}>x</div>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="SobreNos"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="plans"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setMenuOpen(false)}
            >
              Planos
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setMenuOpen(false)}
            >
              Portfólio
            </Link>
            <Link
              to="processo"
              smooth={true}
              duration={500}
              offset={-50}
              onClick={() => setMenuOpen(false)}
            >
              Processo
            </Link>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              offset={-50}
              style={{ cursor: "pointer" }}
            >
              FAQ
            </Link>
            <a
              href="https://wa.me/5582993647023"
              target="_blank"
              rel="noopener noreferrer"
              style={{ cursor: "pointer" }}
            >
              Contato
            </a>
          </nav>
        )}
      </header>
    </Fade>
  );
}

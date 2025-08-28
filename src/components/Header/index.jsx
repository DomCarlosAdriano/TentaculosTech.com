import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../public/logo.png"; // caminho para sua logo

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}

        <div className={styles.logoContainer}>
          <h3 className={styles.logoText}>TentaculosTech</h3>
        </div>

        {/* Menu desktop */}
        <nav className={styles.navDesktop}>
          <a href="#overview">Home</a>
          <a href="#features">Serviços</a>
          <a href="#pricing">Processo</a>
          <a href="#about">EQ's</a>
          <a href="#about">Portifolio</a>
        </nav>

        {/* Botão SELL (desktop) */}
        <button className={styles.sellButton}>Fale conosco</button>

        {/* Menu mobile */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Menu mobile aberto */}
      {menuOpen && (
        <nav className={styles.navMobile} onClick={() => setMenuOpen(false)}>
          <div className={styles.closeButton}>x</div>
          <a href="#overview" onClick={() => setMenuOpen(false)}>
            Overview
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
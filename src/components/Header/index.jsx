import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerh}>
      <div className={styles.containerHeader}>
        <div className={styles.logo}>
          <h1>TentaculosTech</h1>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#home" className={styles.navLink}>Home</a></li>
            <li><a href="#sobre" className={styles.navLink}>Sobre</a></li>
            <li><a href="#planos" className={styles.navLink}>Planos</a></li>
            <li><a href="#portfolio" className={styles.navLink}>Portfólio</a></li>
            <li><a href="#processo" className={styles.navLink}>Processo</a></li>
            <li><a href="#faq" className={styles.navLink}>FAQ</a></li>
          </ul>
        </nav>

        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>Fale conosco</button>
        </div>

        <button 
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
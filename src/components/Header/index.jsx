import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
            <li>
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className={styles.navLink} 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="sobre" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className={styles.navLink} 
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link 
                to="planos" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className={styles.navLink} 
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </Link>
            </li>
            <li>
              <Link 
                to="portfolio" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className={styles.navLink} 
                onClick={() => setIsMenuOpen(false)}
              >
                Portfólio
              </Link>
            </li>
            <li>
              <Link 
                to="processo" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className={styles.navLink} 
                onClick={() => setIsMenuOpen(false)}
              >
                Processo
              </Link>
            </li>
            <li>
              <Link 
                to="faq" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className={styles.navLink} 
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.ctaContainer}>
          <a href="https://wa.me/5582993647023" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>Fale conosco</a>
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

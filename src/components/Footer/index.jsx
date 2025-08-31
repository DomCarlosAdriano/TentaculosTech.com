import React from "react";
import styles from "./Footer.module.css";
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Footer = ({ menuOpen }) => {
  return (
    <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
      <footer
        className={styles.footer}
        style={{ display: menuOpen ? "none" : "flex" }}
      >
        <div className={styles.container}>
          {/* Texto à esquerda */}
          <p className={styles.copy}>
            © 2025 TentaculosTech, Inc. All rights reserved.
          </p>

          {/* Links do meio */}
          <ul className={styles.links}>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>

          {/* Redes sociais à direita */}
          <div className={styles.social}>
            <a href="/">
              <FaYoutube />
            </a>
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;

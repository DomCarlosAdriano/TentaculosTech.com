import React from "react";
import styles from "./Footer.module.css";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.line} />

      <div className={styles.container}>
        {/* Texto à esquerda */}
        <p className={styles.copy}>
          © 2023 Protech, Inc. All rights reserved.
        </p>

        {/* Links do meio */}
        <ul className={styles.links}>
          <li><a href="/">Terms</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Contact</a></li>
        </ul>

        {/* Redes sociais à direita */}
        <div className={styles.social}>
          <a href="/"><FaYoutube /></a>
          <a href="/"><FaFacebookF /></a>
          <a href="/"><FaTwitter /></a>
          <a href="/"><FaInstagram /></a>
          <a href="/"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
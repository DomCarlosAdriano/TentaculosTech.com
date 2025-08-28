import React from "react";
import styles from "./GlowButton.module.css";

const GlowButton = ({ children, onClick }) => {
  const handleClick = (e) => {
    const button = e.currentTarget;

    // Criar efeito ripple
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.className = styles.ripple;

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);

    if (onClick) onClick(e);
  };

  const handleMouseEnter = (e) => {
    const button = e.currentTarget;

    // Criar partículas
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const particle = document.createElement("div");
        particle.className = styles.particle;
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = "100%";
        particle.style.animationDelay = Math.random() * 0.5 + "s";

        button.appendChild(particle);
        setTimeout(() => particle.remove(), 2000);
      }, i * 100);
    }
  };

  return (
    <button
      className={styles.glowButton}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {children} <span className={styles.arrow}>→</span>
    </button>
  );
};

export default GlowButton;

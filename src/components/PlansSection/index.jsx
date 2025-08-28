import React from "react";
import styles from "./PlansSection.module.css";
import GlowButton from "../GlowButton";

const PlansSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Texto à esquerda */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Escolha o Plano que melhor se adequa à sua empresa
          </h2>
          <p className={styles.subtitle}>
            Seu site profissional e gestão de campanhas de tráfego para atrair
            clientes qualificados. Aumente seu faturamento e sua presença online.
          </p>
          <GlowButton>Saiba Mais</GlowButton>
        </div>

        {/* Cards à direita */}
        <div className={styles.cardsGrid}>
          <div className={`${styles.card} ${styles.cardLarge}`}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;

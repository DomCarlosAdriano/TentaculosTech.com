import React from "react";
import styles from "./PlansSection.module.css";
import GlowButton from "../GlowButton";
import { Fade } from "react-awesome-reveal";

const PlansSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Texto à esquerda */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Escolha o Plano que melhor se adequa à sua empresa
            </h2>
            <p className={styles.subtitle}>
              Seu site profissional e gestão de campanhas de tráfego para atrair
              clientes qualificados. Aumente seu faturamento e sua presença
              online.
            </p>
            <GlowButton>Saiba Mais</GlowButton>
          </div>
        </Fade>

        {/* Cards à direita */}
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className={styles.cardsGrid}>
            <div className={`${styles.card} ${styles.cardLarge}`}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default PlansSection;

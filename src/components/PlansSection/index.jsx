import React from "react";
import styles from "./PlansSection.module.css";
import GlowButton from "../GlowButton";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

const PricingSection = ({ menuOpen }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 1,
      icon: "🎨",
      name: "Website Completo",
      description:
        "Criação de website profissional e responsivo, otimizado para conversão e resultados.",
      features: [
        "Design responsivo e moderno",
        "Otimização para SEO",
        "Hospedagem",
        "Certificado SSL incluso",
        "Suporte técnico",
      ],
    },
    {
      id: 2,
      icon: "📈",
      name: "Gestão de Tráfego Pago",
      description:
        "Campanhas profissionais de Google Ads e Facebook Ads para maximizar seu ROI.",
      features: [
        "Configuração de campanhas",
        "Criação de anúncios",
        "Otimização contínua",
        "Relatórios mensais",
        "Acompanhamento de métricas",
      ],
      
    },
    {
      id: 3,
      icon: "🚀",
      name: "Pacote Completo",
      description:
        "A solução completa para sua presença digital: website + gestão de tráfego pago.",
      features: [
        "Website completo",
        "Gestão de tráfego pago",
        "Elaboração de campanhas",,
        "Hospedagem",
        "Suporte prioritário",
        "Acompanhamento de métricas",
      ],
      popular: true,
    },
  ];

  return (
    <section
      id="planos"
      className={styles.container}
      style={{ display: menuOpen ? "none" : "flex" }}
    >
      <div className={styles.wrapper}>
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className={styles.header}>
            <h2 className={styles.title}>Nossos Planos</h2>
            <p className={styles.subtitle}>
              Escolha a solução ideal para impulsionar seu negócio online.
              Oferecemos desde criação de websites até gestão completa de
              tráfego pago.
            </p>
          </div>
        </Fade>
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className={styles.plansGrid}>
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`${styles.planCard} ${
                  hoveredCard === plan.id ? styles.planCardHover : ""
                }`}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>Mais Popular</div>
                )}

                <div className={styles.planIcon}>{plan.icon}</div>

                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>

                <ul className={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <div className={styles.checkIcon}>✓</div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={styles.buttonWrapper}>
                  <GlowButton>Saiba Mais</GlowButton>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default PricingSection;

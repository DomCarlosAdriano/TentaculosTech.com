import React from "react";
import styles from "./ProcessSection.module.css";
import { FaTruck, FaTrophy, FaTools, FaChartLine } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import animacao from "../../assets/Scene.json";
import Lottie from "lottie-react";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: FaTruck,
      title: "Solicitação de Orçamento",
      description: "Entre em contato e conte o que você precisa: criação de site, gestão de tráfego pago ou nosso plano premium. Em poucas horas você recebe uma proposta personalizada e transparente."
    },
    {
      icon: FaTrophy,
      title: "Elaboração do Contrato",
      description: "Após aprovar a proposta, formalizamos tudo para sua segurança. Você recebe um contrato claro, com prazos, valores e garantias definidas."
    },
    {
      icon: FaTools,
      title: "Criação e Entrega",
      description: "Colocamos a mão na massa! Criamos seu site profissional e/ou configuramos campanhas de tráfego pago, sempre mantendo você atualizado."
    },
    {
      icon: FaChartLine,
      title: "Sucesso",
      description: "Com seu projeto no ar e campanhas rodando, você começa a atrair visitantes qualificados e gerar mais resultados para o seu negócio."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Imagem - Descomente quando necessário */}
        {/* <div className={styles.imageWrapper}>
          <Lottie
            animationData={animacao}
            loop={true}
            autoplay={true}
            className={styles.lottieAnimation}
          />
        </div> */}

        {/* Texto e Etapas */}
        <div className={styles.textContent}>
          <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
            <div className={styles.headerContent}>
              <h2 className={styles.title}>Processo de Contratação</h2>
              <p className={styles.subtitle}>
                Veja como é simples dar o próximo passo para impulsionar sua
                presença online e atrair mais clientes.
              </p>
            </div>
          </Fade>

          <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce>
            <div className={styles.stepsGrid}>
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className={styles.step}>
                    <div className={styles.iconWrapper}>
                      <IconComponent className={styles.icon} />
                    </div>
                    <div className={styles.stepContent}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepText}>{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
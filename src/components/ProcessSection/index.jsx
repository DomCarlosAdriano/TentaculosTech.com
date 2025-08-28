import React from "react";
import styles from "./ProcessSection.module.css";
import { FaTruck, FaTrophy, FaTools, FaChartLine } from "react-icons/fa";
import animacao from "../../assets/Scene.json";
import Lottie from "lottie-react";

const ProcessSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Imagem */}
        <div className={styles.imageWrapper}>
          <Lottie
            animationData={animacao}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Texto e Etapas */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>Processo de Contratação</h2>
          <p className={styles.subtitle}>
            Veja como é simples dar o próximo passo para impulsionar sua
            presença online e atrair mais clientes.
          </p>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <FaTruck className={styles.icon} />
              <h3 className={styles.stepTitle}>Solicitação de Orçamento</h3>
              <p className={styles.stepText}>
                Entre em contato e conte o que você precisa: criação de site,
                gestão de tráfego pago ou nosso plano premium. Em poucas horas
                você recebe uma proposta personalizada e transparente.
              </p>
            </div>

            <div className={styles.step}>
              <FaTrophy className={styles.icon} />
              <h3 className={styles.stepTitle}>Elaboração do Contrato</h3>
              <p className={styles.stepText}>
                Após aprovar a proposta, formalizamos tudo para sua segurança.
                Você recebe um contrato claro, com prazos, valores e garantias
                definidas.
              </p>
            </div>

            <div className={styles.step}>
              <FaTools className={styles.icon} />
              <h3 className={styles.stepTitle}>Criação e Entrega</h3>
              <p className={styles.stepText}>
                Colocamos a mão na massa! Criamos seu site profissional e/ou
                configuramos campanhas de tráfego pago, sempre mantendo você
                atualizado.
              </p>
            </div>

            <div className={styles.step}>
              <FaChartLine className={styles.icon} />
              <h3 className={styles.stepTitle}>Sucesso</h3>
              <p className={styles.stepText}>
                Com seu projeto no ar e campanhas rodando, você começa a atrair
                visitantes qualificados e gerar mais resultados para o seu
                negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

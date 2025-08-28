import Lottie from "lottie-react";
import styles from "./Hero.module.css";
import animacao from "../../assets/animation.json";
import GlowButton from "../GlowButton";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <div className={styles.content}>
          <div className={styles.textHero}>
            <p className={styles.subtitle}>
              Sites que Vendem: Mais Clientes, Mais Faturamento
            </p>
            <h1 className={styles.title}>
              Precisa de um Site Para Atrair Mais Clientes e Aumente Seu
              Faturamento?
            </h1>
            <p className={styles.text}>
              Criamos seu site profissional e gerenciamos campanhas de tráfego
              para atrair clientes qualificados para seu negocio. Sem burocracia
              e preços acessíveis. Fale conosco e solicite seu orçamento sem
              compromisso!
            </p>
            <div className={styles.buttons}>
              <GlowButton style={{ cursor: "pointer" }}>
                {" "}
                Orçamento Gratuito{" "}
              </GlowButton>
            </div>
            <div className={styles.circleShodow}></div>
          </div>

          <div className={styles.animationHero}>
            <Lottie
              animationData={animacao}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </Fade>
    </section>
  );
}

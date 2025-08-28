import React, { useEffect, useRef, useState } from "react";
import styles from "./Vsl.module.css";
import GlowButton from "../GlowButton";

const PricingSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;


    const handlePlay = () => {
      video.style.backgroundColor = "black";
    };

    
    video.addEventListener("play", handlePlay);


  }, []);





  return (
    <section className={styles.pricingSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          Transforme Sua Presença Digital e <br/> Atraia Mais Cliente
        </h2>
        <p className={styles.subtitle}>
          Nós criamos sites profissionais e gerenciamos campanhas de tráfego para que pequenos negócios e autônomos cresçam online de forma acessível e estratégica.
        </p>
      </div>

      <div className={styles.browserMock}>
        <video
          ref={videoRef}
          className="meuVideo"
          src="/video.mp4"
          controls
          width="100%"
          height="100%"
          poster="/tumb.svg"
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>

   
    </section>
  );
};

export default PricingSection;

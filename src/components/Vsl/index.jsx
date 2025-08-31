import React, { useEffect, useRef, useState } from "react";
import styles from "./Vsl.module.css";
import GlowButton from "../GlowButton";
import { Fade } from "react-awesome-reveal";

const VSLSection = ({ menuOpen }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      video.style.backgroundColor = "black";
    };

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const handleError = () => {
      console.error("Erro ao carregar o vídeo");
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <section
      className={styles.vslSection}
      style={{ display: menuOpen ? "none" : "flex" }}
    >
      <div className={styles.container}>
        <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>
              Transforme Sua Presença Digital e{" "}
              <span className={styles.highlight}>Atraia Mais Clientes</span>
            </h2>
            <p className={styles.subtitle}>
              Nós criamos sites profissionais e gerenciamos campanhas de tráfego
              para que pequenos negócios e autônomos cresçam online de forma
              acessível e estratégica.
            </p>
          </div>
        </Fade>

        <Fade direction="up" delay={300} triggerOnce>
          <div className={styles.videoContainer}>
            <div className={styles.browserMock}>
              <div className={styles.videoWrapper}>
                <video
                  ref={videoRef}
                  className={styles.video}
                  src="/video.webm"
                  controls
                  poster=""
                  preload="metadata"
                  playsInline
                >
                  Seu navegador não suporta o elemento de vídeo.
                </video>

                {!isVideoLoaded && (
                  <div className={styles.videoPlaceholder}>
                    <div className={styles.playButton}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default VSLSection;

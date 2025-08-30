import React, { useState } from "react";
import styles from "./faq.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(); // Primeira pergunta aberta por padrão

  const faqData = [
    {
      question: "Como funciona o processo de criação do meu site?",
      answer: "Nosso processo é dividido em 4 etapas simples: análise das suas necessidades, criação do design personalizado, desenvolvimento técnico e entrega final. Durante todo o processo, você recebe atualizações regulares e pode solicitar ajustes para garantir que o resultado final atenda perfeitamente às suas expectativas."
    },
    {
      question: "Quanto tempo leva para o meu site ficar pronto?",
      answer: "O prazo varia de acordo com a complexidade do projeto. Sites institucionais ficam prontos em 7-14 dias úteis, enquanto e-commerces podem levar de 15-30 dias. Sempre definimos prazos claros no contrato e mantemos você informado sobre o progresso."
    },
    {
      question: "Vocês oferecem suporte após a entrega do site?",
      answer: "Sim! Oferecemos 30 dias de suporte gratuito após a entrega para pequenos ajustes e correções. Também temos planos de manutenção mensal que incluem atualizações de segurança, backups automáticos e suporte técnico contínuo."
    },
    {
      question: "Como funciona a gestão de tráfego pago?",
      answer: "Criamos e gerenciamos suas campanhas no Google Ads e Facebook/Instagram Ads. Fazemos pesquisa de palavras-chave, criação de anúncios, configuração de público-alvo e otimização contínua. Você recebe relatórios semanais com os resultados e métricas de performance."
    },
    {
      question: "Preciso fornecer as imagens e textos para o site?",
      answer: "Não necessariamente. Podemos criar todo o conteúdo para você, incluindo textos otimizados para SEO e seleção de imagens profissionais. Se você já tem materiais, ótimo! Caso contrário, nossa equipe cuida de tudo para você."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Fade direction="up" delay={150} triggerOnce>
          <div className={styles.header}>
            <h2 className={styles.title}>Perguntas Frequentes</h2>
            <p className={styles.subtitle}>
              Tire suas dúvidas sobre nossos serviços e processo de trabalho
            </p>
          </div>
        </Fade>

        <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce>
          <div className={styles.faqContainer}>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${
                    openIndex === index ? styles.active : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.iconWrapper}>
                    {openIndex === index ? (
                      <FaChevronUp className={styles.icon} />
                    ) : (
                      <FaChevronDown className={styles.icon} />
                    )}
                  </span>
                </button>
                
                <div
                  className={`${styles.faqAnswer} ${
                    openIndex === index ? styles.open : ""
                  }`}
                >
                  <div className={styles.answerContent}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default FAQSection;
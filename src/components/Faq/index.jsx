import { useState } from "react";
import styles from "./Faq.module.css";
import { Fade } from "react-awesome-reveal";


const faqs = [
  {
    question:
      "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
    answer:
      "Adipiscing ac lacus vel sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nisl enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae vitae fringilla eu tellus neque est feugiat.",
  },
  {
    question:
      "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    answer: "Aqui entra a resposta para esta pergunta específica.",
  },
  {
    question:
      "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
    answer: "Aqui entra a resposta para esta pergunta específica.",
  },
  {
    question:
      "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
    answer: "Aqui entra a resposta para esta pergunta específica.",
  },
  {
    question:
      "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
    answer: "Aqui entra a resposta para esta pergunta específica.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
            <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
      
      <h2 className={styles.title}>Frequently asked questions</h2>
      </Fade>
                  <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <span
                className={`${styles.icon} ${
                  openIndex === index ? styles.rotate : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <p className={styles.answer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      </Fade>
    </section>
  );
}
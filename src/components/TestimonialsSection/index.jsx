import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./TestimonialsSection.module.css";
import { Fade } from "react-awesome-reveal";

const testimonials = [
  {
    id: 1,
    name: "Mariana Souza",
    role: "Dona de Loja de Roupas Femininas",
    text: `"Contratei a agência para cuidar das campanhas de tráfego pago e fiquei impressionada com o resultado! Em poucas semanas, minhas vendas online aumentaram e consegui atrair novos clientes para a loja física. O atendimento é excelente e super próximo."`,
    image: "./anonimos.png",
    bg: "#111319",
  },
  {
    id: 2,
    name: "Rafael Almeida",
    role: "Personal Trainer",
    text: `"O site que criaram para mim ficou incrível! Agora consigo apresentar meus serviços de forma profissional e atrair clientes pelo Instagram e Google. A equipe também me ajudou a investir em anúncios que realmente dão retorno."`,
    image:"./anonimos.png",    
    bg: "#111319",
    highlight: true,
  },
  {
    id: 3,
    name: "Camila Fernandes",
    role: "Fotógrafa de Casamentos",
    text: `"Sempre tive dificuldade em me destacar online, mas depois que comecei a trabalhar com essa agência, meu portfólio ficou muito mais profissional e meus clientes chegam através do site. O tráfego pago trouxe uma agenda cheia de eventos!"`,
    image:"./anonimos.png",
    bg: "#111319",
  },
  {
    id: 4,
    name: "João Pedro Ramos",
    role: "Corretor de Imóveis",
    text: `"Depois que contratei a agência, meu site ficou muito mais atrativo e organizado para mostrar meus imóveis. As campanhas de tráfego pago foram um sucesso: hoje recebo contatos de clientes qualificados todos os dias. Meu faturamento cresceu muito!"`,
    image: "./anonimos.png",
    bg: "#111319",
  },
  {
    id: 5,
    name: "Fernanda Castro",
    role: "Advogada Trabalhista",
    text: `"Meu escritório precisava de mais visibilidade online e essa agência fez toda a diferença. Eles criaram um site profissional e elegante, e as campanhas de anúncios trouxeram clientes que realmente procuram meus serviços. Foi um investimento que valeu a pena!"`,
    image: "./anonimos.png",
    bg: "#111319",
  },
];

export default function TestimonialsSection({ menuOpen }) {
  const [currentPage, setCurrentPage] = useState(0);

  // Quantos cards por página
  const itemsPerPage = 3;

  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  }, [currentPage]);

  return (
    <section className={styles.section}  style={{ display: menuOpen ? "none" : "" }}>
      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <p className={styles.subtitle}>TESTIMONIAL</p>
        <h2 className={styles.title}>
          O QUE NOSSOS <span>CLIENTES</span> DIZEM
        </h2>
      </Fade>
      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <div className={styles.grid}>
          {currentItems.map((t) => (
            <div
              key={t.id}
              className={`${styles.card} ${
                t.highlight ? styles.highlight : ""
              }`}
              style={{ background: t.bg }}
            >
              <div className={styles.cardHeader}>
                <img src={t.image} alt={t.name} className={styles.avatar} />
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              </div>
              <p className={styles.text}>{t.text}</p>
            </div>
          ))}
        </div>
      </Fade>

      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        {/* Paginação */}
        <ReactPaginate
          breakLabel="…"
          nextLabel="→"
          previousLabel="←"
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          onPageChange={(e) => setCurrentPage(e.selected)}
          forcePage={currentPage}
          renderOnZeroPageCount={null}
          // CSS
          containerClassName={styles.pagination}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          previousClassName={styles.pageItem}
          previousLinkClassName={styles.pageLink}
          nextClassName={styles.pageItem}
          nextLinkClassName={styles.pageLink}
          breakClassName={styles.pageItem}
          breakLinkClassName={styles.pageLink}
          activeClassName={styles.active}
          disabledClassName={styles.disabled}
        />
      </Fade>
    </section>
  );
}

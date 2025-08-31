import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./ProjectsSection.module.css";
import { Fade } from "react-awesome-reveal";

const allProjects = [
  {
    id: 1,
    title: "Site Institucional",
    category: "Site Completo para apresentar sua empresa",
    image: "../../../public/project01.webp",
  },
  {
    id: 2,
    title: "Landing Page",
    category: "Landing Page",
    image: "../../../public/project01.webp",
  },
  {
    id: 3,
    title: "Pagina de Captura de Leads",
    category: "Pagina de vendas",
    image: "../../../public/project01.webp",
  },
  {
    id: 4,
    title: "Juice Website for Creatives",
    category: "Show Project",
    image: "../../../public/project01.webp",
  },
  {
    id: 5,
    title: "E-commerce Moderno",
    category: "Web, UI/UX",
    image: "../../../public/project01.webp",
  },
  {
    id: 6,
    title: "App de Reservas",
    category: "Apps, Product",
    image: "../../../public/project01.webp",
  },
  {
    id: 7,
    title: "Dashboard Analytics",
    category: "Data, UI/UX",
    image: "../../../public/project01.webp",
  },
  {
    id: 8,
    title: "Landing Page Performance",
    category: "SEO, Web",
    image: "../../../public/project01.webp",
  },
];

export default function ProjectsSection({ menuOpen }) {
  const [currentPage, setCurrentPage] = useState(0);

  // Quantos cards por página (2x2 como no layout)
  const itemsPerPage = 4;

  const pageCount = Math.ceil(allProjects.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return allProjects.slice(start, start + itemsPerPage);
  }, [currentPage]);

  return (
    <section id="portfolio" className={styles.section} aria-label="Projetos recentes"  style={{ display: menuOpen ? "none" : "" }}>
      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <h2 className={styles.title}>
          A small selection of <span>recent projects</span>
        </h2>
      </Fade>
      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <div className={styles.grid}>
          {currentItems.map((project) => (
            <article key={project.id} className={styles.card}>
              <img src={project.image} alt={project.title} />
              <div className={styles.cardText}>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </Fade>
      <Fade direction="up" delay={150} cascade damping={0.1} triggerOnce>
        <ReactPaginate
          breakLabel="…"
          nextLabel=">"
          previousLabel="<"
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          onPageChange={(e) => setCurrentPage(e.selected)}
          forcePage={currentPage}
          renderOnZeroPageCount={null}
          // classes (CSS Modules)
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
          ariaLabelBuilder={(page) => `Ir para página ${page}`}
        />
      </Fade>
    </section>
  );
}

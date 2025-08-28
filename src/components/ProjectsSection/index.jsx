import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./ProjectsSection.module.css";

const allProjects = [
  { id: 1,  title: "Full-Stack Developer",        category: "Apps, UI/UX",  image: "/projects/project1.jpg" },
  { id: 2,  title: "Website for Creatives",       category: "Apps, Motion", image: "/projects/project2.jpg" },
  { id: 3,  title: "Brand Identity for Startups", category: "Branding, UI/UX", image: "/projects/project3.jpg" },
  { id: 4,  title: "Juice Website for Creatives", category: "Show Project", image: "/projects/project4.jpg" },
  { id: 5,  title: "E-commerce Moderno",          category: "Web, UI/UX",   image: "/projects/project5.jpg" },
  { id: 6,  title: "App de Reservas",             category: "Apps, Product", image: "/projects/project6.jpg" },
  { id: 7,  title: "Dashboard Analytics",         category: "Data, UI/UX",  image: "/projects/project7.jpg" },
  { id: 8,  title: "Landing Page Performance",    category: "SEO, Web",     image: "/projects/project8.jpg" },
];

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  // Quantos cards por página (2x2 como no layout)
  const itemsPerPage = 4;

  const pageCount = Math.ceil(allProjects.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return allProjects.slice(start, start + itemsPerPage);
  }, [currentPage]);

  return (
    <section className={styles.section} aria-label="Projetos recentes">
      <h2 className={styles.title}>
        A small selection of <span>recent projects</span>
      </h2>

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
    </section>
  );
}
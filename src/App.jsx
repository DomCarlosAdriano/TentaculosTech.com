import { useState } from "react";
import "./App.css";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectSection from "./components/ProjectsSection";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Vsl from "./components/Vsl";
import PlansSection from "./components/PlansSection";
import ProcessSection from "./components/ProcessSection";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero menuOpen={menuOpen} />
      <Vsl  menuOpen={menuOpen} />
      <PlansSection menuOpen={menuOpen} />
      <ProjectSection menuOpen={menuOpen} />
      <ProcessSection menuOpen={menuOpen} />
      <TestimonialsSection menuOpen={menuOpen}  />
      <Faq menuOpen={menuOpen} />
      <Footer menuOpen={menuOpen} />
    </>
  );
}

export default App;

import "./App.css";
import TestimonialsSection from "./components/TestimonialsSection";
import ProjectSection from "./components/ProjectsSection";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Vsl from "./components/Vsl";
import PlansSection from "./components/PlansSection";
import ProcessSection from "./components/ProcessSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Vsl />
      <PlansSection />
      <ProjectSection />
      <ProcessSection />
      <TestimonialsSection />
      <Faq />
      <Footer />
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import certificates from "./components/certificates";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <certificates />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
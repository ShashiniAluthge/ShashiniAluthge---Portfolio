import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <div className="bg-[var(--background)]">
      <Home />

      <About />

      <Projects />

      <TechStack />

      <Contact />
      <Footer/>
    </div>
  );
};

export default App;

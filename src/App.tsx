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
      <Projects/>
      <TechStack/>
      <Contact/>
    </div>
  );
};

export default App;

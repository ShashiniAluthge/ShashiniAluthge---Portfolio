import About from "./sections/About";
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
    </div>
  );
};

export default App;

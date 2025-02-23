import About from "./sections/About";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="bg-[var(--background)]">
      <Home />
      <About />
      <Projects/>
    </div>
  );
};

export default App;

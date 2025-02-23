import HorizontalLine from "../components/HorizontalLine";
import WebAppDevelopment from "../components/WebAppDevelopment";

const Projects = () => {
  return (
    <section className="lg:ml-30 lg:mr-30 pt-12 lg:pt-10 md:ml-10 md:mr-10 ml-2 mr-2 ">
      <h1 className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20">
        My
        <span className="text-[var(--primary)]"> Projects</span>
      </h1>
      <HorizontalLine />
      <WebAppDevelopment/>
      
    </section>
  );
};

export default Projects;

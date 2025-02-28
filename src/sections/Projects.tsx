import HorizontalLine from "../components/HorizontalLine";
import MobileAppDevelopment from "../components/MobileAppDevelopment";
import UIDesigns from "../components/UIDesigns";
import WebAppDevelopment from "../components/WebAppDevelopment";

const Projects = () => {
  return (
    <section className="lg:ml-30 lg:mr-30 pt-15 lg:pt-20 md:ml-10 md:mr-10 ml-2 mr-2 " id="projects">
      <h1 className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20">
        My
        <span className="text-[var(--primary)]"> Projects</span>
      </h1>
      <HorizontalLine />
      <MobileAppDevelopment />
      <HorizontalLine />
      <WebAppDevelopment />
      <HorizontalLine />
      <UIDesigns />
    </section>
  );
};

export default Projects;

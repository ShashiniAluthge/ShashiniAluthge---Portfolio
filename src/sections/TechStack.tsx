import BackendTech from "../components/BackendTech";
import Database from "../components/Database";
import FrontendTech from "../components/FrontendTech";
import HorizontalLine from "../components/HorizontalLine";
import Languages from "../components/Languages";
import Tools from "../components/Tools";

const TechStack = () => {
  return (
    <section className="lg:ml-30 lg:mr-30 pt-12 lg:pt-10 md:ml-10 md:mr-10 ml-2 mr-2 ">
      <h1 className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20">
        Tools &<span className="text-[var(--primary)]"> Technologies</span>
      </h1>
      <HorizontalLine />
      <FrontendTech />
      <BackendTech />
      <Database />
      <Languages />
      <Tools />
    </section>
  );
};

export default TechStack;

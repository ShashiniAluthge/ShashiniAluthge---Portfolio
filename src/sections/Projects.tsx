import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";
import ProjectsGrid from "../components/ProjectsGrid";

const MotionText = motion.h1;

const Projects = () => {
  const { ref: textRef, isInView: isTextInView } =
    useAnimatedInView<HTMLHeadingElement>();

  return (
    <section
      className="section-container pt-12 lg:pt-20"
      id="projects"
    >
      <div className="overflow-hidden">
        <MotionText
          ref={textRef}
          className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20"
          initial={{ opacity: 0, x: 100 }}
          animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          My
          <span className="text-[var(--primary)]"> Projects</span>
        </MotionText>
      </div>

      <div className="mt-10">
        <ProjectsGrid />
      </div>
    </section>
  );
};

export default Projects;
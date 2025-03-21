import webIcon from "../assets/webIcon.png";
import GameWebImage from "../assets/GameWeb.png";
import GitIcon from "../assets/github.png";
import GymClientImage from "../assets/GymClient.png";
import PortfolioImage from "../assets/Portfolio.png";
import { useState } from "react";
import closeIcon from "../assets/Close.png";
import useAnimatedInView from "../hooks/useAnimatedInView";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

interface Project {
  image: string;
  title: string;
  link: string;
  description: string;
  technologies: string[];
}

const projectData: Project[] = [
  {
    image: GymClientImage,
    title: "Gym Management System Client Website",
    link: "https://github.com/GymManagmentSystem/gym_client_web_app",
    description: ` I developed the client-side web application for a gym management
              system, enabling users to manage workouts, track progress, view
              payments, and explore gym details, membership plans, and contact
              information.`,
    technologies: ["React.js", "TypeScript"],
  },
  {
    image: GameWebImage,
    title: "Gaming Website",
    link: "https://github.com/ShashiniAluthge/game-hub",
    description: `I developed a dynamic Game Hub website using React, Vite, and
              TypeScript, incorporating tools like React Query, Zustand, and
              Chakra UI for enhanced functionality and design.`,
    technologies: ["React.js", "TypeScript", "React Query", "Zustand"],
  },
  {
    image: PortfolioImage,
    title: "My Personal Portfolio",
    link: "https://github.com/ShashiniAluthge/ShashiniAluthge---Portfolio",
    description: `I developed my personal portfolio website using React, TypeScript,
              and Tailwind CSS, showcasing my projects, skills, and experience
              with a clean, responsive design.`,
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
  },
];

const Modal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[var(--footerbg)] bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
      <div className="flex flex-col lg:flex-row bg-[var(--secondbackground)] rounded-2xl relative w-[80%] lg:w-[60%] pt-5 p-2 md:p-5 modalcard_shadow mt-40 mb-10 lg:mt-0 lg:mb-0">
        <button
          className="md:w-11 md:h-11 w-9 h-9 cursor-pointer absolute right-4 top-3 p-3 bg-[var(--secondbackground)] rounded-full shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 flex justify-center items-center hover:bg-[var(--primary)]"
          onClick={onClose}
        >
          <img src={closeIcon} />
        </button>

        {/* Project Details */}
        <div className="w-full flex flex-col lg:flex-row container mx-auto md:px-2 lg:mt-5 ">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center rounded-4xl  mx-2  pt-10">
            <img
              src={project.image}
              className="lg:rounded-2xl rounded-lg md:h-[300px]"
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* Project Title */}
            <p className="text-[var(--primary)] font-semibold text:xl md:text-2xl">
              {project.title}
            </p>
            {/* Project Description */}
            <p className="text-[var(--secondary)] lg:text-lg md:text-md text-sm lg:mt-2 mt-3 font-light text-justify">
              {project.description}
            </p>
            {/* Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row gap-3 mt-2">
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className="inline-flex justify-center items-center text-[var(--primary)] text-sm md:text-md font-semibold border-2 rounded-lg p-1 md:p-2 lg:px-4 py-1 w-auto text-center"
                >
                  {tech}
                </p>
              ))}
            </div>
            <hr className="border-1 border-[var(--secondary)] mt-5 mb-2" />

            {/* GitHub Link */}
            <div className="border-2 rounded-full w-10 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-left"
              >
                <img src={GitIcon} className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WebDevelopment = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const { ref: divRef, isInView: isDivInView } =
    useAnimatedInView<HTMLDivElement>();

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold flex justify-center">
        <img src={webIcon} className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-10 " />
        Web Development
      </h1>
      <MotionDiv
        ref={divRef}
        className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={isDivInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {projectData.map((project, index) => (
          <div
            key={index}
            className="w-full min-w-[280px] max-w-[370px] flex flex-col container h-auto max-w-[370px] mx-auto px-2 py-5 bg-[var(--footerbg)] rounded-xl shadow-xl shadow-[var(--primary)]  cursor-pointer hover:border-2 hover:border-[var(--primary)] transition-all ease-in-out duration-300 hover:shadow-xl hover:translate-y-[-5px] projectcard_shadow"
            onClick={() => handleCardClick(project)}
          >
            <div className="flex p-2 items-center justify-center">
              <img
                src={project.image}
                className="object-contain lg:rounded-2xl rounded-lg w-full h-[200px] hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <div className="h-20 flex items-center">
                <p className="text-[var(--primary)] font-semibold text-xl md:text-2xl text-left">
                  {project.title}
                </p>
              </div>

              <hr className="border-1 border-[var(--secondary)] mt-5 mb-2" />
              <div className="border-2 rounded-full w-10 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-left"
                >
                  <img src={GitIcon} className="w-full h-full" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </MotionDiv>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default WebDevelopment;

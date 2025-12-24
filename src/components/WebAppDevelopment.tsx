import webIcon from "../assets/webIcon.png";
import GameWebImage from "../assets/GameWeb.png";
import GitIcon from "../assets/github.png";
import GymClientImage from "../assets/GymClient.png";
import PortfolioImage from "../assets/Portfolio.png";
import IssueTrackerImage from '../assets/IssueTrackerImage.png'
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
    image: IssueTrackerImage,
    title: "Issue Tracker - Issue Management System",
    link: "https://github.com/ShashiniAluthge/issue-tracker",
    description: `I developed a full-stack issue tracking web application that allows users to 
                 create, view, update, and delete issues efficiently. 
                  The system includes user authentication, issue assignment, sorting, filtering, pagination, and 
                   a dashboard to manage and monitor issues effectively across the platform.`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Prisma",
      "NextAuth.js",
      "MySQL"
    ],
  },
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
    title: "Game Hub - Gaming Website",
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
        <div className="w-full flex flex-col lg:flex-row container mx-auto md:px-2 lg:mt-5 gap-6">

          {/* for image */}
          <div className="w-full lg:w-1/3 flex-shrink-0 flex items-center justify-center p-4">
            <img
              src={project.image}
              className="w-full max-w-[320px] h-auto object-contain rounded-2xl"
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className="flex justify-center items-center text-[var(--primary)] text-sm font-semibold
                 border-2 rounded-lg px-3 py-1 text-center whitespace-nowrap"
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

export default WebDevelopment;

import GitIcon from "../assets/github.png";
import Xpress from "../assets/Xpress.png";
import mobileIcon from "../assets/mobileIcon.png";
import careAlertImage from "../assets/careAlert.png";
import { useState } from "react";
import closeIcon from "../assets/Close.png";

interface Project {
  image: string;
  title: string;
  link: string;
  description: string;
  technologies: string[];
}
const projectData: Project[] = [
  {
    image: Xpress,
    title: "XPress - Courier Service Management System",
    link: "https://github.com/Courier-Service-Project",
    description: `
              This system was designed to streamline personal courier services
              while addressing communication failures and the lack of trust in
              external providers. It operates through both web and mobile
              applications, ensuring secure and efficient document and package
              transfers.
             I played a key role in developing the full stack mobile
              application development.`,
    technologies: ["React Native", "Express.js", "MySQL"],
  },
  {
    image: careAlertImage,
    title: "Care Alert Mobile App",
    link: "https://github.com/ShashiniAluthge/CareAlertMobileApp",
    description: ` I developed Care Alert, a mobile app that fetches global COVID-19
              updates via a public API. It includes registration, login, home,
              and detail views, with a focus on front-end development.`,
    technologies: ["React Native", "JavaScript"],
  },
];

const Modal = ({project,onClose,}: {project: Project;onClose: () => void;}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[var(--footerbg)] bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
  <div className="flex flex-col lg:flex-row bg-[var(--secondbackground)] rounded-2xl relative  w-[80%] lg:w-[60%] pt-5 p-2 md:p-5 modalcard_shadow mt-60 mb-10 lg:mt-0 lg:mb-0">
    <button
      className=" md:w-11 md:h-11 w-9 h-9 cursor-pointer absolute right-4 top-3 p-3 bg-[var(--secondbackground)] rounded-full shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 flex justify-center items-center hover:bg-[var(--primary)]"
      onClick={onClose}
    >
      <img src={closeIcon} />
    </button>

    {/* Project Details */}
    <div className="flex flex-col lg:flex-row container mx-auto px-2 mt-6 pb-3">
      {/* for image */}
      <div className="flex flex-1 p-2 items-center justify-center rounded-4xl mx-2">
        <img
          src={project.image}
          className="lg:rounded-2xl rounded-lg md:h-[300px]"
        />
      </div>
      <div className="flex-1">
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
              className="inline-flex justify-center items-center text-[var(--primary)] md:text-md text-sm font-semibold border-2 rounded-lg p-1 md:p-2 lg:px-4 py-1 w-auto "
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

const MobileAppDevelopment = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold flex justify-center">
        <img
          src={mobileIcon}
          className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-10"
        />
        Mobile App Development
      </h1>

      <div className="grid grid-cols md:grid-cols-2 gap-10 justify-center items-center mt-10">
        {/* Project Cards */}
        {projectData.map((project, index) => (
          <div
            key={index}
            className="w-full flex flex-col  container mx-auto h-auto max-w-[370px]  px-2 py-5 bg-[var(--footerbg)] rounded-xl shadow-xl shadow-[var(--primary)]  cursor-pointer hover:border-2 hover:border-[var(--primary)] transition-all ease-in-out duration-300 hover:shadow-xl hover:translate-y-[-5px] projectcard_shadow"
            onClick={() => handleCardClick(project)}
          >
            {/* Image */}
            <div className="p-2 flex items-center justify-center">
              <img
                src={project.image}
                className="lg:rounded-2xl rounded-lg object-contain w-[350px] h-[220px] hover:scale-105"
              />
            </div>
            {/* Project Name */}
            <div className="p-4 flex flex-col flex-1">
              <div className="h-20 flex items-center">
                <p className="text-[var(--primary)] font-semibold text-xl md:text-2xl text-left">
                  {project.title}
                </p>
              </div>
              {/* Divider */}
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
        ))}
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default MobileAppDevelopment;

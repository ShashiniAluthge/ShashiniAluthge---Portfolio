import designIcon from "../assets/designIcon.png";
import XpressUI from "../assets/XpressUi.png";
import FigmaIcon from "../assets/FigmaIcon.png";
import gymClientWebUi from "../assets/GymClientWebUi.png";
import gymAdminUi from "../assets/GymAdminUi.png";
import gymClientMobileUi from "../assets/GymMobileUi.png";
import SunResortUi from "../assets/SunResortUi.png";
import { useState } from "react";
import closeIcon from '../assets/Close.png';

interface Project{
  image:string;
  title:string;
  link:string;
  description:string;
  technologies:string[];
}

const projectData:Project[]=[
  {
    image: XpressUI,
    title: "Courier Service Management System",
    link: "https://www.figma.com/design/VaUFdHoxDfhbfVdWObLsk6/XPress?node-id=0-1&t=lY8Kd4OLuqCzfrjG-1",
    description:` I designed UIs for the Xpress Courier Service mobile app using
                Figma, creating a visually appealing and user-friendly
                interfaces. I also prototyped key screens to ensure smooth
                navigation and an intuitive user experience.`,
    technologies:["Figma"]
  },
  {
    image: gymClientWebUi,
    title: "MotionZone - Client Website",
    link: "https://www.figma.com/design/crFQPiaHehWpzrgu6b49Kh/MotionZone-Client-Web-App?t=DTZhp1jIo0gHYZlk-1",
    description:`I designed UIs for the MotionZone - Gym Management System -
                Client website, enabling gym members to track workouts, manage
                personal details, and access gym-related information seamlessly.`,
    technologies:["Figma"]            
  },
  {
    image: gymClientMobileUi,
    title: " MotionZone - Client Mobile App",
    link: "https://www.figma.com/design/QhOMwueILHGCcRvLDJOz0e/MotionZone-Client-MobileApp?t=DTZhp1jIo0gHYZlk-1",
    description:` I designed UIs for the MotionZone Gym Management client mobile
                app, allowing members to track workouts, view schedules, manage
                personal details, and check payment history.`,
    technologies:["Figma"]            
  },
  {
    image: gymAdminUi,
    title: "MotionZone - Admin Website",
    link: "https://www.figma.com/design/33kXsMsybzaLk9gnk0qxvu/MotionZone-Admin-Web?node-id=0-1&t=tDms4d6xdUmFn4GH-1",
    description:`I designed UIs for the MotionZone Gym Management Admin web app,
                enabling gym administrators to add exercises, manage workouts,
                schedules, clients, staff details, and access a summarized
                dashboard view.`,
    technologies:["Figma"]            
  },
  {
    image: SunResortUi,
    title: "SunResort - Hotel Management System",
    link: "https://www.figma.com/design/I7UWnR3PEckuKDReZSRcw0/Sun-Resort?node-id=2-2&t=DTZhp1jIo0gHYZlk-1",
    description:`I designed UIs for the SunResort Hotel Management System,
                enabling efficient management of employees, suppliers,
                customers, sales, and inventory.`,
    technologies:["Figma"]            
  },
]

const Modal=({project,onClose,}:{project:Project;onClose:()=>void})=>{

  return(
    <div className="fixed top-0 left-0 w-full h-full bg-[var(--footerbg)] bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col lg:flex-row bg-[var(--secondbackground)] rounded-2xl relative max-h-screen w-[90%] lg:w-[60%] lg:p-5 overflow-auto h-[90%] md:h-auto modalcard_shadow">
        <button
          className="w-11 h-11 cursor-pointer absolute right-4 top-3 p-3 bg-[var(--secondbackground)] rounded-full shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 flex justify-center items-center hover:bg-[var(--primary)]"
          onClick={onClose}
        >
          <img src={closeIcon} />
        </button>

        {/* Project Details */}
        <div className="w-full flex flex-col lg:flex-row container mx-auto px-2 lg:mt-5 ">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center rounded-4xl  mx-2 ">
            <img
              src={project.image}
              className="lg:rounded-2xl rounded-lg md:h-[300px]"
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* Project Title */}
            <p className="text-[var(--primary)] font-semibold text-2xl">
              {project.title}
            </p>
            {/* Project Description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              {project.description}
            </p>
            {/* Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row gap-3 mt-2">
              {project.technologies.map((tech, index) => (
                <p
                  key={index}
                  className="inline-flex justify-center items-center text-[var(--primary)] text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto"
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
                <img src={FigmaIcon} className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const UIDesigns = () => {
const [selectedProject,setSelectedProject] = useState<Project|null>(null);

  const handleCardClick=(project:Project)=>{
    setSelectedProject(project)
  }
  
  return (
   
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold flex justify-center">
          <img
            src={designIcon}
            className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-10 "
          />
          UI/UX Design
        </h1>
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">
          {/* Project Cards */}
          {projectData.map((project, index) => (
            <div key={index} className="w-full flex flex-col gap-5 container mx-auto px-2 py-5 bg-[var(--secondbackground)] rounded-xl shadow-xl shadow-[var(--primary)] h-auto max-w-[370px]  cursor-pointer hover:border-2 hover:border-[var(--primary)] transition-all ease-in-out duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            onClick={()=>handleCardClick(project)}
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
                  <p className="text-[var(--primary)] font-semibold text-2xl text-left">
                    {project.title}
                  </p>
                </div>
                {/* Divider */}
                <hr className="border-1 border-[var(--secondary)] mt-5 mb-2" />
                {/* GitHub Link */}
                <div className="border-2 rounded-full w-10 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex justify-left">
                    <img src={FigmaIcon} className="w-full h-full" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProject &&(
          <Modal project={selectedProject} onClose={()=>setSelectedProject(null)}/>
        )}
      </div>
    
  );
};

export default UIDesigns;

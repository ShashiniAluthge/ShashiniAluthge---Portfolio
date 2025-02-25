import webIcon from "../assets/webIcon.png";
import GameWebImage from "../assets/GameWeb.png";
import GitIcon from "../assets/github.png";
import GymClientImage from "../assets/GymClient.png";
import PortfolioImage from "../assets/Portfolio.png";

const WebAppDevelopment = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold flex justify-center">
          <img
            src={webIcon}
            className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-10 "
          />
          Web App Development
        </h1>
        
        {/* for Gym client web*/}
        <div className="w-full flex flex-col lg:flex-row container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center">
            <img
              src={GymClientImage}
              className="w-[80%] h-[80%] md:w-[60%] lg:rounded-2xl rounded-lg"
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              Gym Management System Client Website
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              I developed the client-side web application for a gym management
              system, enabling users to manage workouts, track progress, view
              payments, and explore gym details, membership plans, and contact
              information.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                React.js
              </p>
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                TypeScript
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-10 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://github.com/GymManagmentSystem/gym_client_web_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-left"
              >
                <img src={GitIcon} className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* for Game Hub */}
        <div className="w-full flex flex-col lg:flex-row-reverse container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center">
            <img
              src={GameWebImage}
              className="w-[80%] h-[80%] md:w-[60%]  lg:rounded-2xl rounded-lg"
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              Gaming Website
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              I developed a dynamic Game Hub website using React, Vite, and
              TypeScript, incorporating tools like React Query, Zustand, and
              Chakra UI for enhanced functionality and design.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                React.js
              </p>
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                TypeScript
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-10 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://github.com/ShashiniAluthge/game-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-left"
              >
                <img src={GitIcon} className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* for portfolio  */}
        <div className="w-full flex flex-col lg:flex-row container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center">
            <img
              src={PortfolioImage}
              className="w-[80%] h-[80%] md:w-[60%] lg:rounded-2xl rounded-lg"
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              My Personal Portfolio
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              I developed my personal portfolio website using React, TypeScript,
              and Tailwind CSS, showcasing my projects, skills, and experience
              with a clean, responsive design.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                React.js
              </p>
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                TypeScript
              </p>
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                Tailwind CSS
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-10 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://github.com/ShashiniAluthge/ShashiniAluthge---Portfolio"
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
    </>
  );
};

export default WebAppDevelopment;

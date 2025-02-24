import GitIcon from "../assets/github.png";
import Xpress from "../assets/Xpress.png";
import mobileIcon from "../assets/mobileIcon.png";
import careAlertImage from "../assets/careAlert.png";

const MobileAppDevelopment = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold flex justify-center">
          <img
            src={mobileIcon}
            className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-10 "
          />
          Mobile App Development
        </h1>
        {/* for Xpress */}
        <div className="w-full flex flex-col lg:flex-row container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center">
            <img
              src={Xpress}
              className="w-[80%] h-[80%] md:w-[60%]  lg:rounded-2xl rounded-lg"
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              XPress - Courier Service Management System
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              ( Second Year Software Project )<br />
              This system was designed to streamline personal courier services
              while addressing communication failures and the lack of trust in
              external providers. It operates through both web and mobile
              applications, ensuring secure and efficient document and package
              transfers.
              <br />I played a key role in developing the full stack mobile
              application development.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                React Native
              </p>
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                Node.js
              </p>
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                Express.js
              </p>
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                MySQL
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-10 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://github.com/Courier-Service-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-left"
              >
                <img src={GitIcon} className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* for care alert*/}
        <div className="w-full flex flex-col lg:flex-row-reverse container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center rounded-4xl ">
            <img
              src={careAlertImage}
              className="w-[50%] md:w-[40%] lg:rounded-4xl rounded-lg max-h-[320px]  "
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              Care Alert Mobile App
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              I developed Care Alert, a mobile app that fetches global COVID-19
              updates via a public API. It includes registration, login, home,
              and detail views, with a focus on front-end development.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                React Native
              </p>
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                JavaScript
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-10 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://github.com/ShashiniAluthge/CareAlertMobileApp"
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

export default MobileAppDevelopment;

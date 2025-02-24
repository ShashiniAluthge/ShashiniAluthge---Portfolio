import designIcon from "../assets/designIcon.png";
import XpressUI from "../assets/XpressUi.png";
import FigmaIcon from "../assets/FigmaIcon.png";
import gymClientWebUi from "../assets/GymClientWebUi.png";
import gymAdminUi from "../assets/GymAdminUi.png";
import gymClientMobileUi from "../assets/GymMobileUi.png";
import SunResortUi from "../assets/SunResortUi.png";

const UIDesigns = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold flex justify-center">
          <img
            src={designIcon}
            className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-10 "
          />
          UI/UX Design
        </h1>
        {/* for Game Hub */}
        <div className="w-full flex flex-col lg:flex-row container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center rounded-4xl ">
            <img
              src={XpressUI}
              className="w-[50%] md:w-[40%] lg:rounded-4xl rounded-lg max-h-[320px]  "
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              XPress - Courier Service Management System
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              I designed UIs for the Xpress Courier Service mobile app using
              Figma, creating a visually appealing and user-friendly interfaces.
              I also prototyped key screens to ensure smooth navigation and an
              intuitive user experience.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                Figma
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-8 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://www.figma.com/design/VaUFdHoxDfhbfVdWObLsk6/XPress?node-id=0-1&t=lY8Kd4OLuqCzfrjG-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-left"
              >
                <img src={FigmaIcon} className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* for Gym client web*/}
        <div className="w-full flex flex-col lg:flex-row-reverse container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center">
            <img
              src={gymClientWebUi}
              className="w-[80%] h-[80%] md:w-[60%] lg:rounded-2xl rounded-lg"
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              MotionZone - Client Website
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              I designed UIs for the MotionZone - Gym Management System -
              Client website, enabling gym members to track workouts, manage
              personal details, and access gym-related information seamlessly.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                Figma
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-8 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://www.figma.com/design/crFQPiaHehWpzrgu6b49Kh/MotionZone-Client-Web-App?t=DTZhp1jIo0gHYZlk-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-left"
              >
                <img src={FigmaIcon} className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* for Gym client mobile*/}
        <div className="w-full flex flex-col lg:flex-row container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center rounded-4xl ">
            <img
              src={gymClientMobileUi}
              className="w-[50%] md:w-[40%] lg:rounded-4xl rounded-lg max-h-[320px]  "
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              MotionZone - Client Mobile App
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              I designed UIs for the MotionZone Gym Management client mobile
              app, allowing members to track workouts, view schedules, manage
              personal details, and check payment history.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                Figma
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-8 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://www.figma.com/design/QhOMwueILHGCcRvLDJOz0e/MotionZone-Client-MobileApp?t=DTZhp1jIo0gHYZlk-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-left"
              >
                <img src={FigmaIcon} className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* for Gym Admin web*/}
        <div className="w-full flex flex-col lg:flex-row-reverse container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center">
            <img
              src={gymAdminUi}
              className="w-[80%] h-[80%] md:w-[60%] lg:rounded-2xl rounded-lg"
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              MotionZone - Admin Website
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              I designed UIs for the MotionZone Gym Management Admin web app,
              enabling gym administrators to add exercises, manage workouts,
              schedules, clients, staff details, and access a summarized
              dashboard view.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                Figma
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-8 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://www.figma.com/design/33kXsMsybzaLk9gnk0qxvu/MotionZone-Admin-Web?node-id=0-1&t=tDms4d6xdUmFn4GH-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-left"
              >
                <img src={FigmaIcon} className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* for SunResort */}
        <div className="w-full flex flex-col lg:flex-row container mx-auto px-2 py-5">
          {/* for image */}
          <div className="flex flex-1 p-2 items-center justify-center">
            <img
              src={SunResortUi}
              className="w-[80%] h-[80%] md:w-[60%] lg:rounded-2xl rounded-lg"
            />
          </div>
          <div className="flex-1 p-4 ">
            {/* for project name */}
            <p className="text-[var(--primary)] font-semibold  text-2xl">
              SunResort - Hotel Management System
            </p>
            {/* for project description */}
            <p className="text-[var(--secondary)] lg:text-lg text-md lg:mt-2 mt-3 font-light text-justify">
              I designed UIs for the SunResort Hotel Management System,
              enabling efficient management of employees, suppliers, customers,
              sales, and inventory.
            </p>
            {/*for Technologies */}
            <div className="grid grid-cols-2 md:flex md:flex-row  gap-3 mt-2">
              <p className="inline-flex justify-center items-center text-[var(--primary)]  text-md font-semibold border-2 rounded-lg p-2 lg:px-4 py-1 w-auto">
                Figma
              </p>
            </div>
            {/* divider */}
            <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" />

            {/* for github link */}
            <div className=" border-2 rounded-full w-8 p-2 border-[var(--secondbackground)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              <a
                href="https://www.figma.com/design/I7UWnR3PEckuKDReZSRcw0/Sun-Resort?node-id=2-2&t=DTZhp1jIo0gHYZlk-1"
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
    </>
  );
};

export default UIDesigns;

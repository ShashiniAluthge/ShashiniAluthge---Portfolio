import React from "react";
import NavBar from "../components/NavBar";
import SocialIcons from "../components/SocialIcons";

const Home: React.FC = () => {
  return (
    <div className="bg-[#292929] min-h-screen ">
      
      <NavBar />

      <div className="flex flex-row  items-center h-[100vh] ml-30 mr-30">
        <div className="flex-1 flex-col justify-start ">
          <h1 className="text-white font-bold text-5xl/20">Shashini Aluthge</h1>
          <h2 className="text-white font-bold text-3xl">
            I'm a<span className="text-[#00FF08]"> Full Stack Developer</span>
          </h2>
          <div className="mt-10 flex flex-row">
            <div>
              <button className="px-5 py-2 text-[#00FF08] rounded-4xl transition-all duration-200 bg-[#292929] shadow-[0_4px_7px_#00FF08] hover:shadow-[0_6px_8px_#00FF08] hover:scale-105 cursor-pointer">
                Download CV
              </button>
            </div>

            <SocialIcons />
          </div>
        </div>
        <div className="box-content size-100 border-5 rounded-full p-5 justify-right "></div>
      </div>
    </div>
  );
};

export default Home;

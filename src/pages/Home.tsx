import React from "react";
import NavBar from "../components/NavBar";
import profileImage from "../assets/profile 1.png";

const Home: React.FC = () => {
  return (
    <div className="bg-[#292929] min-h-screen">
      <NavBar />
      <div className="flex flex-row justify-between items-center h-[calc(100vh-80px)] pl-20 pr-20">
        
        <div className="flex flex-col justify-center">
          <h1 className="text-white font-bold text-5xl">Shashini Aluthge</h1>
          <h2 className="text-white font-bold text-3xl">
            I'm a <span className="text-[#00FF08]">Full Stack Developer</span>
          </h2>
        </div>

        
        <img
          src={profileImage}
          alt="Profile"
          className="w-100 h-100 rounded-full object-contain"
        />
      </div>
    </div>
  );
};

export default Home;

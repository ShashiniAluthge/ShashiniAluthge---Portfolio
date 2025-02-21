import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SocialIcons from "../components/SocialIcons";

const roles =["Full Stack Developer", "Programmer","UI/UX Designer"];

const Home: React.FC = () => {

  const [roleIndex,setRoleIndex] = useState(0);
  const [displayText,setDisplayText] = useState("");
  const [characterIndex,setCharacterIndex] = useState(0);
  const [isDeleting,setIsDeleting] = useState(false);

  useEffect(()=>{
    const currentRole = roles[roleIndex];
//Add letters one by one
    if(!isDeleting && characterIndex <currentRole.length){
      setTimeout(() => {
        setDisplayText((prev) => prev + currentRole[characterIndex]);
        setCharacterIndex((prev) => prev + 1);
      }, 100);
    }
    else if (isDeleting && characterIndex > 0) {
      // Remove letters one by one
      setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharacterIndex((prev) => prev - 1);
      }, 50);
  }
  else {
    // Pause before switching roles
    setTimeout(() => {
      if (!isDeleting) {
        setIsDeleting(true);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setCharacterIndex(0);
        setDisplayText("");
      }
    }, 1000);
  }
  },[characterIndex,isDeleting,roleIndex,]);

  return (
    <div className="bg-[#292929] min-h-screen pt-16 lg:pt-0 ">
      <NavBar />

      <div className="flex flex-col lg:flex-row items-center justify-center lg:h-[100vh] lg:ml-30 lg:mr-30 pt-12 lg:pt-10 md:ml-10 md:mr-10 ml-2 mr-2">
      <div className="box-content w-70 h-70 md:w-90 md:h-90 lg:w-100 lg:h-100 border-5 rounded-full lg:flex-1"></div>
        <div className="flex-1 flex-col justify-center items-center pt-8 md:pt-2 lg:pt-0">
          <h1 className="text-white font-bold text-4xl md:text-5xl/20">Shashini Aluthge</h1>
          <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
            I'm a {" "}
            <span className="text-[#00FF08]">{displayText}</span>
            <span className="text-[#00FF08] cursor">|</span>
          </h2>
          <div className="mt-6  lg:mt-10 flex flex-col md:flex-row ">
            <div className="text-center">
              <button className="px-8 py-2 lg:px-5 text-[#00FF08] rounded-4xl transition-all duration-200 bg-[#292929] shadow-[0_4px_7px_#00FF08] hover:shadow-[0_6px_8px_#00FF08] hover:scale-105 cursor-pointer">
                Download CV
              </button>
            </div>

            <SocialIcons />
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Home;

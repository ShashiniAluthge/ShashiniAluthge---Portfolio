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
    <div className="bg-[#292929] min-h-screen ">
      <NavBar />

      <div className="flex lg:flex-row sm:flex-col items-center h-[100vh] lg:ml-30 lg:mr-30 ">
        <div className="flex-1 flex-col lg:justify-start sm:justify-center">
          <h1 className="text-white font-bold text-5xl/20">Shashini Aluthge</h1>
          <h2 className="text-white font-bold text-3xl">
            I'm a {" "}
            <span className="text-[#00FF08]">{displayText}</span>
            <span className="text-[#00FF08] cursor">|</span>
          </h2>
          <div className="mt-10 flex lg:flex-row sm:flex-col">
            <div>
              <button className="px-5 py-2 text-[#00FF08] rounded-4xl transition-all duration-200 bg-[#292929] shadow-[0_4px_7px_#00FF08] hover:shadow-[0_6px_8px_#00FF08] hover:scale-105 cursor-pointer">
                Download CV
              </button>
            </div>

            <SocialIcons />
          </div>
        </div>
        <div className="box-content w-100 h-100 border-5 rounded-full lg:justify-right"></div>
      </div>
    </div>
  );
};

export default Home;

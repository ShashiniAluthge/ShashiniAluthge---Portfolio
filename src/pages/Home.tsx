import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SocialIcons from "../components/SocialIcons";
import ProfileImage from "../assets/Profile.png";

const roles = ["Full Stack Developer", "Programmer", "UI/UX Designer"];

const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingInterval = setInterval(
      () => {
        setDisplayText((prev) => {
          if (!isDeleting) {
            // Typing
            if (characterIndex < currentRole.length) {
              setCharacterIndex(characterIndex + 1);
              return prev + currentRole[characterIndex];
            } else {
              setTimeout(() => setIsDeleting(true), 1000);
            }
          } else {
            // Deleting
            if (characterIndex > 0) {
              setCharacterIndex(characterIndex - 1);
              return prev.slice(0, -1);
            } else {
              setTimeout(() => {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
              }, 500);
            }
          }
          return prev;
        });
      },
      isDeleting ? 50 : 100
    ); // Typing speed vs deleting speed

    return () => clearInterval(typingInterval);
  }, [characterIndex, isDeleting, roleIndex]);

  return (
    <div className="bg-[var(--background)] min-h-screen pt-16 lg:pt-0">
      <NavBar />

      <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:h-[100vh] lg:ml-30 lg:mr-30 pt-12 lg:pt-10 md:ml-10 md:mr-10 ml-2 mr-2">
        <div className=" flex lg:flex-1">
          <div className="w-70 h-70 md:w-90 md:h-90 lg:w-120 lg:h-120 border-r-3 border-l-3 border-[var(--primary)] rounded-full overflow-hidden items-center justify-center">
            <img src={ProfileImage} className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="flex-1 flex-col justify-center items-center pt-8 md:pt-2 lg:pt-0 text-center lg:text-left">
          <h1 className="text-[var(--secondary)] font-bold text-4xl md:text-5xl/20">
            Hi, I'm
          </h1>
          <h1 className="text-[var(--secondary)] font-bold text-4xl md:text-5xl/20">
            Shashini Aluthge,
          </h1>
          <h2 className="text-[var(--secondary)] font-bold text-xl md:text-2xl lg:text-3xl">
            a <span className="text-[var(--primary)]">{displayText}</span>
            <span className="text-[var(--primary)] cursor">|</span>
          </h2>
          <div className="mt-6  lg:mt-10 flex flex-col md:flex-row ">
            <div className="text-center">
              <button className="px-8 py-2 lg:px-5 text-[var(--primary)] rounded-4xl transition-all duration-200 bg-[var(--background)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
                <a
                  href="https://drive.google.com/file/d/1CiXdDgcX3e9vTXqNv9aa2m5KmLh__ZyS"
                  download="Shashini_Aluthge_CV.pdf"
                  target="_blank"
                >
                  Download CV
                </a>
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

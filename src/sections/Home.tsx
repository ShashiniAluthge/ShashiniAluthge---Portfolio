import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SocialIcons from "../components/SocialIcons";
import profileBackImage from "../assets/back.png";
import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";

const MotionDiv = motion.div;

const roles = ["Full Stack Developer", "Programmer", "UI/UX Designer"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingInterval = setTimeout(
      () => {
        if (!isDeleting) {
          if (characterIndex < currentRole.length) {
            setCharacterIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
          }
        } else {
          if (characterIndex > 0) {
            setCharacterIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    ); // Typing speed and deleting speed

    return () => clearTimeout(typingInterval);
  }, [characterIndex, isDeleting, roleIndex]);

  const { ref: divRef, isInView: isDivInView } =
    useAnimatedInView<HTMLDivElement>();

  return (
    <div
      className="bg-[var(--background)] min-h-screen pt-16 lg:pt-0 "
      id="home"
    >
      <NavBar />

      <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:h-[100vh] lg:ml-30 lg:mr-30 pt-12 md:ml-10 md:mr-10 ml-2 mr-2">
        <div className=" flex lg:flex-1">
          <div className="w-80 h-80 md:w-110 md:h-110 lg:w-150 lg:h-150  overflow-hidden items-center justify-center lg:mt-8 ">
            <img
              src={profileBackImage}
              className="w-full h-full object-contain  z-10 transition-all duration-300 ease-out hover:scale-105 cursor-pointer " 
            />
          </div>
        </div>

        <div className="flex-1 flex-col justify-center items-center pt-8 md:pt-2 lg:pt-0 text-center lg:text-left ">
          <div className="overflow-hidden">
          <MotionDiv
            ref={divRef}
            initial={{ opacity: 0, x: -100 }}
            animate={
              isDivInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20">
              Hello It's Me
            </h1>
            <h1 className="text-[var(--secondary)] font-bold text-4xl md:text-5xl/20">
              Shashini Aluthge
            </h1>
          </MotionDiv>
          </div>
          <h2 className="text-[var(--secondary)] font-bold text-xl md:text-2xl lg:text-3xl">
            And I'm a{"  "}
            <span className="text-[var(--primary)]">
              {" "}
              {roles[roleIndex].substring(0, characterIndex)}
            </span>
            <span className="text-[var(--primary)] cursor">|</span>
          </h2>
          <div className="mt-6  lg:mt-10 flex flex-col md:flex-row ">
            <div className="text-center">
              <button className="px-8 py-2 lg:px-5 text-[var(--primary)] rounded-4xl transition-all duration-200 bg-[var(--background)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
                <a
                  href="https://drive.google.com/file/d/1gqcv53KtydGLhjjMTSXHiTb9E-XIheH9/view?usp=sharing"
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

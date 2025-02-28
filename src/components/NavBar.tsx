import { useState } from "react";
import Drawer from "./Drawer";
import MenuIcon from "../assets/menu.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 lg:right-30 lg:left-30 md:left-10 md:right-10 bg-[var(--background)]">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-[var(--secondary)]  uppercase tracking-wide">
          <span className="text-[var(--primary)] italic  text-3xl ">
            S
          </span>
          hashini
        </h1>

        <div className="hidden lg:flex space-x-6">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8 "
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-75}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8"
          >
            About Me
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8"
          >
            Projects
          </Link>

          <Link
            to="techstack"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8"
          >
            Tech Stack
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1500}
            activeClass="!text-[var(--primary)] !font-bold underline underline-offset-8"
            className="px-4 py-1 rounded-4xl cursor-pointer transition text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold hover:underline hover:underline-offset-8"
          >
            Contact
          </Link>
        </div>
        <button
          className="hidden lg:block px-5 py-2 text-[var(--primary)] rounded-4xl transition-all duration-200 bg-[var(--background)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              window.scrollTo({
                top: contactSection.offsetTop - 50,
                behavior: "smooth",
                
              });
            }
          }}
        >
          Connect me
        </button>

        <button
          className="lg:hidden text-[var(--secondary)] cursor"
          onClick={() => setIsDrawerOpen(true)}
        >
          <img src={MenuIcon} className="w-5 h-4" />
        </button>
      </nav>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default NavBar;

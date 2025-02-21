import { useState } from "react";
import { Menu } from "lucide-react";
import Drawer from "./Drawer";

const NavBar = () => {
  const [active, setActive] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 lg:right-30 lg:left-30 md:left-10 md:right-10 bg-[#292929]  ">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-white tracking-wide uppercase">
          <span className="text-[#00FF08] italic font-serif text-3xl">S</span>
          hashini
        </h1>

        <ul className="hidden lg:flex space-x-6">
          <li
            onClick={() => setActive("home")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "home"
                ? "text-[#00FF08] font-bold"
                : "text-[#fff] hover:text-[#00FF08] hover:font-bold "
            }`}
          >
            <a href="#home">Home</a>
          </li>

          <li
            onClick={() => setActive("about")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "about"
                ? "text-[#00FF08] font-bold"
                : "text-[#fff] hover:text-[#00FF08] hover:font-bold"
            }`}
          >
            <a href="#about">About</a>
          </li>

          <li
            onClick={() => setActive("skills")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "skills"
                ? "text-[#00FF08] font-bold"
                : "text-[#fff] hover:text-[#00FF08] hover:font-bold"
            }`}
          >
            <a href="#skills">Skills</a>
          </li>

          <li
            onClick={() => setActive("projects")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "projects"
                ? "text-[#00FF08] font-bold"
                : "text-[#fff] hover:text-[#00FF08] hover:font-bold"
            }`}
          >
            <a href="#projects">Projects</a>
          </li>

          <li
            onClick={() => setActive("contact")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "contact"
                ? "text-[#00FF08] font-bold"
                : "text-[#fff] hover:text-[#00FF08] hover:font-bold"
            }`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="hidden lg:block px-5 py-2 text-[#00FF08] rounded-4xl transition-all duration-200 bg-[#292929] shadow-[0_4px_7px_#00FF08] hover:shadow-[0_6px_8px_#00FF08] hover:scale-105 cursor-pointer">
          Connect me
        </button>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu size={28} color="#fff" />
        </button>
      </nav>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default NavBar;

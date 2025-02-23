import { useState } from "react";
import Drawer from "./Drawer";
import MenuIcon from "../assets/menu.png";

const NavBar = () => {
  const [active, setActive] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 lg:right-30 lg:left-30 md:left-10 md:right-10 bg-[var(--background)]">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-[var(--secondary)] tracking-wide uppercase">
          <span className="text-[var(--primary)] italic font-serif text-3xl">
            S
          </span>
          hashini
        </h1>

        <ul className="hidden lg:flex space-x-6">
          <li
            onClick={() => setActive("home")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "home"
                ? "text-[var(--primary)] font-bold"
                : "text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold "
            }`}
          >
            <a href="#home">Home</a>
          </li>

          <li
            onClick={() => setActive("about")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "about"
                ? "text-[var(--primary)] font-bold"
                : "text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold "
            }`}
          >
            <a href="#about">About Me</a>
          </li>

          <li
            onClick={() => setActive("projects")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "projects"
                ? "text-[var(--primary)] font-bold"
                : "text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold "
            }`}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            onClick={() => setActive("techStack")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "techStack"
                ? "text-[var(--primary)] font-bold"
                : "text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold "
            }`}
          >
            <a href="#techStack">Teck Stack</a>
          </li>

          <li
            onClick={() => setActive("contact")}
            className={`px-4 py-1 rounded-4xl cursor-pointer transition ${
              active === "contact"
                ? "text-[var(--primary)] font-bold"
                : "text-[var(--secondary)] hover:text-[var(--primary)] hover:font-bold"
            }`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="hidden lg:block px-5 py-2 text-[var(--primary)] rounded-4xl transition-all duration-200 bg-[var(--background)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
          Connect me
        </button>

        <button
          className="lg:hidden text-[var(--secondary)]"
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

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-6 ">
        <h1 className="text-2xl font-bold text-white ml-16">
          Shashini Aluthge
        </h1>
        <ul className="flex space-x-6">
          <li className="border-b border-transparent hover:border-white transition  hover:shadow-[1px_4px_4px_#00FF08] px-4 py-1 rounded-4xl cursor-pointer">
            <a
              href="#home"
              className="text-white hover:text-[#00FF08] hover:font-bold"
            >
              Home
            </a>
          </li>
          <li className="border-b border-transparent hover:border-white transition  hover:shadow-[1px_4px_4px_#00FF08] px-4 py-1 rounded-4xl cursor-pointer">
            <a
              href="#home"
              className="text-white hover:text-[#00FF08] hover:font-bold"
            >
              About
            </a>
          </li>
          <li className="border-b border-transparent hover:border-white transition  hover:shadow-[1px_4px_4px_#00FF08] px-4 py-1 rounded-4xl cursor-pointer">
            <a
              href="#home"
              className="text-white hover:text-[#00FF08] hover:font-bold"
            >
              Skills
            </a>
          </li>
          <li className="border-b border-transparent hover:border-white transition  hover:shadow-[1px_4px_4px_#00FF08] px-4 py-1 rounded-4xl cursor-pointer">
            <a
              href="#home"
              className="text-white hover:text-[#00FF08] hover:font-bold"
            >
              Projects
            </a>
          </li>
          <li className="border-b border-transparent hover:border-white transition  hover:shadow-[1px_4px_4px_#00FF08] px-4 py-1 rounded-4xl cursor-pointer">
            <a
              href="#home"
              className="text-white hover:text-[#00FF08] hover:font-bold"
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="px-5 py-2 text-[#00FF08] rounded-4xl transition-all duration-200 bg-[#292929] shadow-[0_4px_7px_#00FF08] hover:shadow-[0_6px_8px_#00FF08] hover:scale-105 cursor-pointer">
          Connect me
        </button>
      </nav>
    </div>
  );
};

export default NavBar;

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-lg">
        <h1 className="text-2xl font-bold">Shashini Aluthge</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Connect me
        </button>
      </nav>
    </div>
  );
};

export default NavBar;

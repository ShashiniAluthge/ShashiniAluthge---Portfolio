import gitLogo from "../assets/git.png";
import postmanLogo from "../assets/postman.png";
import figmaLogo from "../assets/figma.png";

const tools = [
  { name: "Git", logo: gitLogo },
  { name: "Postman", logo: postmanLogo },
  { name: "Figma", logo: figmaLogo },
];

const Tools = () => {
  return (
    <div className="border-4">
      <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold">
        Tools
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-[var(--secondbackground)] flex flex-col items-center justify-center w-40 h-24 p-4 rounded-lg shadow-md"
          >
            <img src={tool.logo} alt={tool.name} className="w-10 h-10 mb-2" />
            <p className="text-[var(--secondary)] text-lg font-semibold text-center">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;

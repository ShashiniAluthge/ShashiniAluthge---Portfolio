import nodeLogo from "../assets/nodejs.png";
import expressLogo from "../assets/expressjs.png";

const backTechnologies = [
  { name: "Node.js", logo: nodeLogo },
  { name: "Express.js", logo: expressLogo },
];

const BackendTech = () => {
  return (
    <div className="border-4">
      <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold">
        Backend Development
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {backTechnologies.map((tech, index) => (
          <div
            key={index}
            className="bg-[var(--secondbackground)] flex flex-col items-center justify-center w-40 h-24 p-4 rounded-lg shadow-md"
          >
            <img src={tech.logo} alt={tech.name} className="w-10 h-10 mb-2" />
            <p className="text-[var(--secondary)] text-lg font-semibold text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackendTech;

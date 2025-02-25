import ReactLogo from "../assets/react.png";
import ReactNativeLogo from "../assets/ReactNative.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css3.png";
import TailwindLogo from "../assets/tailwind.png";
import ChakraLogo from "../assets/chakraUi.png";
import ReactQueryLogo from "../assets/reactQuery.png";

const frontTechnologies = [
  { name: "React.js", logo: ReactLogo },
  { name: "React Native", logo: ReactNativeLogo },
  { name: "HTML", logo: HtmlLogo },
  { name: "CSS", logo: CssLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Chakra UI", logo: ChakraLogo },
  { name: "React Query", logo: ReactQueryLogo },
];

const FrontendTech = () => {
  return (
    <div className="border-4">
      <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold">
        Frontend Development
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {frontTechnologies.map((tech, index) => (
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

export default FrontendTech;

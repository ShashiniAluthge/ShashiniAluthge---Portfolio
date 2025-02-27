import HorizontalLine from "../components/HorizontalLine";
import ReactLogo from "../assets/react.png";
import ReactNativeLogo from "../assets/ReactNative.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css3.png";
import TailwindLogo from "../assets/tailwind.png";
import ChakraLogo from "../assets/chakraUi.png";
import ReactQueryLogo from "../assets/reactQuery.png";
import nodeLogo from "../assets/nodejs.png";
import expressLogo from "../assets/expressjs.png";
import sqlLogo from "../assets/mysql.png";
import javaLogo from "../assets/java.png";
import javascriptLogo from "../assets/javascript.png";
import typescriptLogo from "../assets/TS.png";
import gitLogo from "../assets/git.png";
import postmanLogo from "../assets/postman.png";
import figmaLogo from "../assets/figma.png";
import TechGrid from "../components/TechGrid";

const frontTechnologies = [
  { name: "React.js", logo: ReactLogo },
  { name: "React Native", logo: ReactNativeLogo },
  { name: "HTML", logo: HtmlLogo },
  { name: "CSS", logo: CssLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Chakra UI", logo: ChakraLogo },
  { name: "React Query", logo: ReactQueryLogo },
];

const backTechnologies = [
  { name: "Node.js", logo: nodeLogo },
  { name: "Express.js", logo: expressLogo },
  { name: "MySQL", logo: sqlLogo },
];

// const database=[
//   {name:"MySQL",logo:sqlLogo}
// ]

const languages = [
  { name: "Java", logo: javaLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "TypeScript", logo: typescriptLogo },
];

const tools = [
  { name: "Git", logo: gitLogo },
  { name: "Postman", logo: postmanLogo },
  { name: "Figma", logo: figmaLogo },
];

const TechStack = () => {
  return (
    <section className="lg:ml-30 lg:mr-30 pt-12 lg:pt-10 md:ml-10 md:mr-10 ml-2 mr-2 ">
      <h1 className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20">
        Tools &<span className="text-[var(--primary)]"> Technologies</span>
      </h1>
      <HorizontalLine />
      <TechGrid topic="Frontend Development" technologies={frontTechnologies} />

      <TechGrid topic="Backend Development" technologies={backTechnologies} />

      {/* <TechGrid topic="Database" technologies={database}/>
      <hr className="border-2 border-[var(--secondbackground)] mt-5 mb-2" /> */}
      <TechGrid topic="Programming Languages" technologies={languages} />

      <TechGrid topic="Tools" technologies={tools} />
      <HorizontalLine/>
    </section>
  );
};

export default TechStack;

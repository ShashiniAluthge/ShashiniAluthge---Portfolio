import ReactLogo from "../assets/react.png";
import NextLogo from "../assets/next.png";
import ReactNativeLogo from "../assets/ReactNative.png";
import FlutterLogo from "../assets/flutter.png";
import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/css3.png";
import TailwindLogo from "../assets/tailwind.png";
import ChakraLogo from "../assets/chakraUi.png";
import RadixLogo from "../assets/radixUi.png";
import ReactQueryLogo from "../assets/reactQuery.png";
import nodeLogo from "../assets/nodejs.png";
import expressLogo from "../assets/expressjs.png";
import prismaLogo from "../assets/prisma.png";
import sqlLogo from "../assets/mysql.png";
import postgresLogo from "../assets/postgresqlImage.png";
import nextAuthLogo from "../assets/nextAuth.png";
import javaLogo from "../assets/java.png";
import javascriptLogo from "../assets/javascript.png";
import typescriptLogo from "../assets/TS.png";
import gitLogo from "../assets/git.png";
import postmanLogo from "../assets/postman.png";
import figmaLogo from "../assets/figma.png";
import ZustandLogo from "../assets/Zustand.png";
import TechGrid from "../components/TechGrid";
import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";

const frontTechnologies = [
  { name: "React.js", logo: ReactLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "Flutter", logo: FlutterLogo },
  { name: "React Native", logo: ReactNativeLogo },
  { name: "HTML", logo: HtmlLogo },
  { name: "CSS", logo: CssLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "Chakra UI", logo: ChakraLogo },
  { name: "Radix UI", logo: RadixLogo },
  { name: "React Query", logo: ReactQueryLogo },
  { name: "Zustand", logo: ZustandLogo },
];

const backTechnologies = [
  { name: "Node.js", logo: nodeLogo },
  { name: "Express.js", logo: expressLogo },
  { name: "MySQL", logo: sqlLogo },
  { name: "PostgreSQL", logo: postgresLogo },
  { name: "Prisma", logo: prismaLogo },
  { name: "NextAuth", logo: nextAuthLogo },
];

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

const MotionText = motion.h1;

const TechStack = () => {
  const { ref: textRef, isInView: isTextInView } =
    useAnimatedInView<HTMLHeadingElement>();

  return (
    <section className="section-container pt-12 lg:pt-20 pb-16" id="techstack">
      <div className="overflow-hidden">

        <MotionText
          ref={textRef}
          className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20"
          style={{ fontFamily: "'Syne', sans-serif" }}
          initial={{ opacity: 0, x: 100 }}
          animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Tools &<span className="text-[var(--primary)]"> Technologies</span>
        </MotionText>
      </div>

      <div className="mt-14 space-y-16">
        <TechGrid topic="Frontend Development" technologies={frontTechnologies} />
        <TechGrid topic="Backend Development" technologies={backTechnologies} />
        <TechGrid topic="Programming Languages" technologies={languages} />
        <TechGrid topic="Tools" technologies={tools} />
      </div>
    </section>
  );
};

export default TechStack;
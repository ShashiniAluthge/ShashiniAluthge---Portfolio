import javaLogo from "../assets/java.png";
import javascriptLogo from "../assets/javascript.png";
import typescriptLogo from "../assets/TS.png";

const languages = [
  { name: "Java", logo: javaLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "TypeScript", logo: typescriptLogo },
];

const Languages = () => {
  return (
    <div className="border-4">
      <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold">
        Programming Languages
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {languages.map((language, index) => (
          <div
            key={index}
            className="bg-[var(--secondbackground)] flex flex-col items-center justify-center w-40 h-24 p-4 rounded-lg shadow-md"
          >
            <img
              src={language.logo}
              alt={language.name}
              className="w-10 h-10 mb-2"
            />
            <p className="text-[var(--secondary)] text-lg font-semibold text-center">
              {language.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;

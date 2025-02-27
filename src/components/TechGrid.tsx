interface TechnologyData {
  name: string;
  logo: string;
}

interface TechgridProp {
  topic: string;
  technologies: TechnologyData[];
}

const TechGrid = ({ topic, technologies }: TechgridProp) => {
  return (
    <div>
      <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold">
        {topic}
      </h1>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 lg:gap-4 sm:px-8 md:px-20 lg:px-0">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-[var(--secondbackground)] flex flex-col items-center justify-center lg:w-40 lg:h-24 w-30 h-20 p-4 rounded-xl mx-auto border border-[var(--primary)] shadow-md"
            >
              <img src={tech.logo} alt={tech.name} className="w-10 h-10 mb-2" />
              <p className="text-[var(--secondary)] lg:text-lg text-sm text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechGrid;

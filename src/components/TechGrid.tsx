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
      <h2
        className="text-center text-[var(--secondary)] md:text-2xl lg:text-2xl text-xl mb-6 font-bold"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {topic}
      </h2>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center lg:w-32 lg:h-28 w-24 h-24 p-4 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,157,255,0.35)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,157,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img src={tech.logo} alt={tech.name} className="w-9 h-9 mb-2 object-contain" />
              <p
                className="text-center text-xs md:text-sm"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
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
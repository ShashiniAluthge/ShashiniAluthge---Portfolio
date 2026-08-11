import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";
import Experience from "./Experience";

const MotionText = motion.div;

// ─── Hardcoded data ─────────────────────────────────────────────────────────

const aboutData = {
  title: "About Me",
  description:
    "Final-year B.Sc. (Hons) Information Technology undergraduate at the University of Moratuwa with hands-on industry experience in Full-Stack Software Development and Cross-Platform Mobile Application Development. Experienced in developing scalable web and mobile applications using React, Next.js, React Native, Flutter, Node.js, TypeScript, JavaScript, and MySQL. Skilled in REST API integration, database-driven application development, Git version control, Agile software development, and building responsive, user-centric software solutions. Strong analytical, troubleshooting, and problem-solving abilities with a passion for software engineering.",
};

const educationData = [
  {
    id: 1,
    institution: "University of Moratuwa",
    faculty: "Faculty of Information Technology",
    qualification: "Bachelor of Science (Hons) in Information Technology",
    description: "CGPA: 3.54 / 4.00",
    start_year: 2022,
    end_year: 2026,
  },
  {
    id: 2,
    institution: "IMBS Green Campus",
    faculty: null,
    qualification: "Diploma in Information Technology",
    description: "GPA: 3.40 / 4.00",
    start_year: 2021,
    end_year: 2022,
  },
  {
    id: 3,
    institution: "Dhammapala Girls' School, Beliatta",
    faculty: null,
    qualification: "G.C.E. Advanced Level Examination",
    description: "Passed with 2A's & 1C in Physical Science Stream",
    start_year: 2017,
    end_year: 2020,
  },
  {
    id: 4,
    institution: "Dhammapala Girls' School, Beliatta",
    faculty: null,
    qualification: "G.C.E. Ordinary Level Examination",
    description: "Passed with 9A's",
    start_year: 2011,
    end_year: 2016,
  },
];

// ─── Reusable pieces ────────────────────────────────────────────────────────

const TimelineNode = () => (
  <div
    className="absolute left-3 md:left-1/2 top-1.5 md:-translate-x-1/2 w-3 h-3 rounded-full z-10"
    style={{
      background: "var(--primary)",
      boxShadow: "0 0 0 4px rgba(0,157,255,0.15), 0 0 14px rgba(0,157,255,0.6)",
      animation: "nodePulse 2.4s ease-in-out infinite",
    }}
  />
);

const EducationCard = ({
  institution,
  faculty,
  qualification,
  description,
  start_year,
  end_year,
  reverse,
}: {
  institution: string;
  faculty: string | null;
  qualification: string;
  description: string | null;
  start_year: number;
  end_year: number;
  reverse: boolean;
}) => {
  const { ref, isInView } = useAnimatedInView<HTMLDivElement>();

  return (
    <div className={`relative md:flex md:items-start ${reverse ? "md:flex-row-reverse" : ""}`}>
      <TimelineNode />
      <div className={`pl-10 md:w-1/2 ${reverse ? "md:pl-12" : "md:pl-0 md:pr-12"}`}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 40 : -40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[var(--secondbackground)] rounded-2xl p-6 pt-5"
          style={{ border: `1px solid ${reverse ? "rgba(255,255,255,0.06)" : "rgba(0,157,255,0.25)"}` }}
        >
          <span
            className="inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--primary)",
              background: "rgba(0,157,255,0.1)",
            }}
          >
            {start_year} — {end_year}
          </span>
          <h2 className="text-[var(--secondary)] text-xl md:text-2xl font-bold">{institution}</h2>
          {faculty && <p className="text-[var(--secondary)] mt-3 text-md md:text-lg">{faculty}</p>}
          <p className="mt-1 text-md md:text-lg font-light" style={{ color: "rgba(255,255,255,0.55)" }}>
            {qualification}
          </p>
          {description && (
            <p className="mt-2 text-sm md:text-base font-light" style={{ color: "rgba(255,255,255,0.55)" }}>
              {description}
            </p>
          )}
        </motion.div>
      </div>
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
};

// ─── Main component ─────────────────────────────────────────────────────────

const About = () => {
  const { ref: divRef, isInView: isDivInView } = useAnimatedInView<HTMLDivElement>();
  const { ref: railRef, isInView: isRailInView } = useAnimatedInView<HTMLDivElement>();

  return (
    <div>
      <section className="section-container pt-12 lg:pt-20" id="about">
        {/* ── About Me ── */}
        <div className="overflow-hidden">
          <MotionText
            ref={divRef}
            initial={{ opacity: 0, x: -100 }}
            animate={isDivInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >


            <h1
              className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              About
              <span className="text-[var(--primary)]"> Me</span>
            </h1>

            <div className="max-w-4xl mx-auto mt-8 px-2">
              <div
                className="text-[var(--secondary)] lg:text-xl text-lg text-justify leading-8 font-normal pl-6"
                style={{ borderLeft: "2px solid rgba(0,157,255,0.3)" }}
              >
                {aboutData.description}
              </div>
            </div>
          </MotionText>
        </div>

        {/* ── Work Experience ── */}
        <Experience />

        {/* ── Education timeline ── */}
        <div className="items-center justify-center px-2 mt-20">
          <h1
            className="text-center text-[var(--secondary)] md:text-4xl mt-8 text-3xl mb-16 font-bold"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Education
          </h1>

          <div ref={railRef} className="relative max-w-4xl mx-auto pb-2">
            {/* Rail track */}
            <div
              className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <motion.div
                className="absolute left-0 top-0 w-full origin-top"
                style={{
                  background: "linear-gradient(to bottom, var(--primary), var(--gradient_1), var(--gradient_2))",
                }}
                initial={{ height: "0%" }}
                animate={isRailInView ? { height: "100%" } : { height: "0%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>

            <div className="flex flex-col gap-14 md:gap-8">
              {educationData.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  institution={edu.institution}
                  faculty={edu.faculty}
                  qualification={edu.qualification}
                  description={edu.description}
                  start_year={edu.start_year}
                  end_year={edu.end_year}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
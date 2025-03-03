import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";

const MotionText = motion.div;

const About = () => {
  const { ref: divRef, isInView: isDivInView } =
    useAnimatedInView<HTMLDivElement>();
  return (
    <div>
      <section
        className="lg:ml-30 lg:mr-30 pt-12 lg:pt-20 md:ml-10 md:mr-10 ml-2 mr-2 "
        id="about"
      >
        <div className="overflow-hidden">
        <MotionText
          ref={divRef}
          initial={{ opacity: 0, x: -100 }}
          animate={isDivInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20">
            About
            <span className="text-[var(--primary)]"> Me</span>
          </h1>

          <div className="text-[var(--secondary)] lg:text-xl text-lg text-justify p-2 leading-8 font-normal">
            I am an IT undergraduate at the Faculty of Information Technology,
            University of Moratuwa, with a strong foundation in programming,
            algorithms, and software development methodologies. My primary
            interests lie in full-stack web and mobile application development,
            as well as UI/UX design, where I focus on creating seamless,
            efficient, and user-friendly digital experiences. I thrive on
            solving complex problems, optimizing performance, and developing
            innovative solutions that make an impact. Eager to expand my skills
            and contribute to meaningful projects, I am constantly exploring new
            technologies and best practices in the field.
          </div>
        </MotionText>
        </div>
        <div className="items-center justify-center px-2">
          <h1 className="text-center text-[var(--secondary)] md:text-4xl mt-8 text-3xl mb-5 font-bold">
            Education
          </h1>
          <div className="flex flex-col md:flex-row md:space-x-10">
            {/* University of Moratuwa */}
            <div className="flex flex-col flex-1 bg-[var(--secondbackground)] border p-6 pt-4 mb-5 md:mb-0 transition-all duration-300 cursor-pointer hover:shadow-xl rounded-2xl border-[var(--primary)] shadow-lg hover:scale-105">
              <span className="text-xl font-bold text-left text-[var(--primary)] mb-5">
                2022 - 2026
              </span>
              <h2 className="text-[var(--secondary)] text-xl md:text-2xl font-bold text-left">
                University of Moratuwa
              </h2>
              <p className="text-[var(--secondary)] mt-2 text-md md:text-xl">
                Faculty of Information Technology
              </p>
              <p className="text-[var(--secondary)] mt-2 text-md md:text-xl font-light">
                Bachelor of Science (Hons) in Information Technology
              </p>
            </div>

            {/* Dhammapala Girls’ School */}
            <div className="flex flex-col flex-1 bg-[var(--secondbackground)] border p-6 pt-4 transition-all duration-300 cursor-pointer hover:shadow-xl rounded-2xl border-[var(--primary)] shadow-md hover:scale-105">
              <span className="text-xl font-bold text-left text-[var(--primary)] mb-5">
                2011 - 2020
              </span>
              <h2 className="text-[var(--secondary)] text-xl md:text-2xl font-bold text-left">
                Dhammapala Girls’ School, Beliatta
              </h2>
              <p className="text-[var(--secondary)] mt-2 text-md md:text-xl">
                G.C.E. Advanced Level Examination - 2020
              </p>
              <p className="text-[var(--secondary)] text-sm md:text-md lg:text-lg font-light">
                Passed with 2A's & 1C in Physical Science Stream
              </p>
              <p className="text-[var(--secondary)] mt-4 text-md md:text-xl">
                G.C.E. Ordinary Level Examination - 2016
              </p>
              <p className="text-[var(--secondary)] text-sm md:text-md lg:text-lg font-light">
                Passed with 9A's
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

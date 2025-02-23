import HorizontalLine from "../components/HorizontalLine";

const About = () => {
  return (
    <section className="lg:ml-30 lg:mr-30 pt-12 lg:pt-10 md:ml-10 md:mr-10 ml-2 mr-2 ">
      <h1 className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20">
        About
        <span className="text-[var(--primary)]"> Me</span>
      </h1>
      <HorizontalLine/>

      <div className="text-[var(--secondary)] lg:text-xl text-lg text-justify p-2 leading-8">
        I am an IT undergraduate at the Faculty of Information Technology,
        University of Moratuwa, with a strong foundation in programming,
        algorithms, and software development methodologies. My primary interests
        lie in full-stack web and mobile application development, as well as
        UI/UX design, where I focus on creating seamless, efficient, and
        user-friendly digital experiences. I thrive on solving complex problems,
        optimizing performance, and developing innovative solutions that make an
        impact. Eager to expand my skills and contribute to meaningful projects,
        I am constantly exploring new technologies and best practices in the
        field.
  
      </div>
      <div className="items-center justify-center">
        <h1 className="text-center text-[var(--secondary)] md:text-4xl mt-8 text-3xl mb-5 font-bold">
          Education
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-10  ">
          <div className="flex flex-col flex-1 bg-[var(--secondbackground)] gradient-border p-6  pt-4 mb-5 md:mb-0 ">
          <text className="text-xl font-bold text-left text-[var(--primary)] mb-5">
              2022 - 2026
            </text>
            <text className="text-[var(--secondary)] text-xl md:text-2xl font-bold text-left">
            University of Moratuwa
            </text>
            <text className="text-[var(--secondary)] mt-2 text-md md:text-xl">
            Faculty of Information Technology
            </text>
            <text className="text-[var(--secondary)] mt-2 text-md md:text-xl">
            Bachelor of Science (Hons) in Information Technology
            </text>
           
          </div>
          <div className="flex flex-col flex-1 bg-[var(--secondbackground)] gradient-border p-6  pt-4">
          <text className="text-xl font-bold text-left text-[var(--primary)] mb-5">
              2011 - 2020
            </text>
            <text className="text-[var(--secondary)] text-xl md:text-2xl font-bold text-left">
              Dhammapala Girls’ School, Beliatta
            </text>
            <text className="text-[var(--secondary)] mt-2 text-md md:text-xl">
              G.C.E. Advanced Level Examination - 2020
            </text>
            <text className="text-[var(--secondary)] text-sm md:text-md lg:text-lg">
              Passed with 2A's & 1C in Physical Science Stream
            </text>
            <text className="text-[var(--secondary)] mt-4 text-md md:text-xl">
              G.C.E. Ordinary Level Examination - 2016
            </text>
            <text className="text-[var(--secondary)] text-sm md:text-md lg:text-lg">
              Passed with 9A's
            </text>
          </div>
        </div>
        {/* <div className="flex flex-col  bg-[var(--secondbackground)] border-4 gradient-border p-10 mt-10">
          <text className="text-[var(--secondary)] text-3xl font-bold text-left">
            People's Bank, Beliatta
          </text>
          <text className="text-[var(--secondary)]">
            Bank Assistant Intern -(2021-2022)
          </text>
        </div> */}
      </div>
    </section>
  );
};

export default About;

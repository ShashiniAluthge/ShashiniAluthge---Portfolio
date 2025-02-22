const About = () => {
  return (
    <section className="lg:ml-30 lg:mr-30 pt-12 lg:pt-10 md:ml-10 md:mr-10 ml-2 mr-2 ">
      <h1 className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20">
        About
        <span className="text-[var(--primary)]"> Me</span>
      </h1>
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
        <h1 className="text-center text-[var(--secondary)]  text-3xl md:text-5xl/20 mt-8">
          Education
        </h1>
        <div className="flex space-x-10">
          <div className="flex flex-col flex-1 bg-[var(--secondbackground)] border-4 border-[var(--primary)] p-10">
            <text className="text-[var(--secondary)] text-3xl font-bold text-left">
              University of Moratuwa
            </text>
            <text className="text-[var(--secondary)]">
              B.Sc. (Hons) in Information Technology
            </text>
            <text className="text-[var(--secondary)]">
              CGPA: 3.51 / 4.0 (Up to Level 04)
            </text>
          </div>
          <div className="flex flex-col flex-1 bg-[var(--secondbackground)] border-4 border-[var(--primary)] p-10">
            <text className="text-[var(--secondary)] text-3xl font-bold text-left">
              Dhammapala Girls’ School, Beliatta
            </text>
            <text className="text-[var(--secondary)]">
              G.C.E. Advanced Level Examination - 2020
            </text>
            <text className="text-[var(--secondary)]">
              Combined Mathematics: A | Chemistry: A | Physics: C
            </text>
          </div>
        </div>
        <div className="flex flex-col  bg-[var(--secondbackground)] border-4 border-[var(--primary)] p-10 mt-10">
          <text className="text-[var(--secondary)] text-3xl font-bold text-left">
            People's Bank, Beliatta
          </text>
          <text className="text-[var(--secondary)]">
            Bank Assistant Intern -(2021-2022)
          </text>
        </div>
      </div>
    </section>
  );
};

export default About;

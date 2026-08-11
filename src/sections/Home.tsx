import { JSX, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SocialIcons from "../components/SocialIcons";
import profileImage from "../assets/profile.png";
import { motion } from "framer-motion";

const roles = ["Software Engineer", "Full Stack Developer", "Programmer", "UI/UX Designer"];

const quickInfo = [
  {
    icon: "code",
    title: "Full-Stack Engineer",
    subtitle: "Web & mobile apps",
    href: "#projects",
  },
  {
    icon: "design",
    title: "UI/UX Enthusiast",
    subtitle: "Clean, user-first design",
    href: "#about",
  },
  {
    icon: "research",
    title: "Final-Year Researcher",
    subtitle: "IT Faculty @ UoM",
    href: "#about",
  },
];

const icons: Record<string, JSX.Element> = {
  code: (
    <path
      d="M8 9l-4 3 4 3 M16 9l4 3-4 3 M13 6l-2 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  design: (
    <path
      d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.6 1.6-1.4 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.8.6-1.4 1.4-1.4H15a4.5 4.5 0 0 0 4.5-4.5C19.5 6.8 16.1 3 12 3Z M7.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M8.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M12.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M16 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  research: (
    <path
      d="M9 3h6 M12 3v6 M7 9h10l2 9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z M9 14h.01 M12 14h.01 M15 14h.01"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingInterval = setTimeout(() => {
      if (!isDeleting) {
        if (characterIndex < currentRole.length) {
          setCharacterIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (characterIndex > 0) {
          setCharacterIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(typingInterval);
  }, [characterIndex, isDeleting, roleIndex]);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--background)" }}
      id="home"
    >
      {/* ── Stars ── */}
      <Stars />

      {/* ── Background orbs ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 500, height: 500,
            top: -100, left: -80,
            background: "radial-gradient(circle, rgba(0,157,255,0.18) 0%, rgba(0,157,255,0.04) 60%, transparent 100%)",
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,157,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,157,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Top glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,157,255,0.4), transparent)" }}
        />
      </div>

      {/* ── Full-screen watermark name (animated horizontal drift) ── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <motion.span
          className="absolute top-1/2"
          style={{
            fontFamily: "'Caveat', cursive",
            fontWeight: 800,
            fontSize: "clamp(90px, 18vw, 420px)",
            color: "rgba(255,255,255,0.035)",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
          initial={{ x: "100vw", y: "-50%" }}
          animate={{ x: "-120%" }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          SHASHINI ALUTHGE
        </motion.span>
      </div>

      {/* ── Navbar ── */}
      <NavBar />

      {/* ── Main split layout ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen pt-24 lg:pt-20 pb-10">

        {/* ── LEFT — text content ── */}
        <div className="relative flex flex-col justify-center lg:w-1/2 px-8 md:px-14 lg:px-16 xl:px-20 pt-6 lg:pt-0 pb-10 lg:pb-0">

          {/* Status pill */}
          <motion.div
            className="relative flex items-center gap-2 mb-6 w-fit px-4 py-2 rounded-full"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
              Available For Work
            </span>
          </motion.div>

          {/* Two-line headline: line 1 static, line 2 typing role */}
          <motion.h1
            className="relative font-bold mb-2"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 3.6vw, 46px)",
              color: "var(--secondary)",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi! I'm Shashini Aluthge
          </motion.h1>

          <motion.h2
            className="relative font-bold mb-6"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(26px, 3.4vw, 44px)",
              color: "var(--primary)",
              lineHeight: 1.15,
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {roles[roleIndex].substring(0, characterIndex)}
            <span className="typing-cursor">|</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="relative mb-7 max-w-lg"
            style={{
              fontSize: "clamp(13px, 1.1vw, 15px)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm a Software Engineer skilled in full stack development —
            building intuitive, responsive web and mobile applications
            with a strong focus on clean design and user experience.
          </motion.p>



          {/* Buttons */}
          <motion.div
            className="relative flex flex-row gap-4 flex-wrap mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1zCVd0Z1WWAX8wMu9T4tYENTxivyFapq6"
              download="Shashini_Aluthge_CV.pdf"
              className="px-8 py-3 font-semibold rounded-full text-sm text-white"
              style={{
                background: "var(--primary)",
                boxShadow: "0 6px 24px rgba(0,157,255,0.35)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 font-semibold rounded-full text-sm text-white"
              style={{
                background: "var(--secondbackground)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me Now
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <SocialIcons />
          </motion.div>
        </div>

        {/* ── RIGHT — blob shape with cutout photo ── */}
        <div className="relative lg:w-1/2 flex items-center justify-center min-h-[480px] lg:min-h-[640px] mt-10 lg:mt-0">

          {/* Organic blob shape */}
          <motion.svg
            viewBox="0 0 500 500"
            className="absolute z-0 w-[380px] sm:w-[440px] md:w-[520px] lg:w-[580px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <defs>
              <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--gradient_1)" />
              </linearGradient>
            </defs>
            <motion.path
              fill="url(#blobGradient)"
              animate={{
                d: [
                  "M300,60 C390,80 440,170 430,260 C420,350 340,430 250,435 C160,440 70,375 55,285 C40,195 90,90 180,65 C220,54 260,50 300,60 Z",
                  "M310,55 C400,75 435,180 415,270 C395,360 310,430 225,430 C140,430 60,360 50,270 C40,180 90,90 175,60 C220,45 265,40 310,55 Z",
                  "M300,60 C390,80 440,170 430,260 C420,350 340,430 250,435 C160,440 70,375 55,285 C40,195 90,90 180,65 C220,54 260,50 300,60 Z",
                ],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* Ambient glow */}
          <motion.div
            className="absolute pointer-events-none z-0"
            style={{
              width: 480, height: 480,
              background: "radial-gradient(circle, rgba(0,157,255,0.22) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
            animate={{ opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Cutout photo, overflowing the blob slightly for depth */}
          <motion.img
            src={profileImage}
            alt="Shashini Aluthge"
            className="relative z-10 object-contain object-bottom"
            style={{
              width: "clamp(320px, 46vw, 760px)",
              height: "auto",
              maxHeight: "85vh",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          />
        </div>
      </div>

      {/* ── Bottom quick-info row ── */}
      <div className="relative z-10 section-container pb-14">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {quickInfo.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex items-center justify-between gap-3 px-5 py-4 rounded-2xl transition-transform hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,157,255,0.12)", color: "var(--primary)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    {icons[item.icon]}
                  </svg>
                </span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "var(--secondary)" }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

/* ── Stars ── */
const Stars = () => {
  const stars = Array.from({ length: 90 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 2 + Math.random() * 4,
    delay: Math.random() * 4,
    minOp: 0.1 + Math.random() * 0.15,
    maxOp: 0.5 + Math.random() * 0.5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
          }}
          animate={{ opacity: [s.minOp, s.maxOp, s.minOp] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Home;
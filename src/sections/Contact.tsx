import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import useAnimatedInView from "../hooks/useAnimatedInView";

const MotionText = motion.h1;

const contactInfo = [
  {
    label: "Phone",
    value: "(+94) 769 056 556",
    href: undefined,
    icon: (
      <path d="M6.6,3A3.6,3.6,0,0,0,3,6.6C3,14.5,9.5,21,17.4,21A3.6,3.6,0,0,0,21,17.4,1,1,0,0,0,20,16.5a6.4,6.4,0,0,1-2.7-.5,1,1,0,0,0-1.2.3L14.4,17a14.4,14.4,0,0,1-6-6L9.7,9.9a1,1,0,0,0,.3-1.2A6.4,6.4,0,0,1,9.5,6.5,1,1,0,0,0,8.5,6,3.6,3.6,0,0,0,6.6,3Z" />
    ),
  },
  {
    label: "Email",
    value: "ssshashini21@gmail.com",
    href: "mailto:ssshashini21@gmail.com",
    icon: (
      <path
        fillRule="evenodd"
        d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11zm2.5-.5a.5.5 0 00-.5.5v.307l8 4.8 8-4.8V6.5a.5.5 0 00-.5-.5h-15zM21 8.693l-8.218 4.93a1 1 0 01-1.064 0L3 8.693V17.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V8.693z"
        clipRule="evenodd"
      />
    ),
  },
  {
    label: "LinkedIn",
    value: "Shashini Aluthge",
    href: "https://www.linkedin.com/in/shashini-aluthge-64545b30b/?trk=PROFILE_DROP_DOWN",
    icon: (
      <path d="M4.98 3C3.33 3 2 4.34 2 6s1.33 3 2.98 3S8 7.66 8 6 6.64 3 4.98 3zM3 8h4v12H3V8zm7-1h4v2.09c.73-1.39 2.5-2.09 4-2.09 3.36 0 4 2.21 4 5.09V20h-4v-7c0-1.39 0-3-2-3s-2 1.61-2 3v7h-4V7z" />
    ),
  },
];

const Contact = () => {
  const { ref: textRef, isInView: isTextInView } =
    useAnimatedInView<HTMLHeadingElement>();

  return (
    <section className="section-container pt-12 lg:pt-35 pb-16" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-10 items-start">
        {/* ── Left — info ── */}
        <div>
          <div className="overflow-hidden">

            <MotionText
              ref={textRef}
              className="text-[var(--secondary)] font-bold text-4xl md:text-5xl/20 text-center md:text-left"
              style={{ fontFamily: "'Syne', sans-serif" }}
              initial={{ opacity: 0, x: -100 }}
              animate={
                isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Let&rsquo;s <span className="text-[var(--primary)]">Talk</span>
            </MotionText>
          </div>

          <p
            className="text-center md:text-left mt-3"
            style={{ color: "rgba(255,255,255,0.55)", fontWeight: 300 }}
          >
            I&rsquo;m open to new opportunities and exciting projects! Feel free to
            reach out — let&rsquo;s create something amazing together.
          </p>

          <div className="mt-8 space-y-3">
            {contactInfo.map((item) => {
              const content = (
                <div
                  className="flex items-center gap-4 px-4 py-3 rounded-2xl transition-transform hover:-translate-y-1 cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,157,255,0.12)" }}
                  >
                    <svg className="w-5 h-5" fill="var(--primary)" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </span>
                  <div>
                    <p style={{ color: "var(--primary)", fontSize: 13, fontWeight: 600 }}>
                      {item.label}
                    </p>
                    <p style={{ color: "var(--secondary)", fontSize: 14 }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>

        {/* ── Right — form ── */}
        <div
          className="p-8 rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(0,157,255,0.18)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <h2
            className="text-center text-[var(--secondary)] font-bold text-3xl md:text-4xl mb-2"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Contact<span className="text-[var(--primary)]"> Me!</span>
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
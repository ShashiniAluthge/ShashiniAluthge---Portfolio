import logo from "../assets/footerLogo.png";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/shashini.aluthge.3",
    icon: (
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.412c0-2.507 1.493-3.89 3.774-3.89 1.095 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.633.776-1.633 1.57v1.888h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shashini-aluthge-64545b30b/?trk=PROFILE_DROP_DOWN",
    icon: (
      <path
        fillRule="evenodd"
        d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5S0 4.88 0 3.5C0 2.12 1.12 1 2.49 1S4.98 2.12 4.98 3.5zM0 22h5V7H0v15zM8 7h5v2.07c.72-1.34 2.45-2.82 5.04-2.82 5.39 0 6.38 3.54 6.38 8.14V22h-5v-6.78c0-1.61-.03-3.68-2.38-3.68-2.38 0-2.75 1.74-2.75 3.56V22H8V7z"
        clipRule="evenodd"
      />
    ),
  },
  {
    label: "Email",
    href: "mailto:ssshashini21@gmail.com",
    icon: (
      <path
        fillRule="evenodd"
        d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11zm2.5-.5a.5.5 0 00-.5.5v.307l8 4.8 8-4.8V6.5a.5.5 0 00-.5-.5h-15zM21 8.693l-8.218 4.93a1 1 0 01-1.064 0L3 8.693V17.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V8.693z"
        clipRule="evenodd"
      />
    ),
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-[var(--secondary)] font-light text-center text-sm bg-[var(--footerbg)] h-auto pb-10 flex justify-center items-center flex-col"
    >
      {/* Top divider glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,157,255,0.35), transparent)" }}
      />

      <img src={logo} className="w-40 h-40" />

      <div className="flex flex-row gap-4 mb-8 -mt-8">
        {socialLinks.map((social) => {
          const isExternal = social.href.startsWith("http");
          return (
            <a
              key={social.label}
              href={social.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:-translate-y-1"
              style={{
                background: "rgba(0,157,255,0.1)",
                border: "1px solid rgba(0,157,255,0.2)",
                color: "var(--primary)",
              }}
            >
              <svg
                className="w-4.5 h-4.5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {social.icon}
              </svg>
            </a>
          );
        })}
      </div>

      <div style={{ color: "rgba(255,255,255,0.5)" }}>
        Copyright &#169; {currentYear} Shashini Aluthge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
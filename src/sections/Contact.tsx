const Contact = () => {
  return (
    <div className="pb-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-10 items-center mt-10 lg:mt-20  sm:p-6 md:p-10 lg:p-0 ">
        {/* left Section */}
        <div className="">
          <h2 className="text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20 text-center md:text-left">
            Let's Work Together
          </h2>

          <div className="mt-6 space-y-4 pl-10 md:pl-0">
            <div className="flex items-center space-x-4">
              <div className="bg-[var(--secondbackground)] p-2 rounded-lg">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M6.6,3A3.6,3.6,0,0,0,3,6.6C3,14.5,9.5,21,17.4,21A3.6,3.6,0,0,0,21,17.4,1,1,0,0,0,20,16.5a6.4,6.4,0,0,1-2.7-.5,1,1,0,0,0-1.2.3L14.4,17a14.4,14.4,0,0,1-6-6L9.7,9.9a1,1,0,0,0,.3-1.2A6.4,6.4,0,0,1,9.5,6.5,1,1,0,0,0,8.5,6,3.6,3.6,0,0,0,6.6,3Z" />
                </svg>
              </div>
              <div>
                <p className="text-[var(--primary)] font-semibold">Phone</p>
                <p className="text-gray-300 hover:font-bold hover:text-[var(--secondary)] cursor-pointer">
                  (+94) 769 056 556
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[var(--secondbackground)] p-2 rounded-lg">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11zm2.5-.5a.5.5 0 00-.5.5v.307l8 4.8 8-4.8V6.5a.5.5 0 00-.5-.5h-15zM21 8.693l-8.218 4.93a1 1 0 01-1.064 0L3 8.693V17.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V8.693z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-[var(--primary)] font-semibold">Email</p>
                <a
                  href="mailto:ssshashini21@gmail.com"
                  className="text-gray-300 hover:font-bold hover:text-[var(--secondary)]"
                >
                  ssshashini21@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[var(--secondbackground)] p-2 rounded-lg">
                <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                  <path d="M4.98 3C3.33 3 2 4.34 2 6s1.33 3 2.98 3S8 7.66 8 6 6.64 3 4.98 3zM3 8h4v12H3V8zm7-1h4v2.09c.73-1.39 2.5-2.09 4-2.09 3.36 0 4 2.21 4 5.09V20h-4v-7c0-1.39 0-3-2-3s-2 1.61-2 3v7h-4V7z"></path>
                </svg>
              </div>
              <div>
                <p className="text-[var(--primary)] font-semibold">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/shashini-sithara-64545b30b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:font-bold hover:text-[var(--secondary)]"
                >
                  linkedin.com/in/shashini-sithara
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[var(--secondbackground)] pt-4 p-8 rounded-lg shadow-lg text-[var(--secondary)] mr-2 ml-2 ">
          <h1 className="text-center text-[var(--secondary)] font-semibold text-4xl md:text-5xl/20">
            Contact<span className="text-[var(--primary)]"> Me!</span>
          </h1>
          <form className="mt-6 space-y-4 ">
            <div className="flex gap-2 flex-col md:flex-row space-y-2 md:space-y-0">
              <input
                type="text"
                placeholder="First Name"
                className="input-field w-full md:w-1/2 bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input-field w-full md:w-1/2 bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)]"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)] "
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)]"
            />

            <textarea
              placeholder="Your Message"
              className="input-field w-full bg-white text-[var(--secondbackground)] p-2 rounded-lg border border-[var(--primary)] focus:outline-[var(--primary)] h-30"
            ></textarea>
            <button className="px-8 py-2 lg:px-5 text-[var(--primary)] rounded-4xl transition-all duration-200 bg-[var(--background)] button_shadow hover:button_shadow-hover hover:scale-105 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

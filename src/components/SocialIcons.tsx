const SocialIcons = () => {
  return (
    <div className="flex flex-row space-x-4 md:ml-10 justify-center mt-5 md:mt-0">
      <div className="flex w-12 h-12 border-1 p-2 rounded-full  justify-center items-center border-[var(--primary)] hover:ring-1 hover:ring-[var(--primary)]  hover:shadow-[0_4px_4px_var(--primary)]">
        <a
          href="https://github.com/ShashiniAluthge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--secondary)] hover:text-[var(--primary)] transition duration-300"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 2c-5.523 0-10 4.477-10 10 0 4.418 2.865 8.167 6.839 9.489.5.092.683-.217.683-.482v-1.695c-2.782.603-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.087 2.91.832.091-.646.349-1.087.636-1.338-2.221-.253-4.555-1.112-4.555-4.944 0-1.092.39-1.985 1.029-2.683-.103-.253-.446-1.272.097-2.65 0 0 .84-.269 2.75 1.025a9.564 9.564 0 0 1 2.5-.336c.847.003 1.702.114 2.5.336 1.91-1.294 2.75-1.025 2.75-1.025.543 1.378.2 2.397.097 2.65.64.698 1.029 1.591 1.029 2.683 0 3.842-2.337 4.688-4.564 4.936.358.308.678.915.678 1.846v2.735c0 .267.18.577.688.48C19.136 20.166 22 16.417 22 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex w-12 h-12 border-1 p-2 rounded-full  justify-center items-center border-[var(--primary)] hover:ring-1 hover:ring-[var(--primary)]  hover:shadow-[0_4px_4px_var(--primary)]">
        <a
          href="https://www.linkedin.com/in/shashini-sithara-64545b30b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--secondary)] hover:text-[var(--primary)] transition duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5S0 4.88 0 3.5C0 2.12 1.12 1 2.49 1S4.98 2.12 4.98 3.5zM0 22h5V7H0v15zM8 7h5v2.07c.72-1.34 2.45-2.82 5.04-2.82 5.39 0 6.38 3.54 6.38 8.14V22h-5v-6.78c0-1.61-.03-3.68-2.38-3.68-2.38 0-2.75 1.74-2.75 3.56V22h-5V7z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>

      <div className="flex w-12 h-12 border-1 p-2 rounded-full justify-center items-center border-[var(--primary)] hover:ring-1 hover:ring-[var(--primary)] hover:shadow-[0_4px_4px_var(--primary)]">
  <a
    href="mailto:ssshashini21@gmail.com"
    className="text-[var(--secondary)] hover:text-[var(--primary)] transition duration-300"
  >
    <svg
      className="w-7 h-7"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-11zm2.5-.5a.5.5 0 00-.5.5v.307l8 4.8 8-4.8V6.5a.5.5 0 00-.5-.5h-15zM21 8.693l-8.218 4.93a1 1 0 01-1.064 0L3 8.693V17.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V8.693z"
        clipRule="evenodd"
      ></path>
    </svg>
  </a>
</div>

    </div>
  );
};
export default SocialIcons;

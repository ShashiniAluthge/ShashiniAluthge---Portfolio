import sqlLogo from "../assets/mysql.png";

const Database = () => {
  return (
    <div className="border-4">
      <h1 className="text-center text-[var(--secondary)] md:text-3xl lg:text-3xl mt-8 text-2xl mb-5 font-bold">
        Database
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-[var(--secondbackground)] flex flex-col items-center justify-center w-40 h-24 p-4 rounded-lg shadow-md">
          <img src={sqlLogo} alt="sql" className="w-10 h-10 mb-2" />
          <p className="text-[var(--secondary)] text-lg font-semibold text-center">
            MySQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Database;

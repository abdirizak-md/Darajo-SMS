import { useState } from "react";
import { IoNotificationsSharp, IoSearch } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

const Header = () => {
  const [hide, setHide] = useState(true);

  return (
    <header className="flex w-full bg-white min-h-24 px-4 md:px-6 py-4 shadow-[0_5px_20px_rgba(0,0,0,0.1)] gap-6 items-center">

      {/* Logo Section */}
      <div className="flex items-center gap-3 md:gap-5 flex-1">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-3xl font-medium text-[#006b3f]">
            Darajo SchoolMS
          </h1>
          <p className="text-[#666] hidden md:block">
            Complete School Management System
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <div className="border border-[#666] rounded-l-full w-[320px] h-10 relative">
          <input type="text"
            aria-label="Global search"
            placeholder="Search students, teachers, fees, and exam..."
            className="w-full h-full px-4 outline-none bg-transparent" />
        </div>

        <button aria-label="Submit search"
          className="flex items-center justify-center rounded-r-full w-14 h-10 border border-[#666] bg-white/80" >
          <IoSearch size={22} />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end">

        {/* Notifications */}
        <button aria-label="Notifications" className="relative" >
          <IoNotificationsSharp size={22} />
          <span className="flex items-center justify-center text-[10px] text-white bg-red-500 w-4 h-4 rounded-full absolute right-0 -top-1">
            5
          </span>
        </button>

        {/* User */}
        <div className="flex items-center gap-2 p-2 md:p-3 hover:bg-gray-50 rounded-lg">
          <span aria-hidden="true"
            className="bg-linear-to-l from-[#006b3f] to-[#fcd116] text-white flex items-center justify-center text-base md:text-lg w-9 h-9 md:w-10 md:h-10 rounded-full" >
            A
          </span>

          {hide && (
            <span className="text-[#666] hidden sm:block transition-all">
              Admin
            </span>
          )}

          <button onClick={() => setHide(!hide)}
            aria-label="Toggle user menu"
            className="transition-transform duration-300" >
            <MdArrowForwardIos className={`${hide ? "-rotate-90" : "rotate-90"}`}/>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;

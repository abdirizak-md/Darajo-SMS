import { useState } from "react";
import { IoNotificationsSharp, IoSearch } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

const Header = () => {
  const [hide, setHide] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <header className="hidden lg:bg-white lg:w-full lg:max-h-25 lg:px-6 lg:py-4 lg:flex lg:shadow-2xl md:flex md:max-h-25 md:w-full md:px-6 md:py-2 md:bg-white md:shadow-2xl">

      {/* Logo Section */}
      <div className="lg:flex lg:flex-1 lg:flex-col md:flex md:flex-1 md:flex-col">
        <h1 className="text-[#006b3f] lg:text-4xl lg:font-black md:text-lg md:font-bold">Darajo SchoolMS</h1>
        <p className="text-[#666] lg:text-sm md:text-[12px]">Complete School Management System</p>
      </div>

      {/* Search */}
      <form onSubmit={handleSubmit} className="lg:flex lg:flex-2 lg:items-center lg:px-6 md:flex md:flex-2 md:items-center md:px-6">
        <div className="lg:flex lg:w-full lg:rounded-full lg:border lg:border-black/40 md:flex md:w-full md:rounded-full md:border md:border-black/40">
          <input id="searchBar" type="text" aria-label="Global search" placeholder="Search students, teachers, fees, and exams..." className="lg:w-full lg:px-4 lg:py-1 lg:focus:outline-2 lg:focus:outline-[#0e006b] lg:focus:rounded-l-full md:w-full md:px-4 md:py-1 md:text-sm md:focus:outline-2 md:focus:outline-[#0e006b] md:focus:rounded-l-full"/>
          <button type="submit" aria-label="Submit search" className="lg:w-fit lg:h-fit lg:px-4 lg:py-1 lg:text-lg lg:border-l lg:bg-black/5 md:w-fit md:h-fit md:px-4 md:py-1 md:text-md md:border-l md:bg-black/5 cursor-pointer" ><IoSearch size={22} /></button>
        </div>
      </form>

      {/* Right Side */}
      <div className="lg:flex lg:justify-between lg:flex-1 lg:gap-4 md:flex md:justify-between md:flex-1 md:gap-3">
        <div className="lg:w-full md:w-full"></div>
        <div className="lg:flex lg:flex-1 lg:gap-4 md:flex md:flex-1 md:gap-3">
        {/* Notifications */}
        <button aria-label="Notifications" className="lg:relative md:relative">
          <IoNotificationsSharp size={24} />
          <div className="lg:w-5 lg:h-5 lg:bg-red-600 lg:rounded-full lg:text-white lg:text-sm lg:absolute lg:top-4 lg:left-2 md:w-5 md:h-5 md:bg-red-600 md:rounded-full md:text-white md:text-sm md:absolute md:top-4 md:left-2">5</div>
        </button>
        {/* User */}
        <div className="lg:flex lg:items-center lg:gap-2 lg:hover:bg-gray-50 lg:rounded-lg md:flex md:items-center md:gap-1 md:hover:bg-gray-50 md:rounded-lg">
          <div className="lg:w-10 lg:h-10 lg:flex lg:items-center lg:justify-center lg:text-lg lg:bg-linear-to-l lg:from-[#006b3f] lg:to-[#fcd116] lg:text-white lg:rounded-full md:w-9 md:h-9 md:flex md:items-center md:justify-center md:text-md md:bg-linear-to-l md:from-[#006b3f] md:to-[#fcd116] md:text-white md:rounded-full" >A</div>

          <div className="lg:flex lg:gap-2 lg:px-2 transition-all duration-200 md:flex md:gap-1 md:px-2">
            {hide && ( <span className="text-[#666] transition-all">Admin</span> )}

            <button onClick={() => setHide(!hide)} aria-label="Toggle user menu" className="transition-all duration-200" >
              <MdArrowForwardIos className={`${hide ? "-rotate-90" : "rotate-90"}`}/>
            </button>
          </div>
        </div>

        </div>

      </div>
    </header>
  );
};

export default Header;

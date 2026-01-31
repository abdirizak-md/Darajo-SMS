import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { IoNotificationsSharp, IoSearch } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

const Header = () => {
  const [hide, setHide] = useState(true);
  return (
    <header className='flex w-full h-21 bg-white justify-between items-center p-5 shadow-2xs shadow-gray-400  gap-4'>
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 md:gap-5">
            <FaUserGraduate size={28} className="text-[#026b00] md:size-8"/>  
            <div className="flex flex-col items-start">
                <h1 className="text-xl md:text-3xl font-medium text-[#006b3f]">
                  Darajo SchoolMS
                </h1>
                <p className="text-[#666] hidden md:block">
                  Complete School Management System
                </p>
            </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex justify-center items-center">
            <div className="border border-[#666] rounded-l-full w-100 h-10 max-w-150 max-h-15 relative">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search students, teachers, fees, and exam..."
                  className="w-full h-full px-3 outline-none"
                />
            </div>
            <div className="flex items-center justify-center rounded-r-full w-15 h-10 border border-[#666] bg-white/80">
                <IoSearch size={24}/>
            </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-5">
            <div className="flex relative">
                <IoNotificationsSharp size={22} className="relative md:size-6"/>
                <div className="flex items-center justify-center text-sm text-white text-center bg-red-500 w-4 h-4 rounded-full absolute right-0 -top-1">
                  5
                </div>
            </div>

            <div className="flex justify-between gap-2 md:gap-3 items-center p-2 md:p-3 hover:bg-gray-50 hover:rounded-lg">
                 <p className="bg-linear-to-l from-[#006b3f] to-[#fcd116] text-white flex items-center justify-center text-base md:text-lg w-9 h-9 md:w-10 md:h-10 rounded-full text-center">
                   A
                 </p>
                 {hide && <h1 className="text-[#666] hidden sm:block">Admin</h1>}
                 <MdArrowForwardIos className={`transition-all duration-300 ${hide ? "-rotate-90" : 'rotate-90'}`} onClick={() => setHide(!hide)}/>
            </div>
        </div>

    </header>
  )
}

export default Header;

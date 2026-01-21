import { FaUserGraduate } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className='flex bg-white justify-between items-center p-5 shadow-2xs shadow-gray-400 fixed top-0 left-0 right-0'>
        <div className="flex items-center gap-5">
            <FaUserGraduate size={32} className="text-[#026b00]"/>  
            <div className="flex flex-col items-start">
                <h1 className="text-3xl font-medium text-[#006b3f]">Darajo SchoolMS</h1>
                <p className="text-[#666]">Complete School Management System</p>
            </div>
        </div>

        <div className="border border-[#666] rounded-full w-100 h-10 max-w-150 max-h-15">
            <input type="text" name="search" id="search" placeholder="Search students, teachers, fees, and exam..." className="w-full h-full px-3 outline-none" />
        </div>

        <div className="flex items-center gap-5">
            <div className="flex relative">
                <IoNotificationsSharp size={24} className="relative"/>
                <div className="flex items-center justify-center text-sm text-white text-center bg-red-500 w-4 h-4 rounded-full absolute right-0 -top-1 ">5</div>
            </div>

            <div className="flex justify-between gap-3 items-center p-3 hover:bg-gray-50 hover:rounded-lg">
                 <p className="bg-linear-to-l from-[#006b3f] to-[#fcd116] text-white flex items-center justify-center text-lg w-10 h-10 rounded-full text-center">A</p>
                 <h1 className="text-[#666]">Admin</h1>
                 <MdArrowForwardIos className="-rotate-90"/>
                 <Link to='/aside'>aside</Link>
            </div>

        </div>

    </header>
  )
}

export default Header
import { useState } from 'react';
import { FaBook, FaCalendar, FaCalendarCheck, FaChalkboardUser, FaClipboardCheck, FaClock, FaFile, FaGraduationCap, FaMoneyBill, FaTachographDigital, FaUserGraduate, FaUsers } from 'react-icons/fa6';
import { MdArrowBackIos } from 'react-icons/md';
import { Link, Links, Outlet } from 'react-router-dom'


const academics = [
  {label: 'Classes & Sections', icon: <FaGraduationCap />},
  {label: 'Subjects & Assignments', icon: <FaBook />},
  {label: 'Lesson Plans', icon: <FaChalkboardUser />},
  {label: 'Study Materials', icon: <FaFile />},
  {label: 'Exams & Marks', icon: <FaClipboardCheck />},
]

const feesAccounts = [
  {label: 'Fees Collection', icon: <FaMoneyBill />},
  {label: 'Pending Fees', icon: <FaClock />},
]

const staffManagements = [
  {label: 'Staff Directory', icon: <FaUsers />},
  {label: 'Attendance Payroll', icon: <FaCalendarCheck />},
]

const studentManagement = [
  {label: 'Student Info', icon: <FaUserGraduate />},
  {label: 'Attendance Reports', icon: <FaCalendar />},
]

const ASide = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`flex flex-col bg-[#006b3f] h-screen transition-all duration-300 overflow-y-auto custom-scrollbar ${open ? 'w-100' : 'w-15'}`}>
      <div className="flex justify-between p-5 w-full border-b border-gray-500 text-white">
        {open && <span className='text-white font-medium'>Navigation</span>}
        <MdArrowBackIos onClick={() => setOpen(!open)} className={`${open ? 'rotate-0' : 'rotate-180'}`}/>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col py-2">
            {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>DASHBOARD</p>}
              <div className="flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20 hover:border-l-2 hover:border-amber-200 transition-all duration-100 relative group">
                <FaTachographDigital />
                {open && <Link to='/classes'><span>Dashboard</span></Link>}
                {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100'>Dashboard</span>}
            </div>
        </div>
        <div className="flex flex-col py-2 cursor-default">
            {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>ACADEMICS</p>}
            { academics.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20 hover:border-l-2 hover:border-amber-200 transition-all duration-100 group relative">
                {item.icon}
                {item.links}
                {open && <span>{item.label}</span>}
                {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100'>{item.label}</span>}
            </div>
            ))
          }
        </div>
        <div className="flex flex-col py-2">
            {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>FEES & ACCOUNTS</p>}
            { feesAccounts.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20 hover:border-l-2 hover:border-amber-200 transition-all duration-100 relative group">
                {item.icon}
               {open && <span>{item.label}</span>}
               {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100'>{item.label}</span>}
            </div>
            ))
          }
        </div>
        <div className="flex flex-col py-2">
            {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>STAFF MANAGEMENT</p>}
            { staffManagements.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20 hover:border-l-2 hover:border-amber-200 transition-all duration-100 group relative">
                {item.icon}
               {open && <span>{item.label}</span>}
               {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100'>{item.label}</span>}
            </div>
            ))
          }
        </div>
        <div className="flex flex-col py-2">
            {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>STUDENT MANAGEMENT</p>}
            { studentManagement.map((item, index) => (
              <div key={index} className="flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20 hover:border-l-2 hover:border-amber-200 transition-all duration-100 relative group">
                {item.icon}
               {open && <span>{item.label}</span>}
               {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100'>{item.label}</span>}
            </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ASide
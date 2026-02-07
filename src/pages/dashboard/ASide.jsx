import { useState } from 'react';
import { FaBook, FaCalendar, FaCalendarCheck, FaChalkboardUser, FaClipboardCheck, FaClock, FaFile, FaGraduationCap, FaMoneyBill, FaTachographDigital, FaUserGraduate, FaUsers } from 'react-icons/fa6';
import { MdArrowBackIos } from 'react-icons/md';
import SidebarComponent from '../../components/SidebarComponent';


const dashboard = [
  {
    label: 'Dashboard',
    icon: <FaTachographDigital size={20} />,
    path: '/',
  },
]

const academics = [
  {
    label: 'Classes & Sections',
    icon: <FaGraduationCap size={20} />,
    path: '/classes',
  },
  {
    label: 'Subjects & Assignments',
    icon: <FaBook size={20} />,
    path: '/subjects',
  },
  {
    label: 'Lesson Plans',
    icon: <FaChalkboardUser size={20} />,
    path: '/lesson-plans',
  },
  {
    label: 'Study Materials',
    icon: <FaFile size={20} />,
    path: '/materials',
  },
  {
    label: 'Exams & Marks',
    icon: <FaClipboardCheck size={20} />,
    path: '/exams',
  },
]


const feesAccounts = [
  { label: 'Fees Collection', icon: <FaMoneyBill size={20} />, path: '/fees-collection' },
  { label: 'Pending Fees', icon: <FaClock size={20} />, path: '/pending-fees' },
]

const staffManagements = [
  { label: 'Staff Directory', icon: <FaUsers size={20} />, path: '/staff-directory' },
  { label: 'Attendance Payroll', icon: <FaCalendarCheck size={20} />, path: '/payroll' },
]

const studentManagement = [
  { label: 'Student Info', icon: <FaUserGraduate size={20} />, path: '/student-info' },
  { label: 'Attendance Reports', icon: <FaCalendar size={20} />, path: '/attendance-reports' },
]


const ASide = () => {
  const [open, setOpen] = useState(window.innerWidth >= 768);
  return (
    <aside className={`flex flex-col bg-[#006b3f] h-screen transition-all duration-300 overflow-y-auto custom-scrollbar ${open ? 'w-70' : 'w-15'}`}>
      <div className="flex justify-between p-5 w-full border-b border-gray-500 text-white items-center">
          { open && <FaUserGraduate  className="md:size-8"/> } 
          <button onClick={() => setOpen(!open)}  aria-label='close sidebar' className='p-2 cursor-pointer hover:bg-amber-50/20 flex justify-center items-center h-fit rounded-lg w-fit'>
            <MdArrowBackIos className={`transition-all duration-300  ${open ? 'rotate-0' : 'rotate-180'}`}/>
          </button>
      </div>
      <div className="flex flex-col">
        {/* <div className="flex flex-col py-2">
            {open && <p className='text-sm text-[#ffffffb3] font-medium py-1 pl-5'>DASHBOARD</p>}
          <NavLink to='/' className={({isActive}) => `flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20  transition-all duration-100 relative group ${isActive ? 'bg-amber-50/30 border-l-4 border-amber-300' : ''}`}>
            <FaTachographDigital size={20} />
            {open && <span className='text-sm font-medium'>Dashboard</span>}
            {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100 z-100'>Dashboard</span>}
          </NavLink>
        </div> */}
        <SidebarComponent title='DASHBOARD' academics={dashboard} open={open} />
        {/* <div className="flex flex-col py-2 cursor-default">
            {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>ACADEMICS</p>}
            { academics.map((item, index) => (
              <NavLink key={index} to={item.path} className={({isActive}) => `flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20  transition-all duration-100 relative group ${isActive ? 'bg-amber-50/30 border-l-4 border-amber-300' : ''}`}>
                {item.icon}
                {open && <span className='text-sm font-medium'>{item.label}</span>}
                {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100'>{item.label}</span>}
            </NavLink>
            ))
          }
        </div> */}
        <SidebarComponent title='ACADEMICS' academics={academics} open={open} />
        {/* <div className="flex flex-col py-2">
            {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>FEES & ACCOUNTS</p>}
            { feesAccounts.map((item, index) => (
              <NavLink key={index} to={item.path} className={({isActive}) => `flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20  transition-all duration-100 relative group ${isActive ? 'bg-amber-50/30 border-l-4 border-amber-300' : ''}`}>
                {item.icon}
               {open && <span className='text-sm font-medium'>{item.label}</span>}
               {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100'>{item.label}</span>}
            </NavLink>
            ))
          }
        </div> */}
        <SidebarComponent title='FEES & ACCOUNTS' academics={feesAccounts} open={open} />
        {/* <div className="flex flex-col py-2">
            {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>STAFF MANAGEMENT</p>}
            { staffManagements.map((item, index) => (
              <NavLink key={index} to={item.path} className={({isActive}) => `flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20  transition-all duration-100 group relative ${isActive ? 'bg-amber-50/30 border-l-4 border-amber-300' : ''}`}>
                {item.icon}
               {open && <span className='text-sm font-medium'>{item.label}</span>}
               {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100'>{item.label}</span>}
            </NavLink>
            ))
          }
        </div> */}
        <SidebarComponent title='STAFF MANAGEMENTS' academics={staffManagements} open={open} />
        {/* <div className="flex flex-col py-2 mb-8">
            {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>STUDENT MANAGEMENT</p>}
            { studentManagement.map((item, index) => (
              <NavLink key={index} to={item.path} className={({isActive}) =>`flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20  transition-all duration-100 relative group ${isActive ? 'bg-amber-50/30 border-l-4 border-amber-300' : ''}`}>
                {item.icon}
               {open && <span className='text-sm font-medium'>{item.label}</span>}
               {!open && <span className='pointer-events-none absolute left-full ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100'>{item.label}</span>}
            </NavLink>
            ))
          }
        </div> */}
        <SidebarComponent title='STUDNT MANAGEMENTS' academics={studentManagement} open={open} />
      </div>
      <div className="py-15"></div>
    </aside>
  )
}

export default ASidehjkl;
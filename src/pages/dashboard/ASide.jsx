import { useEffect, useState } from 'react';
import { FaUserGraduate } from 'react-icons/fa6';
import { MdArrowBackIos } from 'react-icons/md';
import SidebarComponent from '../../components/SidebarComponent';
import { dashboard } from '../../Data/sideBar';
import { academics } from '../../Data/sideBar';
import { feesAccounts } from '../../Data/sideBar';
import { staffManagements } from '../../Data/sideBar';
import { studentManagement } from '../../Data/sideBar';


const ASide = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(window.innerWidth >= 768);
  }, []);

  
  return (
    <aside className={`hidden lg:flex lg:flex-col lg:pb-4 lg:bg-linear-to-b lg:from-emerald-900 lg:via-emerald-800 lg:to-emerald-950 lg:shadow-xl lg:border-r lg:border-white/10 transition-all duration-300 lg:h-full overflow-y-auto custom-scrollbar ${open ? 'w-70' : 'w-22'}`}>
      <div className="flex justify-between p-4 border-b border-white/10 items-center">
          { open && <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-white/10">
              <FaUserGraduate className="size-6 text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide">Darajo</span>
          </div>} 
          <button onClick={() => setOpen(!open)} aria-expanded={open} className="p-2 rounded-xl hover:bg-white/15 transition-all"
          >
            <MdArrowBackIos className={`text-white transition-transform duration-300 ${ open ? "rotate-0" : "rotate-180" }`} />
          </button>
      </div>
      <div className="flex flex-col">
        <SidebarComponent title='DASHBOARD' items={dashboard} open={open} />
        <SidebarComponent title='ACADEMICS' items={academics} open={open} />
        <SidebarComponent title='FEES & ACCOUNTS' items={feesAccounts} open={open} />
        <SidebarComponent title='STAFF MANAGEMENT' items={staffManagements} open={open} />
        <SidebarComponent title='STUDNT MANAGEMENT' items={studentManagement} open={open} />
      </div>
    </aside>
  )
}

export default ASide;
import { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaCalendar, FaCalendarCheck, FaCalendarPlus, FaChalkboardUser, FaClock, FaEnvelope, FaGraduationCap, FaMoneyBill, FaSchool, FaUserGraduate, FaUserPlus } from 'react-icons/fa6';
import { MdArrowBackIos, MdMenu } from 'react-icons/md';
import CardComponent from '../../components/CardComponent';
import SidebarComponent from '../../components/SidebarComponent';
import recentActivities from '../../Data/recentActivities';
import { academics, dashboard, feesAccounts, staffManagements, studentManagement } from '../../Data/sideBar';
import { IoClose } from 'react-icons/io5';
const Dashboard = () => {

  const schoolData = [
    { title: 'TOTAL STUDENTS', inNumber: '1,246', upRise: '+12 this month', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaGraduationCap className='text-white' size={20}/>, colorr: '#006b3f', colors: '#006b3f' },
    { title: 'TOTAL TEACHERS', inNumber: '89', upRise: '+3 this month', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaChalkboardUser className='text-white' size={20}/>, colorr: '#006b3f', colors: '#006b3f' },
    { title: 'PENDING FEES', inNumber: '$2,456', upRise: '-5 this month', upRiseIcon: <FaArrowDown className='text-[#ce1126]'/>, icon: <FaClock className='text-white' size={20}/>, colorr: '#ce1126', colors: '#ce1126' },
    { title: 'ACTIVE CLASSES', inNumber: '32', upRise: '+2 this term', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaSchool className='text-white' size={20}/>, colorr: '#10b981', colors: '#10b981' },
    { title: 'TODAY ATTENDANCE', inNumber: '89%', upRise: '+2 vs yesterday', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaCalendarCheck className='text-white' size={20}/>, colorr: '#10b981', colors: '#10b981' },
    { title: 'UNREAD MESSAGES', inNumber: '32', upRise: '+3 new today', upRiseIcon: <FaArrowUp className='text-[#fcd116]'/>, icon: <FaEnvelope className='text-white' size={20}/>, colorr: '#fcd116', colors: '#fcd116' },
    { title: 'UPCOMING EVENTS', inNumber: '3', upRise: 'Next: Sports Day', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaCalendar className='text-white' size={20}/>, colorr: '#006b3f', colors: '#006b3f' },
    { title: 'RECENT ADMISSIONS', inNumber: '10', upRise: '+10 this month', upRiseIcon: <FaArrowUp className='text-[#10b981]'/>, icon: <FaCalendar className='text-white' size={20}/>, colorr: '#006b3f', colors: '#006b3f' },
]


  const [close, setClose] = useState(false);
  return (
        // Main Admin Dashboard
    <div className='bg-[#f5f7fa] p-8 transition-all duration-300 ease-in-out'>
      {close && <div className="fixed z-1000 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] ">
        <aside className={`lg:hidden flex flex-col pb-4 bg-linear-to-b from-emerald-900 via-emerald-800 to-emerald-950 shadow-xl border-r border-white/10 transition-all duration-300 h-screen overflow-y-auto custom-scrollbar ${open ? 'w-70' : 'w-22'}`}>
          <div className="flex justify-between p-4 border-b border-white/10 items-center">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-white/10">
                  <FaUserGraduate className="size-6 text-white" />
                </div>
                <span className="text-white font-semibold tracking-wide">Darajo</span>
              </div>
              <IoClose size={24} className='text-white hover:bg-[#ce1126] cursor-pointer' onClick={() => setClose(false)}/>
          </div>
          <div className="flex flex-col">
            <SidebarComponent title='DASHBOARD' items={dashboard} open={open} />
            <SidebarComponent title='ACADEMICS' items={academics} open={open} />
            <SidebarComponent title='FEES & ACCOUNTS' items={feesAccounts} open={open} />
            <SidebarComponent title='STAFF MANAGEMENT' items={staffManagements} open={open} />
            <SidebarComponent title='STUDNT MANAGEMENT' items={studentManagement} open={open} />
          </div>
        </aside>
      </div>}

          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col">
              <h1 className='text-3xl text-[#333] font-bold'>Welcome back, Admin!</h1>
              <p className='text-[#666] text-md'>Here's what's happening at our school today</p>
            </div>
            <MdMenu size={32} className='lg:hidden md:hidden'  onClick={() => setClose(true)}/>
          </div>

          {/* cards */}
          <CardComponent schoolData={schoolData} />

        {/* chart and graphs */}
          <div className="lg:grid lg:grid-cols-[2fr_1fr] lg:gap-6 lg:mb-8 md:grid md:grid-cols-[1fr_1fr] md:gap-6 md:mb-8 grid grid-cols-[1fr] gap-4 mb-8">
            <div className="rounded-lg bg-white shadow-[0_5px_15px_rgba(0,0,0,0.2)] p-6">
              <h1 className='text-[#333] font-bold mb-4 '>Attendance Trend</h1>
              <div className="h-90 rounded-md flex justify-center items-center bg-linear-30 from-[#f5f7fa] to-[#e1e5e9] text-[#666] text-2xl">
                <p>Interactive Chart: Student Attendance by class</p>
              </div>
            </div>
            <div className="bg-white p-6 shadow-[0_5px_15px_rgba(0,0,0,0.2)] rounded-md">
              <h1 className='text-[#333] font-bold mb-4'>Fees Collection</h1>
              <div className="h-90 rounded-md p-4 flex justify-center items-center bg-linear-30 from-[#f5f7fa] to-[#e1e5e9] text-[#666] text-2xl">
                <p>Interactive Chart: Monthly Fee Collection</p>
              </div>
            </div>
          </div>

          {/* quicks action to do */}
          <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.2)] p-6 mb-8">
            <h1 className='text-2xl mb-6 text-[#333] font-bold'>Quick Actions</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaUserPlus />
                  <span className='cursor-default'>Add Student</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaChalkboardUser />
                  <span className='cursor-default'>Add Teacher</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaCalendarCheck />
                  <span className='cursor-default'>Create Exam</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaEnvelope />
                  <span className='cursor-default'>Send Message</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaMoneyBill />
                  <span className='cursor-default'>Record Payment</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaCalendarPlus />
                  <span className='cursor-default'>Schedule Event</span>
                </div>
            </div>
          </div>

          {/* recents activits */}
          <div className="bg-white rounded-md py-6 shadow-[0_5px_15px_rgba(0,0,0,0.2)] w-full">
            <h1 className='text-2xl mb-6 px-6 text-[#333] font-bold'>Recent  Activities</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(1fr))] gap-4 mb-8">
              { recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 px-6 py-3 border-b border-gray-200 hover:bg-[#00000007] transition-all duration-200">
                <div className={`bg-[${activity.iconColor}] p-3 rounded-full`}>
                  {<activity.icon className='text-white' size={20}/>}
                </div>
                <div className="flex flex-col">
                  <h1 className='text-[#333] font-semibold mb-2'>{activity.activityName}</h1>
                  <span className='text-[#666]'>{activity.timeEslap}</span>
                </div>
              </div> )) }
            </div>
          </div>
    </div>
  )
}

export default Dashboard
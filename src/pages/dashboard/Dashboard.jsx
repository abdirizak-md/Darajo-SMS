import { FaArrowDown, FaArrowUp, FaCalendar, FaCalendarCheck, FaCalendarPlus, FaChalkboardUser, FaClock, FaEnvelope, FaGraduationCap, FaMoneyBill, FaSchool, FaUserPlus } from 'react-icons/fa6';
import CardComponent from '../../components/CardComponent';
import recentActivities from '../../Data/recentActivities';
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

  return (
        // Main Admin Dashboard
    <div className='bg-[#f5f7fa] p-8 transition-all duration-300 ease-in-out h-screen overflow-y-auto custom-scrollbar'>
          <div className="flex flex-col mb-8">
            <h1 className='text-3xl text-[#333] font-bold'>Welcome back, Admin!</h1>
            <p className='text-[#666] text-md'>Here's what's happening at our school today</p>
          </div>

          {/* cards */}
          <CardComponent schoolData={schoolData} />

        {/* chart and graphs */}
          <div className="grid grid-cols-[2fr_1fr] gap-6 mb-8">
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

            {/* <div className="flex items-center gap-4 px-6 py-3 border-b border-gray-200 hover:bg-[#00000007] transition-all duration-200">
              <div className="bg-[#ce1126] p-3 rounded-full">
                <FaMoneyBill className='text-white' size={20}/>
              </div>
              <div className="flex flex-col">
                <h1 className='text-[#333] font-semibold mb-2'>Fee Payment Received: $500</h1>
                <span className='text-[#666]'>15 minutes ago</span>
              </div>
            </div>

            <div className="flex items-center gap-4 px-6 py-3 border-b border-gray-200 hover:bg-[#00000007] transition-all duration-200">
              <div className="bg-[#fcd116] p-3 rounded-full">
                <FaMoneyBill className='text-white' size={20}/>
              </div>
              <div className="flex flex-col">
                <h1 className='text-[#333] font-semibold mb-2'>Exam Result Published: English</h1>
                <span className='text-[#666]'>1 hour ago</span>
              </div>
            </div> */}
          </div>

          <div className="py-15"></div>
    </div>
  )
}

export default Dashboard
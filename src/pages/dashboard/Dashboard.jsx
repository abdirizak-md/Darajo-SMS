import { FaArrowUp, FaCalendar, FaCalendarCheck, FaCalendarPlus, FaChalkboardUser, FaClock, FaEnvelope, FaGraduationCap, FaMoneyBill, FaSchool, FaUserPlus } from 'react-icons/fa6';
const Dashboard = () => {
  return (
        // Main Admin Dashboard
        <div className='w-full bg-[#f5f7fa] p-8 transition-all duration-300 ease-in-out'>
          <div className="flex flex-col mb-8">
            <h1 className='text-3xl text-[#333] font-bold'>Welcome back, Admin!</h1>
            <p className='text-[#666] text-md'>Here's What happening at our school today</p>
          </div>

          {/* cards */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mb-8">
            <div className="bg-white rounded-lg  border-l-4 border-[#006b3f] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-[#666]'>TOTAL STUDENTS</h1>
                <div className="bg-[#006b3f] p-3 rounded-lg">
                  <FaGraduationCap className='text-white' size={20}/>
                </div>
              </div>
              <div className="text-[2rem] font-bold mb-2">1,256</div>
              <div className="flex items-center gap-1 text-sm">
                <FaArrowUp className='text-[#006b3f]' />
                <span className='text-sm text-[#006b3f]'>+12 this month</span>
              </div>
            </div>

            <div className="bg-white rounded-lg  border-l-4 border-[#006b3f] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-[#666]'>TOTAL TEACHERS</h1>
                <div className="bg-[#006b3f] p-3 rounded-lg">
                  <FaChalkboardUser className='text-white' size={20}/>
                </div>
              </div>
              <div className="text-[2rem] font-bold mb-2">86</div>
              <div className="flex items-center gap-1 text-sm">
                <FaArrowUp className='text-[#006b3f]' />
                <span className='text-sm text-[#006b3f]'>+4 this month</span>
              </div>
            </div>

            <div className="bg-white rounded-lg  border-l-4 border-[#ce1126] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-[#666]'>PENDING FEES</h1>
                <div className="bg-[#ce1126] p-3 rounded-lg">
                  <FaClock className='text-white' size={20}/>
                </div>
              </div>
              <div className="text-[2rem] font-bold mb-2">13,256Birr</div>
              <div className="flex items-center gap-1 text-sm">
                <FaArrowUp className='text-[#ce1126]' />
                <span className='text-sm text-[#ce1126]'>-5% this week</span>
              </div>
            </div>

            <div className="bg-white rounded-lg  border-l-4 border-[#10b981] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-[#666]'>ACTIVE CLASSES</h1>
                <div className="bg-[#10b981] p-3 rounded-lg">
                  <FaSchool className='text-white' size={20}/>
                </div>
              </div>
              <div className="text-[2rem] font-bold mb-2">32</div>
              <div className="flex items-center gap-1 text-sm">
                <FaArrowUp className='text-[#10b981]' />
                <span className='text-sm text-[#10b981]'>+2 this term</span>
              </div>
            </div>

            <div className="bg-white rounded-lg  border-l-4 border-[#10b981] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-[#666]'>ATTENDANCE TODAY</h1>
                <div className="bg-[#10b981] p-3 rounded-lg">
                  <FaCalendarCheck className='text-white' size={20}/>
                </div>
              </div>
              <div className="text-[2rem] font-bold mb-2">89%</div>
              <div className="flex items-center gap-1 text-sm">
                <FaArrowUp className='text-[#10b981]' />
                <span className='text-sm text-[#10b981]'>+2 vs yesterday</span>
              </div>
            </div>

            <div className="bg-white rounded-lg  border-l-4 border-[#fcd116] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-[#666]'>UNREAD MESSAGES</h1>
                <div className="bg-[#fcd116] p-3 rounded-lg">
                  <FaEnvelope className='text-white' size={20}/>
                </div>
              </div>
              <div className="text-[2rem] font-bold mb-2">32</div>
              <div className="flex items-center gap-1 text-sm">
                <FaArrowUp className='text-[#fcd116]' />
                <span className='text-sm text-[#fcd116]'>+3 new today</span>
              </div>
            </div>

            <div className="bg-white rounded-lg  border-l-4 border-[#006b3f] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-[#666]'>UPCOMMING EVENTS</h1>
                <div className="bg-[#006b3f] p-3 rounded-lg">
                  <FaCalendar className='text-white' size={20}/>
                </div>
              </div>
              <div className="text-[2rem] font-bold mb-2">3 </div>
              <div className="flex items-center gap-1 text-sm">
                <FaArrowUp className='text-[#006b3f]' />
                <span className='text-sm text-[#006b3f]'>Next: Sports Day</span>
              </div>
            </div>

            <div className="bg-white rounded-lg border-l-4 border-[#006b3f] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h1 className='text-[#666]'>RECENT ADMISSIONS</h1>
                <div className="bg-[#006b3f] p-3 rounded-lg">
                  <FaUserPlus className='text-white' size={20}/>
                </div>
              </div>
              <div className="text-[2rem] font-bold mb-2">10</div>
              <div className="flex items-center gap-1 text-sm">
                <FaArrowUp className='text-[#006b3f]' />
                <span className='text-sm text-[#006b3f]'>+12 this month</span>
              </div>
            </div>

          </div>

        {/* chart and graphs */}
          <div className="grid grid-cols-[2fr_1fr] gap-6 mb-8">
            <div className="rounded-lg bg-white shadow p-6">
              <h1 className='text-[#333] font-bold mb-4 '>Attendance Trend</h1>
              <div className="h-90 rounded-md flex justify-center items-center bg-linear-30 from-[#f5f7fa] to-[#e1e5e9] text-[#666] text-2xl">
                <p>Interactive Chart: Student Attendance by class</p>
              </div>
            </div>
            <div className="bg-white p-6 shadow rounded-md">
              <h1 className='text-[#333] font-bold mb-4'>Fees Collection</h1>
              <div className="h-90 rounded-md p-4 flex justify-center items-center bg-linear-30 from-[#f5f7fa] to-[#e1e5e9] text-[#666] text-2xl">
                <p>Interactive Chart: M onthly Fee Collection</p>
              </div>
            </div>
          </div>

          {/* quicks action to do */}
          <div className="flex flex-col items-start mb-6 bg-white shadow p-5">
            <h1 className='text-2xl mb-6 text-[#333] font-bold'>Quick Actions</h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaUserPlus />
                  <span>Add Student</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaChalkboardUser />
                  <span>Add Teacher</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaCalendarCheck />
                  <span>Create Exam</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaEnvelope />
                  <span>Send Message</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaMoneyBill />
                  <span>Record Payment</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-3 bg-[#e1e5e9] hover:bg-[#006b3f] hover:text-white rounded-md transition-all duration-200">
                  <FaCalendarPlus />
                  <span>Schedule Event</span>
                </div>
            </div>
          </div>

          {/* recents activits */}
          <div className="bg-white rounded-md p-6 shadow w-full">
            <h1 className='text-2xl mb-6 text-[#333] font-bold'>Recent  Activities</h1>
            <div className="flex items-center gap-4 mb-6 px-4 pb-2 border-b border-gray-200">
              <div className="bg-[#006b3f] p-3 rounded-full">
                <FaUserPlus className='text-white' size={20}/>
              </div>
              <div className="flex flex-col">
                <h1 className='text-[#333] font-semibold mb-2'>New Student Admitted: Rizeh Moha</h1>
                <span className='text-[#666]'>5 minutes ago</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6 px-4 pb-2 border-b border-gray-200">
              <div className="bg-[#ce1126] p-3 rounded-full">
                <FaMoneyBill className='text-white' size={20}/>
              </div>
              <div className="flex flex-col">
                <h1 className='text-[#333] font-semibold mb-2'>Fee Payment Receieved: 500BIRR</h1>
                <span className='text-[#666]'>15 minutes ago</span>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="bg-[#fcd116] p-3 rounded-full">
                <FaMoneyBill className='text-white' size={20}/>
              </div>
              <div className="flex flex-col">
                <h1 className='text-[#333] font-semibold mb-2'>Exam Result Published: English</h1>
                <span className='text-[#666]'>1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Dashboard
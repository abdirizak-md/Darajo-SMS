import { FaArrowUp, FaGraduationCap, FaPlus } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { MdArrowBackIos } from 'react-icons/md'

const ClassesSections = () => {
  return (
    <div className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <div className="flex justify-center w-fit items-center px-5 py-1 rounded-md bg-[#006b3f] mb-8">
            <MdArrowBackIos  className='text-white' size={24}/>.
            <span className='text-white font-medium'>Back to Dashboard</span>
        </div>

        <div className="bg-white rounded-md p-8 shadow mb-8">
            <h1 className='text-[#006b3f] text-4xl font-bold mb-4'>🏠 Classes & Sections</h1>
            <span className='text-[#666]'>Manage Academic Classes, Sections and Student Groups</span>
        </div>

        <div className="grid grid-cols-4 gap-5 mb-8">
            <div className="flex flex-col items-center justify-center p-5 rounded-lg shadow">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>25</h1>
                <span className='text-[#666]'>Total Classes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 rounded-lg shadow">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>25</h1>
                <span className='text-[#666]'>Total Classes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 rounded-lg shadow">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>25</h1>
                <span className='text-[#666]'>Total Classes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 rounded-lg shadow">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>25</h1>
                <span className='text-[#666]'>Total Classes</span>
            </div>
        </div>

        <div className="flex gap-5 mb-8">
            <button className='px-8 py-3 text-white bg-[#006b3f] rounded-lg'>All Classes</button>
            <button className='px-8 py-3 border border-[#e1e5e9] bg-white rounded-lg'>Sections</button>
            <button className='px-8 py-3 border border-[#e1e5e9] bg-white rounded-lg'>Schedules</button>
        </div>

        {/* all classes */}
        <div className="bg-white p-6 mb-8 shadow rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Class Management</span>
                <button className='px-5 py-2 text-white bg-[#006b3f] rounded-lg flex items-center gap-2'><FaPlus />All Classes</button>
            </div>
            
            <div className="flex justify-center items-center gap-5 mb-8">
                <div className="border border-[#666] rounded-lg w-100 h-10 max-w-150 max-h-15 relative">
                    <input type="text" name="search" id="search" placeholder="Search students, teachers, fees, and exam..." className="w-full h-full px-3 outline-none" />
                </div>
                <div className="flex justify-center items-center w-full relative">
                    <div className="border border-[#666] rounded-lg w-100 h-10 max-w-150 max-h-15">
                        <input type="text" name="search" id="search" placeholder="Search students, teachers, fees, and exam..." className="w-full h-full px-3 outline-none" />
                    </div>
                    <MdArrowBackIos className='rotate-270 absolute right-20 top-1' size={24}/>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex items-center justify-center rounded-lg w-30 h-10 border border-[#666] bg-white/80">
                        <IoSearch size={24}/>
                        <span>Search</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
                <div className="bg-white rounded-lg border-l-4 border-r-4 border-[#006b3f] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>Class 10A</h1>
                    <div className="bg-[#006b3f] p-3 rounded-lg">
                        <FaGraduationCap className='text-white' size={20}/>
                    </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Students</span>
                            <span className='font-bold'>38</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Class Teacher</span>
                            <span className='font-bold'>Mr. Mohamed Warsame</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Room</span>
                            <span className='font-bold'>002</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Schedule</span>
                            <span className='font-bold'>Mon-Fri 8:00 AM</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-1 text-sm mt-8">
                        <button className='px-5 py-2 border border-[#e1e5e9] bg-[#f8f9fa] text-[#666] rounded-lg'>View Details</button>
                        <button className='px-5 py-2 border border-[#fcd116] bg-[#fcd116]  rounded-lg'>Edit</button>
                        <button className='px-5 py-2 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg'>Delete</button>
                    </div>
                </div>
                <div className="bg-white rounded-lg border-l-4 border-r-4 border-[#006b3f] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>Class 10B</h1>
                    <div className="bg-[#006b3f] p-3 rounded-lg">
                        <FaGraduationCap className='text-white' size={20}/>
                    </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Students</span>
                            <span className='font-bold'>38</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Class Teacher</span>
                            <span className='font-bold'>Mss. Hodan Adan</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Room</span>
                            <span className='font-bold'>004</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Schedule</span>
                            <span className='font-bold'>Mon-Fri 8:00 AM</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-1 text-sm mt-8">
                        <button className='px-5 py-2 border border-[#e1e5e9] bg-[#f8f9fa] text-[#666] rounded-lg'>View Details</button>
                        <button className='px-5 py-2 border border-[#fcd116] bg-[#fcd116]  rounded-lg'>Edit</button>
                        <button className='px-5 py-2 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg'>Delete</button>
                    </div>
                </div>
                <div className="bg-white rounded-lg border-l-4 border-r-4 border-[#006b3f] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>Class 12A</h1>
                    <div className="bg-[#006b3f] p-3 rounded-lg">
                        <FaGraduationCap className='text-white' size={20}/>
                    </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Students</span>
                            <span className='font-bold'>32</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Class Teacher</span>
                            <span className='font-bold'>Mr. Ali Kaydsane</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Room</span>
                            <span className='font-bold'>008</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Schedule</span>
                            <span className='font-bold'>Mon-Fri 8:00 AM</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-1 text-sm mt-8">
                        <button className='px-5 py-2 border border-[#e1e5e9] bg-[#f8f9fa] text-[#666] rounded-lg'>View Details</button>
                        <button className='px-5 py-2 border border-[#fcd116] bg-[#fcd116]  rounded-lg'>Edit</button>
                        <button className='px-5 py-2 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg'>Delete</button>
                    </div>
                </div>
                <div className="bg-white rounded-lg border-l-4 border-r-4 border-[#006b3f] p-6 shadow-2xs cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>Class 12B</h1>
                    <div className="bg-[#006b3f] p-3 rounded-lg">
                        <FaGraduationCap className='text-white' size={20}/>
                    </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Students</span>
                            <span className='font-bold'>40</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Class Teacher</span>
                            <span className='font-bold'>Mr. Ahmed Abdulahi</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Room</span>
                            <span className='font-bold'>010</span>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[#666]'>Schedule</span>
                            <span className='font-bold'>Mon-Fri 8:00 AM</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-1 text-sm mt-8">
                        <button className='px-5 py-2 border border-[#e1e5e9] bg-[#f8f9fa] text-[#666] rounded-lg'>View Details</button>
                        <button className='px-5 py-2 border border-[#fcd116] bg-[#fcd116]  rounded-lg'>Edit</button>
                        <button className='px-5 py-2 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClassesSections
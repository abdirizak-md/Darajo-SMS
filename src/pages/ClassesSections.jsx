import { useState } from 'react'
import { FaCalendarWeek, FaPlus } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { MdArrowBackIos } from 'react-icons/md'

const ClassesSections = () => {
    const [active, setActive] = useState('classes')
  return (
    <div className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <div className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </div>

        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] text-3xl font-bold mb-4'>🏠 Classes & Sections</h1>
            <span className='text-[#666]'>Manage Academic Classes, Sections and Student Groups</span>
        </div>

        <div className="grid grid-cols-4 gap-5 mb-8">
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>25</h1>
                <span className='text-[#666]'>Total Classes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>25</h1>
                <span className='text-[#666]'>Total Classes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>25</h1>
                <span className='text-[#666]'>Total Classes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>25</h1>
                <span className='text-[#666]'>Total Classes</span>
            </div>
        </div>

        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('classes')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'classes' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>All Classes</button>
            <button onClick={() => setActive('sections')} className={`px-8 py-3 border border-[#e1e5e9] rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'sections' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Sections</button>
            <button onClick={() => setActive('schedules')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'schedules' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Schedules</button>
         </div>

        {/* all classes, Sections and Schedules */}
        { active === 'classes' &&
            <div className="bg-white p-6 mb-8 shadow rounded-md">
            <div className="flex justify-between items-center mb-8">
                <span className='text-[#333] text-2xl font-bold'>Class Management</span>
                <button className='px-5 py-2 text-white bg-[#006b3f] rounded-md flex items-center gap-2'><FaPlus />Add Class</button>
            </div>
            
            <div className="flex justify-center items-center gap-5 mb-8">
                <div className="border border-[#666] rounded-md w-100 h-10 max-w-150 max-h-15 relative">
                    <input type="text" name="search" id="search" placeholder="Search students, teachers, fees, and exam..." className="w-full h-full px-3 outline-none" />
                </div>
                <div className="flex justify-center items-center w-full relative">
                    <div className="border border-[#666] rounded-md w-100 h-10 max-w-150 max-h-15">
                        <input type="text" name="search" id="search" placeholder="Search students, teachers, fees, and exam..." className="w-full h-full px-3 outline-none" />
                    </div>
                    <MdArrowBackIos className='rotate-270 absolute right-20 top-1' size={24}/>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex items-center justify-center rounded-md w-30 h-10 border border-[#666] bg-white/80">
                        <IoSearch size={24}/>
                        <span>Search</span>
                    </div>
                </div>
            </div>

            {/* All Classes */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">

                <div className="bg-white rounded-lg border-l-4 border-[#006b3f] p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_25px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className='text-[#006b3f] text-2xl font-bold mb-1'>Class 12A</h1>
                    <div className='py-1 px-2.5 rounded-lg text-sm text-[#006b3f] font-medium bg-[#d1fae5]'>Active</div>
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

                <div className="bg-white rounded-lg border-l-4 border-[#006b3f] p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_25px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className='text-[#006b3f] text-2xl font-bold mb-1'>Class 12A</h1>
                    <div className='py-1 px-2.5 rounded-lg text-sm text-[#006b3f] font-medium bg-[#d1fae5]'>Active</div>
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

                <div className="bg-white rounded-lg border-l-4 border-[#006b3f] p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_25px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className='text-[#006b3f] text-2xl font-bold mb-1'>Class 12B</h1>
                    <div className='py-1 px-2.5 rounded-lg text-sm text-[#006b3f] font-medium bg-[#d1fae5]'>Active</div>
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

                <div className="bg-white rounded-lg border-l-4 border-[#006b3f] p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_25px_rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className='text-[#006b3f] text-2xl font-bold mb-1'>Class 12B</h1>
                    <div className='py-1 px-2.5 rounded-lg text-sm text-[#006b3f] font-medium bg-[#d1fae5]'>Active</div>
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
        </div>}
       
        {/* Subjects */}
        { active === 'sections' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Manage Subjects</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Add Subjects</button>
            </div>
            
            <div className="flex gap-5 mb-8">
                <div className="border flex-6 border-[#666] rounded-md w-full h-10">
                    <input type="text" name="search" id="search" placeholder="Search students, teachers, fees, and exam..." className="w-full h-full px-3 outline-none" />
                </div>
                <div className=" flex flex-1 items-center px-5 justify-center rounded-md w-fit h-10 border border-[#666] gap-2 bg-white/80">
                    <IoSearch size={18}/>
                    <span className='text-[#333] cursor-default'>Search</span>
                </div>
            </div>

            <table className='w-full border-collapse mt-4'>
                <thead>
                    <tr>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Section name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Students</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class Teacher</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Room</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>mathematics</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Section A</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 8 1-6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Mr. Mohamed Warsame</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Room 101</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#d1fae5]'>Active</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>mathematics</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Section A</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 8 1-6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Mr. Mohamed Warsame</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Room 101</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#d1fae5]'>Active</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>mathematics</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Section A</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 8 1-6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Mr. Mohamed Warsame</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Room 101</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#d1fae5]'>Active</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>} 
       
        {/* Schedules */}
        { active === 'schedules' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Manage Subjects</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Add Subjects</button>
            </div>
            
            <div className="flex gap-5 mb-8">
                <div className="border flex-6 border-[#666] rounded-md w-full h-10">
                    <input type="text" name="search" id="search" placeholder="Search students, teachers, fees, and exam..." className="w-full h-full px-3 outline-none" />
                </div>
                <div className=" flex flex-1 items-center px-5 justify-center rounded-md w-fit h-10 border border-[#666] gap-2 bg-white/80">
                    <IoSearch size={18}/>
                    <span className='text-[#333] cursor-default'>Search</span>
                </div>
            </div>
            
            <div className="text-center rounded-md bg-[#f8f9fa] p-8 text-[#666]">
                <div className="flex flex-col justify-center items-center gap-1">
                    <FaCalendarWeek size={32}/>
                    <h1 className='font-bold text-2xl'>Class Schedules</h1>
                    <p>Select a class to view it's schedule</p>
                </div>
            </div>
        </div>} 
    </div>
  )
}

export default ClassesSections
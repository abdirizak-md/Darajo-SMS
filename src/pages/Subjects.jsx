import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { MdArrowBackIos } from 'react-icons/md'

const Subjects = () => {
    const [active, setActive] = useState('subjects');
  return (
    <div className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <div className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </div>
    
        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] text-4xl font-bold mb-4'>🏠 Subjects & Assignment</h1>
            <span className='text-[#666]'>Manage Academic Classes, Sections and Track Student Progress</span>
        </div>
    
        <div className="grid grid-cols-4 gap-5 mb-8">
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>12</h1>
                <span className='text-[#666]'>Total Subjects</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>32</h1>
                <span className='text-[#666]'>Active Assignments</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>89%</h1>
                <span className='text-[#666]'>Submission Rate</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>135</h1>
                <span className='text-[#666]'>Pending Reviews</span>
            </div>
        </div>
    
        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('subjects')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'subjects' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Subjects</button>
            <button onClick={() => setActive('assignments')} className={`px-8 py-3 border border-[#e1e5e9] rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'assignments' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Assignments</button>
            <button onClick={() => setActive('grades')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'grades' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Grades</button>
        </div>
    
        {/* Subjects */}
        { active == 'subjects' &&
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
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Subject name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Code</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class Level</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Teacher</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Action</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>mathematics</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>MATHO1O1</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 1-6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Mr. Mohamed Warsame</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#d1fae5]'>Active</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>English</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>ENG0101</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 1-6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Mr. Ahmed Warsame</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#d1fae5]'>Active</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Somali</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>SOM0101</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 1-6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Mr. Hodan Ahmed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#d1fae5]'>Active</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>}

        {/* Assignments */}
        { active === 'assignments' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Manage Assignments</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Create Assignments</button>
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
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Assignment Title</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Subject</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Due Date</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Submissions</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Action</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Algebra Practice Problem</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>mathematics</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-03-16</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium text-[#065f46] bg-['>Active</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>28/30</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Algebra Practice Problem</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>mathematics</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-03-16</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#dbeafe] text-[#1e40af]'>Completed</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>28/30</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Algebra Practice Problem</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>mathematics</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-03-16</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#fef3c7] text-[#92400e]'>Pending</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>28/30</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>}

        {/* grades */}
        { active === 'grades' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Grade Management</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Import Grades</button>
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
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student Name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Subject</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Assignment</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Grade</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Comments</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adna Mohamed Abdi</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 8</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>English</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Writing Practice</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>79%</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Good Effort!</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Anas Mohamed Ahmed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>mathematics</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Algebra Practice</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>85%</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Excellent Work!</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                        </td>
                    </tr>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Anas Mohamed Ahmed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Classe 6</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>mathematics</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Algebra Practice</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>85%</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Excellent Work!</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>}
        </div>
  )
}

export default Subjects
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearchOutline } from 'react-icons/io5'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import assignments from '../Data/assignments'
import grades from '../Data/grades'
import subjects from '../Data/subjects'

const Subjects = () => {
    const [active, setActive] = useState('subjects');
  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>
    
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
            <button onClick={() => setActive('subjects')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md hover:shadow-md active:scale-95 transition-all duration-200 shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'subjects' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Subjects</button>
            <button onClick={() => setActive('assignments')} className={`px-8 py-3 border border-[#e1e5e9] rounded-md hover:shadow-md active:scale-95 transition-all duration-200 shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'assignments' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Assignments</button>
            <button onClick={() => setActive('grades')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md hover:shadow-md active:scale-95 transition-all duration-200 shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'grades' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Grades</button>
        </div>
    
        {/* Subjects */}
        { active == 'subjects' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Manage Subjects</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Add Subjects</button>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-[3fr_2fr_150px] gap-5 mb-4">
                <div className="mb-4">
                    <input type="text" placeholder="Search students, teachers, fees, and exam..." className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
                </div>

                <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                    <IoSearchOutline size={24}/>
                    <button>Search</button>
                </div>
            </form>

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
                    {   subjects.map((subject, index) => (
                        <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{subject.subjectName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{subject.code}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{subject.classLevel}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{subject.teacher}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-2xl text-sm font-medium text-[#10b981] bg-[#d1fae5]'>{subject.status}</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr> )) }
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
            
            <form className="grid grid-cols-1 md:grid-cols-[3fr_2fr_150px] gap-5 mb-4">
                <div className="mb-4">
                    <input type="text" placeholder="Search students, teachers, fees, and exam..." className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
                </div>

                <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                    <IoSearchOutline size={24}/>
                    <button>Search</button>
                </div>
            </form>

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
                    {   assignments.map((assignment) => (
                        <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{assignment.assignmetTitle}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{assignment.subject}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{assignment.classLevel}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{assignment.dueDate}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${assignment.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${assignment.status === 'Pending' ? 'bg-[#fef3c7] text-[#92400e]' : ''} ${assignment.status === 'Completed' ? 'bg-[#dbeafe] text-[#1e40af]' : ''}`}>{assignment.status}</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{assignment.submissions}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Delete</button>
                        </td>
                    </tr> )) }
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
            
        <form className="grid grid-cols-1 md:grid-cols-[3fr_2fr_150px] gap-5 mb-4">
            <div className="mb-4">
                <input type="text" placeholder='Search Classes...' className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
            </div>

            <div className="mb-4">
                <select name="subject" id="subject" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                    <option value="">All Grades</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                </select>
            </div>

            <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                <IoSearchOutline size={24}/>
                <button>Search</button>
            </div>
        </form>

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
                    {   grades.map((grade) => (
                        <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.studentName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.classLeve}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.subject}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.assignment}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.grade}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.comments}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                        </td>
                    </tr> )) }
                </tbody>
            </table>
        </div>}
    </section>
  )
}

export default Subjects
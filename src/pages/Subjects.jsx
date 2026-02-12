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

    const statusStyles = {
        active: "bg-[#d1fae5] text-[#10b981]",
        pending: "bg-[#fef3c7] text-[#92400e]",
        completed: "bg-[#dbeafe] text-[#1e40af]",
    };

  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>
    
        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] lg:text-4xl text-2xl font-bold mb-4'>🏠 Subjects & Assignment</h1>
            <span className='text-[#666] text-sm'>Manage Academic Classes, Sections and Track Student Progress</span>
        </div>
    
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
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
                <span className='text-[#333] lg:text-2xl font-bold '>Manage Subjects</span>
                <button className='lg:px-5 px-3 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Add Subjects</button>
            </div>
            
            <form className="grid grid-cols-1 lg:grid-cols-[3fr_150px] md:grid-cols-[3fr_2fr_150px] gap-3">
                <div className="">
                    <input type="text" placeholder="Search students, teachers, fees, and exam..." className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
                </div>

                <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out">
                    <IoSearchOutline size={24}/>
                    <button>Search</button>
                </div>
            </form>

            <div className="w-full overflow-x-auto">
                <table className="min-w-200 w-full border-collapse mt-4">
                    <thead>
                        <tr className='bg-[#eff1f3] p-4 text-[#333] font-semibold border-b border-[#e1e5e9] text-left'>
                            <th scope="col" className="p-4">Subject name</th>
                            <th scope="col" className="p-4">Code</th>
                            <th scope="col" className="p-4">Class Level</th>
                            <th scope="col" className="p-4">Teacher</th>
                            <th scope="col" className="p-4">Status</th>
                            <th scope="col" className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-row-group border-inherit'>
                        {subjects.length === 0 && (
                            <tr>
                                <td colSpan="6" className="p-4 text-center text-gray-500">
                                No subjects found.
                                </td>
                            </tr>
                        )}

                        {   subjects.map((subject) => (
                            <tr key={subject.subjectName} className="hover:bg-[#f8f9fa] border-b border-[#e1e5e9] text-left">
                            <td className='p-4'>{subject.subjectName}</td>
                            <td className='p-4'>{subject.code}</td>
                            <td className='p-4'>{subject.classLevel}</td>
                            <td className='p-4'>{subject.teacher}</td>
                            <td className='p-4'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${ statusStyles[subject.status.toLowerCase()]  }`}> {subject.status}</span></td>
                            <td className='p-4'>
                                <div className="flex gap-2">
                                    <button type="button" className="bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">Edit</button>
                                    <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">Delete</button>
                                </div>   
                            </td>
                        </tr> )) }
                    </tbody>
                </table>
            </div>
        </div>}

        {/* Assignments */}
        { active === 'assignments' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] lg:text-2xl font-bold'>Manage Assignments</span>
                <button className='lg:px-5 px-3 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Create Assignments</button>
            </div>
            
            <form className="grid grid-cols-1 lg:grid-cols-[3fr_150px] md:grid-cols-[3fr_2fr_150px] gap-3 ">
                <div className="">
                    <input type="text" placeholder="Search students, teachers, fees, and exam..." className="lg:w-full w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
                </div>

                <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out ">
                    <IoSearchOutline size={24}/>
                    <button>Search</button>
                </div>
            </form>

            <div className="w-full overflow-x-auto">
                <table className="min-w-200 w-full border-collapse mt-4">
                    <thead>
                        <tr className='bg-[#eff1f3] text-[#333] font-semibold border-b border-[#e1e5e9] text-left'>
                            <th scope="col" className="p-4">Assignment Title</th>
                            <th scope="col" className="p-4">Subject</th>
                            <th scope="col" className="p-4">Class</th>
                            <th scope="col" className="p-4">Due Date</th>
                            <th scope="col" className="p-4">Status</th>
                            <th scope="col" className="p-4">Submissions</th>
                            <th scope="col" className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-row-group border-inherit'>
                        {assignments.length === 0 && (
                            <tr>
                                <td colSpan="6" className="p-4 text-center text-gray-500">
                                No assignments found.
                                </td>
                            </tr>
                        )}

                        {   assignments.map((assignment) => (
                            <tr className="hover:bg-[#f8f9fa] border-b border-[#e1e5e9] text-left">
                            <td className='p-4'>{assignment.assignmetTitle}</td>
                            <td className='p-4'>{assignment.subject}</td>
                            <td className='p-4'>{assignment.classLevel}</td>
                            <td className='p-4'>{assignment.dueDate}</td>
                            <td className='p-4'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${ statusStyles[assignment.status.toLowerCase()]  }`}> {assignment.status}</span></td>
                            <td className='p-4'>{assignment.submissions}</td>
                            <td className='p-4'>
                                <div className="flex gap-2">
                                    <button type='button' className='bg-[#10b981] hover:bg-[#0c9c6c] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                                    <button type="button" className="bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">Edit</button>
                                    <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">Delete</button>
                                </div>
                            </td>
                        </tr> )) }
                    </tbody>
                </table>
            </div>
        </div>}

        {/* grades */}
        { active === 'grades' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] lg:text-2xl font-bold'>Grade Management</span>
                <button className='lg:px-5 py-2 px-3 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Import Grades</button>
            </div>
            
        <form className="grid grid-cols-1  lg:grid-cols-[3fr_2fr_150px] md:grid-cols-[3fr_2fr_150px] gap-5 ">
            <div className="">
                <input type="text" placeholder='Search Classes...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
            </div>

            <div className="">
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                    <option value="">All Grades</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                </select>
            </div>

            <div className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out ">
                <IoSearchOutline size={24}/>
                <button>Search</button>
            </div>
        </form>

            <div className="w-full overflow-x-auto">
                <table className="min-w-200 w-full border-collapse mt-4">
                    <thead>
                        <tr>
                            <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student Name</th>
                            <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Class</th>
                            <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Subject</th>
                            <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Assignment</th>
                            <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Grade</th>
                            <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Comments</th>
                            <th scope="col" className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='table-row-group border-inherit'>
                        {grades.length === 0 && (
                            <tr>
                                <td colSpan="6" className="p-4 text-center text-gray-500">
                                No grades found.
                                </td>
                            </tr>
                        )}

                        {   grades.map((grade) => (
                            <tr className="hover:bg-[#f8f9fa]">
                            <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.studentName}</td>
                            <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.classLeve}</td>
                            <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.subject}</td>
                            <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.assignment}</td>
                            <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.grade}</td>
                            <td className='p-4 border-b border-[#e1e5e9] text-left'>{grade.comments}</td>
                            <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                                <div className="flex gap-2">
                                    <button type='button' className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md hover:bg-[#0c9c6c] transition-colors'>View</button>
                                    <button type="button" className="bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">Edit</button>
                                </div>
                            </td>
                        </tr> )) }
                    </tbody>
                </table>
            </div>
        </div>}
    </section>
  )
}

export default Subjects
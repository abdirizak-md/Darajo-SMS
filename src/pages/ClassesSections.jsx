import { useState } from 'react'
import { FaCalendarWeek, FaPlus } from 'react-icons/fa6'
import { IoClose, IoSearchOutline } from 'react-icons/io5'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import allClasses from '../Data/allClasses'
import sectionss from '../Data/sections'

const ClassesSections = () => {
    const [active, setActive] = useState('classes');
    const [sectionn, setSectionn] = useState(false);
    const [allClasse, setAllClasse] = useState(false);

    // add section functionality
    const [sectionName, setSectionName] = useState('');
    const [classs, setClasss] = useState('');
    const [students, setStudents] = useState('');
    const [teacher, setteacher] = useState('');
    const [room, setroom] = useState('');
    const [status, setstatus] = useState('');

    const [updatingIndex, setUpdatinIndex] = useState(null);

    const [sections, setSections] = useState(sectionss);

    // console.log(sections)


    // add to section function handler
    const addASection = () => {
        if (!sectionName.trim() || !classs.trim() || !students.trim() || !teacher.trim() || !room.trim() || !status.trim()) return alert('Please fill the fields!');

        if (updatingIndex !== null) {
            setSections(sections.map((sectioned, i) => (
                i === updatingIndex ? {...sectioned, sectionName, classs, students, teacher, room, status} : sectioned
            )));
            setSectionName('');
            setClasss('');
            setStudents('');
            setteacher('');
            setroom('');
            setstatus('');
        } else {

            let newSection = {
                sectionName,
                classs,
                students,
                teacher,
                room,
                status
            }

            setSections([...sections, newSection]);
            setSectionName('');
            setClasss('');
            setStudents('');
            setteacher('');
            setroom('');
            setstatus('');
        }

        setUpdatinIndex(null);

    }

    const startUpdatingIndex = (index) => {
        const selected = sections[index];

        setSectionName(selected.sectionName);
        setClasss(selected.classs);
        setStudents(selected.students);
        setteacher(selected.teacher);
        setroom(selected.room);
        setstatus(selected.status);

        setUpdatinIndex(index);
        setSectionn(true); // open modal
    };

    // delete section functionality
    const deleteSection = (index) => {
        alert('Are you sure to delete this section!',
            setSections(sections.filter((_, i) => i != index))
        )
    }


    // handle the form 
    const handleSubmit = (e) => {
        e.preventDefault();
        addASection();
        setSectionn(!sectionn);
    }
  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>

        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] text-3xl font-bold mb-4'>🏠 Classes & Sections</h1>
            <span className='text-[#666]'>Manage Academic Classes, Sections and Student Groups</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>25</h1>
                <span className='text-[#666]'>Total Classes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>12</h1>
                <span className='text-[#666]'>Grade Levels</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>1,259</h1>
                <span className='text-[#666]'>Total Students</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>79</h1>
                <span className='text-[#666]'>Total Teachers</span>
            </div>
        </div>

        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('classes')} className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'classes' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>All Classes</button>
            <button onClick={() => setActive('sections')} className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'sections' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Sections</button>
            <button onClick={() => setActive('schedules')} className={`px-8 py-3 border border-[#e1e5e9]  hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'schedules' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Schedules</button>
         </div>

        {/* all classes, Sections and Schedules */}
        { active === 'classes' &&
        <div className="bg-white p-6 mb-8 shadow rounded-md">
            <div className="flex justify-between items-center mb-8">
                <span className='text-[#333] text-2xl font-bold'>Class Management</span>
                <button className='px-5 py-2 text-white bg-[#006b3f] rounded-md flex items-center gap-2' onClick={() => setAllClasse(!allClasse)}><FaPlus />Add Class</button>
            </div>
            
        <form className="grid grid-cols-1 md:grid-cols-[3fr_2fr_150px] gap-5 mb-4">
            <div className="mb-4">
                <input type="text" placeholder='Search Classes...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-[#006b3f]"/>
            </div>

            <div className="mb-4">
                <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg focus:outline-[#006b3f] transition-all duration-300 ease-in-out" required>
                    <option value="">Select Class</option>
                    <option value="All Classes">All Classes</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                </select>
            </div>

            <button type='submit' className="flex items-center gap-2 w-fit cursor-pointer px-4 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4" aria-label='search classes'>
                <IoSearchOutline size={24}/>
                Search
            </button>
        </form>

            {/* All Classes */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
                {   allClasses.map((classs, index) => (
                    <div key={index} className="bg-white rounded-2xl border-l-4 border-[#006b3f] p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_25px_rgba(0,0,0,0.1)]">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className='text-[#006b3f] text-2xl font-bold mb-1'>Class {classs.classs}</h1>
                            <div>
                                <span className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${classs.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${classs.status === 'Pending' ? ' bg-[#fef3c7] text-[#92400e]' : ''} ${classs.status === 'Completed' ? ' bg-[#dbeafe] text-[#1e40af]' : ''}`}>{classs.status}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className='text-[#666]'>Students</span>
                                <span className='font-bold'>{classs.students}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className='text-[#666]'>Class Teacher</span>
                                <span className='font-bold'>{classs.classTeacher}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex flex-col">
                                <span className='text-[#666]'>Room</span>
                                <span className='font-bold'>{classs.room}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className='text-[#666]'>Schedule</span>
                                <span className='font-bold'>{classs.schedule}</span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 text-sm mt-4">
                            <button className='px-5 py-2 border border-[#e1e5e9] bg-[#f8f9fa] text-[#666] rounded-lg cursor-pointer'>View Details</button>
                            <button className='px-5 py-2 border border-[#fcd116] bg-[#fcd116]  rounded-lg cursor-pointer'>Edit</button>
                            <button className='px-5 py-2 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg cursor-pointer'>Delete</button>
                        </div>
                    </div> ))}
            </div>
        </div>}
       
        {/* Sections */}
        { active === 'sections' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Manage Sections</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2' onClick={() => setSectionn(!sectionn)}><FaPlus />Add Section</button>
            </div>
            
        <form className="grid grid-cols-1 md:grid-cols-[3fr_2fr_150px] gap-5 mb-4">
                <div className="mb-4">
                    <input type="text" placeholder='Search Sections...' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-[#006b3f]"/>
                </div>

                <div className="mb-4">
                    <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg focus:outline-[#006b3f] transition-all duration-300 ease-in-out" required>
                        <option value="">Select Section</option>
                        <option value="All Sections">All Sections</option>
                        <option value="Section A">Section A</option>
                        <option value="Section B">Section B</option>
                        <option value="Section C">Section C</option>
                        <option value="Section D">Section D</option>
                    </select>
                </div>

                <button type='submit' className="flex items-center gap-2 w-fit cursor-pointer px-4 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                    <IoSearchOutline size={24}/>
                    Search
                </button>
            </form>

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
                    {   sections.map((section, index) => (
                        <tr key={index} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'> {section.sectionName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'> {section.classs}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{section.students}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{section.teacher}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{section.room}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left capitalize'><span className={`py-1 px-2.5 rounded-2xl text-sm font-medium  ${section.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${section.status === 'Pending' ? ' bg-[#fef3c7] text-[#92400e]' : ''} ${section.status === 'Completed' ? ' bg-[#dbeafe] text-[#1e40af]' : ''}`}>{section.status}</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] hover:bg-[#ffffff] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#fcd116] hover:bg-[#ffda33] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md' onClick={() => startUpdatingIndex(index)}>Edit</button>
                            <button className='bg-[#ce1126] hover:bg-[#dc001a] text-white border border-[#e1e5e9] px-4 py-2 rounded-md' onClick={() => deleteSection(index)}>Delete</button>
                        </td>
                    </tr> ))}
                </tbody>
            </table>
        </div>} 
       
        {/* Schedules */}
        { active === 'schedules' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Class Schedule</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Create Schedule</button>
            </div>
            
        <form className="grid grid-cols-1 md:grid-cols-[3fr_2fr_150px] gap-5 mb-4">
               <div className="mb-4">
                    <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                        <option value="">Select Class</option>
                        <option value="All Classes">All Classes</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                    </select>
                </div>

                <button type='submit' className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                    <IoSearchOutline size={24}/>
                    View Schedule
                </button>
            </form>
            
            <div className="text-center rounded-md bg-[#f8f9fa] p-8 text-[#666]">
                <div className="flex flex-col justify-center items-center gap-1">
                    <FaCalendarWeek size={32}/>
                    <h1 className='font-bold text-2xl'>Class Schedules</h1>
                    <p>Select a class to view it's schedule</p>
                </div>
            </div>
        </div>} 



        {/* box modal for All Classes*/}
        {   allClasse && 
        <div className="fixed z-1000 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
            <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] w-[50%] max-w-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between p-6 border-b border-gray-400">
                    <h1 className="text-2xl text-[#006b3f] font-bold">Create New Lesson Plan</h1>
                    <IoClose className='font-bold cursor-pointer hover:text-[#ce1126] transition-all duration-200'  size={32} onClick={() => setAllClasse(!allClasse)}/>
                </div>
                <form className="p-6">
                <div className="grid grid-cols-2 gap-5">
                    <div className="mb-4">
                        <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Lesson Title *</label>
                        <input type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Select Subject *</label>
                        <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                        <option value="">Select Subject</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="English">English</option>
                        <option value="Physics">Physics</option>
                        <option value="Biology">Biology</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Class *</label>
                        <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                        <option value="">Select Class</option>
                        <option value="Class 1">Class 1</option>
                        <option value="Class 2">Class 2</option>
                        <option value="Class 3">Class 3</option>
                        <option value="Class 4">Class 4</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Duration (minutes) *</label>
                        <input type="number" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Week *</label>
                        <input type="number" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Teacher *</label>
                        <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                        <option value="">Select Teacher</option>
                        <option value="Class 1">Mr. Mohamed Warsame</option>
                        <option value="Class 2">Mr. Ahmed Mohamed</option>
                        <option value="Class 3">Mss. Hodan Ahmed</option>
                        <option value="Class 4">Mr. Ali Ahmed Abdi</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Lesson Description *</label>
                    <textarea type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="Desctiption what students will learn in this lesson"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Leaning Objectives *</label>
                    <textarea type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="List the specific learning objectives in this lesson"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Required Materials *</label>
                    <textarea type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="List any materials, resources or equipment needed"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Lesson Activities *</label>
                    <textarea type="text" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="Describe main activities and teaching methods"></textarea>
                </div>

                <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                    <button className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setAllClasse(!allClasse)}>Cancel</button>
                    <button className="bg-[#006b3f] hover:bg-[#005a35] text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">Create Lesson Plan</button>
                </div>
                </form>
            </div>
        </div>}

        {/* box modal for sections*/}
        {   sectionn && 
        <div className="fixed z-1000 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
            <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.3)] w-[50%] max-w-300 max-h-[90vh] overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between p-6 border-b border-gray-400">
                    <h1 className="text-2xl text-[#006b3f] font-bold">Create New Section</h1>
                    <IoClose className='font-bold cursor-pointer hover:text-[#ce1126] transition-all duration-200'  size={32} onClick={() => setSectionn(!sectionn)}/>
                </div>
                <form className="p-6" onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Section Name *</label>
                    <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={sectionName} onChange={(e) => setSectionName(e.target.value)} required>
                    <option value="">Select Section</option>
                    <option value="Section A">Section A</option>
                    <option value="Section B">Section B</option>
                    <option value="Section C">Section C</option>
                    <option value="Section D">Section D</option>
                    <option value="Section E">Section E</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Class *</label>
                    <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={classs} onChange={(e) => setClasss(e.target.value)} required>
                    <option value="">Select Class</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 4">Class 5</option>
                    <option value="Class 4">Class 6</option>
                    <option value="Class 4">Class 7</option>
                    <option value="Class 4">Class 8</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Teacher *</label>
                    <select name="subject" id="subject" className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={teacher} onChange={(e) => setteacher(e.target.value)} required>
                    <option value="">Select Teacher</option>
                    <option value="Mr. Mohamed Warsame">Mr. Mohamed Warsame</option>
                    <option value="Mr. Ahmed Mohamed">Mr. Ahmed Mohamed</option>
                    <option value="Mss. Hodan Ahmed">Mss. Hodan Ahmed</option>
                    <option value="Mr. Ali Ahmed Abdi">Mr. Ali Ahmed Abdi</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Student No *</label>
                    <input type="text" placeholder='Enter total students in the section: Example 48 students' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={students} onChange={(e) => setStudents(e.target.value)}/>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Room *</label>
                    <input type="text" placeholder='Enter Room Number' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={room} onChange={(e) => setroom(e.target.value)}/>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Status *</label>
                    <input type="text" placeholder='Enter wheater the section is Active, Pending or Completed' className="w-full p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" value={status} onChange={(e) => setstatus(e.target.value)}/>
                </div>

                <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                    <button type='button' className="bg-[#f8f9fa] hover:bg-[#e9ecef] text-[#333] border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out" onClick={() => setSectionn(false)}>Cancel</button>
                    <button type='submit' className="bg-[#006b3f] hover:bg-[#005a35] text-white border border-[#e1e5e9] px-6 py-3 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">{updatingIndex !== null ? 'Update Existing Section' : 'Create New Section'}</button>
                </div>
                </form>
            </div>
        </div>}
    </section>
  )
}

export default ClassesSections
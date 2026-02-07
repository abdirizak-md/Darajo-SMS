import { useState } from 'react'
import { FaBookOpenReader, FaPlus } from 'react-icons/fa6'
import { IoSearch, IoSearchOutline } from 'react-icons/io5'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import lessonPlans from '../Data/lessonPlans'

const LessonPlans = () => {
    const [active, setActive] = useState('plans');
  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>
    
        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] text-4xl font-bold mb-4'>🏠 Lesson Plans</h1>
            <span className='text-[#666]'>Create, Manage, and Organize Lesson Plans and Study Materials</span>
        </div>
    
        <div className="grid grid-cols-4 gap-5 mb-8">
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>45</h1>
                <span className='text-[#666]'>Total Lesson Plans</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>13</h1>
                <span className='text-[#666]'>Active Plans</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>8</h1>
                <span className='text-[#666]'>Subject Covered</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>8</h1>
                <span className='text-[#666]'>Grade Levels</span>
            </div>
        </div>
    
        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('plans')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'plans' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>All Plans</button>
            <button onClick={() => setActive('maths')} className={`px-8 py-3 border border-[rgb(225,229,233)] rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'maths' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Mathematics</button>
            <button onClick={() => setActive('English')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'English' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>English</button>
            <button onClick={() => setActive('Physics')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Physics' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Physics</button>
            <button onClick={() => setActive('Biology')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Biology' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Biology</button>
        </div>
    
        {/* All plans */}
        { active === 'plans' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Lesson Plans Overviews</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Create Lesson Plan</button>
            </div>
            
            <form className="grid grid-cols-[1fr_1fr_1fr] gap-5 mb-4">
                <div className="mb-4">
                    <input type="text" placeholder='Search Classes...' className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
                </div>

                <div className="mb-4">
                    <select name="subject" id="subject" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                        <option value="">All Classes</option>
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
            
            <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 mt-4">
                {   lessonPlans.map((lesson) => (
                    <div className="bg-white rounded-2xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] border-l-4 border-l-[#006b3f]">
                    <div className="flex justify-between items-start mb-4">
                        <div className="">
                            <h1 className='text-lg font-medium text-[#006b3f] mb-2'>{lesson.lessonName}</h1>
                            <p className='text-[1rem] text-[#333] mb-2'>{lesson.subject} • {lesson.classLevel}</p>
                            <div className="flex gap-3.5 text-[#333] mb-4 text-sm">
                                <span className='text-[#666] text-sm'>{lesson.durations}</span>
                                <span className='text-[#666] text-sm'>{lesson.Period}</span>
                                <span className='text-[#666] text-sm'>{lesson.teacher}</span>
                            </div>
                        </div>
                        <span className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${lesson.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${lesson.status === 'Draft' ? 'bg-[#fef3c7] text-[#92400e]' : ''} ${lesson.status === 'Completed' ? 'bg-[#dbeafe] text-[#1e40af]' : ''}`}>{lesson.status}</span>
                    </div>
                    <div className="text-[#333] mb-4">
                        {lesson.description}
                    </div>
                    <div className="bg-[#f8f9fa] rounded-lg p-4 mb-4">
                        <h4 className='text-[#333] text-sm mb-2'>Learning Objectives:</h4>
                        <ul className="pl-6 text-sm text-[#666] list-disc">
                            <li>{lesson.learningObjectives1}</li>
                            <li>{lesson.learningObjectives2}</li>
                            <li>{lesson.learningObjectives3}</li>
                        </ul>
                    </div>
                    <div className="flex justify-start gap-1 text-sm mt-4">
                        <button className='px-5 py-2 border border-[#e1e5e9] bg-[#f8f9fa] text-[#666] rounded-lg cursor-pointer'>View Details</button>
                        <button className='px-5 py-2 border border-[#fcd116] bg-[#fcd116]  rounded-lg cursor-pointer'>Edit</button>
                        <button className='px-5 py-2 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg cursor-pointer'>Delete</button>
                    </div>
                </div> )) }
            </div>
          </div>} 

        {/* maths */}
        { active === 'maths' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Mathematics Lesson Plan</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Create Maths Lesson</button>
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
                    <FaBookOpenReader size={32}/>
                    <h1 className='font-bold text-2xl'>Mathematics Lesson Plan</h1>
                    <p>Select <strong>All Plans</strong> to view Mathematics Lesson Plan or create a new one</p>
                </div>
            </div>
          </div>}

        {/* English */}
        { active === 'English' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>English Lesson Plan</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Create English Lesson</button>
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
                    <FaBookOpenReader size={32}/>
                    <h1 className='font-bold text-2xl'>English Lesson Plan</h1>
                    <p>Select <strong>All Plans</strong> to view English Lesson Plan or create a new one</p>
                </div>
            </div>
          </div>}

        {/* Physics */}
        { active === 'Physics' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Physics Lesson Plan</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Create Physics Lesson</button>
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
                    <FaBookOpenReader size={32}/>
                    <h1 className='font-bold text-2xl'>Physics Lesson Plan</h1>
                    <p>Select <strong>All Plans</strong> to view Physics Lesson Plan or create a new one</p>
                </div>
            </div>
          </div>}

        {/* Biology */}
        { active === 'Biology' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Biology Lesson Plan</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Create Biology Lesson</button>
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
                    <FaBookOpenReader size={32}/>
                    <h1 className='font-bold text-2xl'>Biology Lesson Plan</h1>
                    <p>Select <strong>All Plans</strong> to view Biology Lesson Plan or create a new one</p>
                </div>
            </div>
          </div>}
        {/* box modal */}
        {/* <div className="fixed z-1000 left-0 top-0 w-100 h-100 bg-[rgba(0,0,0,0.5)] flex items-center justify-center ">
            <div className="bg-white rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.)] w-250 h-90 overflow-auto custom-scrollbar">
            <div className="flex items-center justify-between p-6 border-b border-gray-400">
                <h1 className="text-2xl text-[#006b3f]">Create New Lesson Plan</h1>
                <AiOutlineClose />
            </div>
            <form className="p-6">
                <div className="grid grid-cols-[1fr,1fr] gap-4">
                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Lesson Title *</label>
                    <input type="text" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Select Subject *</label>
                    <select name="subject" id="subject" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="English">English</option>
                    <option value="Physics">Physics</option>
                    <option value="Biology">Biology</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Class *</label>
                    <select name="subject" id="subject" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">Select Class</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Duration (minutes) *</label>
                    <input type="number" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Week *</label>
                    <input type="number" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Teacher *</label>
                    <select name="subject" id="subject" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-sm transition-all duration-300 ease-in-out" required>
                    <option value="">Select Teacher</option>
                    <option value="Class 1">Mr. Mohamed Warsame</option>
                    <option value="Class 2">Mr. Ahmed Mohamed</option>
                    <option value="Class 3">Mss. Hodan Ahmed</option>
                    <option value="Class 4">Mr. Ali Ahmed Abdi</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Lesson Description *</label>
                    <textarea type="text" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="Desctiption what students will learn in this lesson"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Leaning Objectives *</label>
                    <textarea type="text" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="List the specific learning objectives in this lesson"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Required Materials *</label>
                    <textarea type="text" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="List any materials, resources or equipment needed"></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="lessonTitle" className="font-medium block mb-2 text-[#333]">Lesson Activities *</label>
                    <textarea type="text" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" placeholder="Describe main activities and teaching methods"></textarea>
                </div>

                <div className="flex gap-4 justify-end mt-8 pt-4 border-t border-[#e1e5e9]">
                    <button className="bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] p-2.5 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">Cancel</button>
                    <button className="bg-[#006b3f] text-white border border-[#e1e5e9] p-2.5 rounded-md cursor-pointer font-medium inline-flex items-center gap-2 transition-all duration-300 ease-in-out">Create Lesson Plan</button>
                </div>
                </div>
            </form>
            </div>
        </div> */}

    </section>
  )
}

export default LessonPlans
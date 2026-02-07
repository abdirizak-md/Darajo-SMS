import { useState } from 'react'
import { FaImages, FaLink, FaPlus, FaVideo } from 'react-icons/fa6'
import { IoDocument, IoSearch } from 'react-icons/io5'
import { MdArrowBackIos } from 'react-icons/md'
import studyMaterials from '../Data/studyMaterials'
import { Link } from 'react-router-dom'

const StudyMaterials = () => {
    const [active, setActive] = useState('Materials');
  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>
    
        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] text-4xl font-bold mb-4'>🏫 Study Materials</h1>
            <span className='text-[#666]'>Manage Educational Resources, Documents and Study Materials</span>
        </div>
    
        <div className="grid grid-cols-4 gap-5 mb-8">
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>156</h1>
                <span className='text-[#666]'>Total Materials</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>3.5GB</h1>
                <span className='text-[#666]'>Storage Used</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>12</h1>
                <span className='text-[#666]'>Subjects</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>24</h1>
                <span className='text-[#666]'>Recent Uploads</span>
            </div>
        </div>
    
        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('Materials')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Materials' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>All Materials</button>
            <button onClick={() => setActive('Documents')} className={`px-8 py-3 border border-[rgb(225,229,233)] rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Documents' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Documents</button>
            <button onClick={() => setActive('Video')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Video' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Videos</button>
            <button onClick={() => setActive('Image')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Image' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Images</button>
            <button onClick={() => setActive('Link')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Link' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Links</button>
        </div>
    
        {/* Materials */}
        { active === 'Materials' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Study Materils Library</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Upload Materials</button>
            </div>
            
            <form className="grid grid-cols-[1fr_1fr_1fr] gap-5 mb-4">
                <div className="mb-4">
                    <input type="text" placeholder='Search Classes...' className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm"/>
                </div>

                <div className="mb-4">
                    <select name="subject" id="subject" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                        <option value="">All Subjects</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Engilish">Engilish</option>
                        <option value="Science">Science</option>
                        <option value="Somali">Somali</option>
                    </select>
                </div>

            </form>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mt-4">
            {   studyMaterials.map((material) => (
                <div className="bg-white rounded-2xl p-6 shadow-[0_5px_20px_rgba(0,0,0,0.1)] border-l-4 border-l-[#006b3f]">
                <div className="flex justify-between items-start mb-4">
                        <div className="">
                            <h1 className='text-lg font-medium text-[#006b3f] mb-2'>{material.materials}</h1>
                            <p className='text-[1rem] text-[#333] mb-2'>{material.subject} • {material.classLevel}</p>
                            <div className="flex gap-3.5 text-[#333] mb-4 text-sm">
                                <span className='text-[#666] text-sm'>{material.durations}</span>
                                <span className='text-[#666] text-sm'>{material.Period}</span>
                                <span className='text-[#666] text-sm'>{material.teacher}</span>
                            </div>
                        </div>
                        <span className={`py-1 px-2.5 rounded-2xl text-sm font-medium ${material.status === 'Active' ? 'bg-[#d1fae5] text-[#10b981]' : ''} ${material.status === 'Draft' ? 'bg-[#fef3c7] text-[#92400e]' : ''} ${material.status === 'Completed' ? 'bg-[#dbeafe] text-[#1e40af]' : ''}`}>{material.status}</span>
                    </div>
                    <div className="text-[#333] mb-4">
                        {material.description}
                    </div>
                    <div className="bg-[#f8f9fa] rounded-lg p-4 mb-4">
                        <ul className="pl-6 text-sm text-[#666] list-disc">
                            <li>File size: {material.fileSize}</li>
                            {material.pages && <li>Pages: {material.pages}</li>}
                            {material.duration && <li>Duration: {material.duration}</li>}
                            <li>Downloads: {material.downloads}</li>
                        </ul>
                    </div>
                    <div className="flex justify-start gap-1 text-sm mt-4">
                        <button className='px-4 py-1.5 border border-[#e1e5e9] bg-[#f8f9fa] text-[#666] rounded-lg cursor-pointer'>View</button>
                        <button className='px-4 py-1.5 border border-[#e1e5e9] bg-[#10b981] text-white rounded-lg cursor-pointer'>Download</button>
                        <button className='px-4 py-1.5 border border-[#fcd116] bg-[#fcd116]  rounded-lg cursor-pointer'>Edit</button>
                        <button className='px-4 py-1.5 border border-[#ce1126] bg-[#ce1126] text-white rounded-lg cursor-pointer'>Delete</button>
                    </div>
                </div> )) }
            </div>
        
          </div>} 

        {/* Documents */}
        { active === 'Documents' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Document Materials</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Upload Document</button>
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
                    <IoDocument size={32}/>
                    <h1 className='font-bold text-2xl'>Documents Materials</h1>
                    <p>Select <strong>All Plans</strong> to view Documents or upload a new one</p>
                </div>
            </div>
          </div>}

        {/* Video */}
        { active === 'Video' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Video Materials</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Upload Video</button>
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
                    <FaVideo size={32}/>
                    <h1 className='font-bold text-2xl'>Video Materials</h1>
                    <p>Select <strong>All Plans</strong> to view Video or upload a new one</p>
                </div>
            </div>
          </div>}

        {/* Image */}
        { active === 'Image' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Image Materials</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Upload Image</button>
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
                    <FaImages size={32}/>
                    <h1 className='font-bold text-2xl'>Image Materials</h1>
                    <p>Select <strong>All Plans</strong> to view Image or upload a new one</p>
                </div>
            </div>
          </div>}

        {/* Link */}
        { active === 'Link' &&
          <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Link Materials</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Upload Link</button>
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
                    <FaLink size={32}/>
                    <h1 className='font-bold text-2xl'>Link Materials</h1>
                    <p>Select <strong>All Plans</strong> to view Link or upload a new one</p>
                </div>
            </div>
          </div>}

    </section>
  )
}

export default StudyMaterials
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'
import { MdArrowBackIos } from 'react-icons/md'

const FeesCollection = () => {
    const [active, setActive] = useState('Recent');
  return (
    <div className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <div className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </div>
    
        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] text-4xl font-bold mb-4'>🏠 Fee Management</h1>
            <span className='text-[#666]'>Manage School Fees, Track Payment, and Generate Financial Report</span>
        </div>
    
        <div className="grid grid-cols-4 gap-5 mb-8">
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>125,654Birr</h1>
                <span className='text-[#666]'>Total Collected</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>54,332Birr</h1>
                <span className='text-[#666]'>Pending Fees</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>89%</h1>
                <span className='text-[#666]'>Collection Rate</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>135</h1>
                <span className='text-[#666]'>Overdue Payments</span>
            </div>
        </div>
    
        <div className="flex gap-5 mb-8">
            <button onClick={() => setActive('Recent')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Recent' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Recent Payments</button>
            <button onClick={() => setActive('Pending')} className={`px-8 py-3 border border-[#e1e5e9] rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Pending' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Pending Fees</button>
            <button onClick={() => setActive('Overdue')} className={`px-8 py-3 border border-[#e1e5e9]  rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active == 'Overdue' ? 'bg-[#006b3f] text-white' : 'bg-white'}`}>Overdue Fees</button>
        </div>
    
        {/* Recent Payments */}
        { active == 'Recent' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Recent Payments</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#006b3f] rounded-md inline-flex items-center gap-2'><FaPlus />Record Payments</button>
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
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Fee Type</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Amount</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Payment Method</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Date</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Action</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adnan Mohamed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Tuition Fee</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#10b981] font-bold text-left'>1,500Birr</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Mobile Money</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-04-19</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#d1fae5]'>Paid</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                        </td>
                    </tr>
                    
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adnan Mohamed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Tuition Fee</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#10b981] font-bold text-left'>1,300Birr</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Cash</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-04-19</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#d1fae5]'>Paid</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                        </td>
                    </tr>

                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adnan Mohamed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Tuition Fee</td>
                        <td className='p-4 border-b text-[#10b981] font-bold border-[#e1e5e9] text-left'>1,100Birr</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Bank Transfer</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-04-19</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium bg-[#d1fae5]'>Paid</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>}
    
        {/* Pending Fees */}
        { active == 'Pending' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Pending Fees</span>
                <button className='px-5 py-2 cursor-pointer bg-[#fcd116] rounded-md inline-flex items-center gap-2'><FaPlus />Send Remainders</button>
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
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Fee Type</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Amount</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Date</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Days Left</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Action</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adnan Mohamed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Tuition Fee</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#ce1126] font-bold text-left'>500Birr</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-04-19</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>5 Days</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Mark Paid</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Send Email</button>
                        </td>
                    </tr>
                    
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adnan Mohamed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Tuition Fee</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#ce1126] font-bold text-left'>300Birr</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-04-19</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>7 Days</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white  border border-[#e1e5e9] px-4 py-2 rounded-md'>Mark Paid</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Send Email</button>
                        </td>
                    </tr>

                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adnan Mohamed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Tuition Fee</td>
                        <td className='p-4 border-b text-[#ce1126] font-bold border-[#e1e5e9] text-left'>700Birr</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-04-19</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>3 Days</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white  border border-[#e1e5e9] px-4 py-2 rounded-md'>Mark Paid</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Send Email</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>}
    
        {/* Overdue Fees */}
        { active == 'Overdue' &&
            <div className="bg-white p-6 mb-6 shadow rounded-md">
            <div className="flex justify-between items-center mb-4">
                <span className='text-[#333] text-2xl font-bold'>Overdue Fees</span>
                <button className='px-5 py-2 cursor-pointer text-white bg-[#ce1126] rounded-md inline-flex items-center gap-2'><FaPlus />Send Urgent Remainders</button>
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
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Fee Type</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Amount</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Date</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Days Left</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Action</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adnan Mohamed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Tuition Fee</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#ce1126] font-bold text-left'>500Birr</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-04-19</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>5 Days</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Mark Paid</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Call Parent</button>
                        </td>
                    </tr>
                    
                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adnan Mohamed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Tuition Fee</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#ce1126] font-bold text-left'>300Birr</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-04-19</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>7 Days</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white  border border-[#e1e5e9] px-4 py-2 rounded-md'>Mark Paid</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Call Parent</button>
                        </td>
                    </tr>

                    <tr className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Adnan Mohamed</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>Tuition Fee</td>
                        <td className='p-4 border-b text-[#ce1126] font-bold border-[#e1e5e9] text-left'>700Birr</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>2026-04-19</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>3 Days</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white  border border-[#e1e5e9] px-4 py-2 rounded-md'>Mark Paid</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Call Parent</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>}

        </div>
  )
}

export default FeesCollection
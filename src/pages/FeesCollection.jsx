import { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { IoSearch, IoSearchOutline } from 'react-icons/io5'
import { MdArrowBackIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import recentPayments from '../Data/recentPayments'
import pendingFees from '../Data/pendingFees'
import { overdueFees } from '../Data/pendingFees'

const FeesCollection = () => {
    const [active, setActive] = useState('Recent');
  return (
    <section className='max-w-300 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar'>
        <Link to='/' className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-[#006b3f] mb-8 transition-all duration-300 hover:-translate-y-1">
            <MdArrowBackIos  className='text-white' size={24}/>
            <span className='text-white font-medium'>Back to Dashboard</span>
        </Link>
    
        <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
            <h1 className='text-[#006b3f] text-4xl font-bold mb-4'>🏠 Fee Management</h1>
            <span className='text-[#666]'>Manage School Fees, Track Payment, and Generate Financial Report</span>
        </div>
    
        <div className="grid grid-cols-4 gap-5 mb-8">
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>%29,654</h1>
                <span className='text-[#666]'>Total Collected</span>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
                <h1 className='text-[#006b3f] text-4xl font-bold mb-1'>$9,876</h1>
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
            
            <form className="grid grid-cols-[1fr_1fr_1fr] gap-5 mb-4">
                <div className="mb-4">
                    <input type="text" placeholder='Search Sections...' className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out placeholder:text-sm focus:outline-[#006b3f]"/>
                </div>
                <div className="mb-4">
                    <select name="subject" id="subject" className="w-100 p-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out" required>
                        <option value="">Select Payment</option>
                        <option value="All Payments">All Payments</option>
                        <option value="Mobile Money">Mobile Money</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>

                <button className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                    <IoSearchOutline size={24}/>
                    Search
                </button>
            </form>

            <table className='w-full border-collapse mt-4'>
                <thead>
                    <tr>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Fee Type</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Amount</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Payment Method</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Date</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Status</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    {   recentPayments.map((payment, index) => (
                        <tr key={index} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{payment.studentName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{payment.feeType}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#10b981] font-bold text-left'>{payment.Amount}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{payment.paymentMethod}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{payment.date}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'><span className='py-1 px-2.5 rounded-md text-sm font-medium text-[#006b3f] bg-[#d1fae5]'>{payment.status}</span></td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#f8f9fa] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>View</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Edit</button>
                        </td>
                    </tr> )) }
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
                <button className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                    <IoSearchOutline size={24}/>
                    Search
                </button>
            </div>

            <table className='w-full border-collapse mt-4'>
                <thead>
                    <tr>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Fee Type</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Amount</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Date</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Days Left</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    {   pendingFees.map((pending, index) => (
                        <tr key={index} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{pending.studentName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{pending.feeType}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#ce1126] font-bold text-left'>{pending.amount}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{pending.dueDate}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{pending.daysLeft}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Mark Paid</button>
                            <button className='bg-[#fcd116] text-[#333] border border-[#e1e5e9] px-4 py-2 rounded-md'>Send Email</button>
                        </td>
                    </tr> )) }
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
                <button className="flex items-center gap-2 w-fit cursor-pointer px-5 py-2.5 border border-[#e1e5e9] rounded-md text-lg transition-all duration-300 ease-in-out mb-4">
                    <IoSearchOutline size={24}/>
                    Search
                </button>
            </div>

            <table className='w-full border-collapse mt-4'>
                <thead>
                    <tr>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Student name</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Fee Type</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Amount</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Due Date</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Days Overdues</th>
                        <th className="p-4 bg-[#f8f9fa] text-[#333] font-semibold border-b border-[#e1e5e9] text-left">Actions</th>
                    </tr>
                </thead>
                <tbody className='table-row-group border-inherit'>
                    {   overdueFees.map((overdues, index) => (
                        <tr key={index} className="hover:bg-[#f8f9fa]">
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{overdues.studentName}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{overdues.feeType}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-[#ce1126] font-bold text-left'>{overdues.amount}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{overdues.dueDate}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left'>{overdues.daysLeft}</td>
                        <td className='p-4 border-b border-[#e1e5e9] text-left flex gap-2'>
                            <button className='bg-[#10b981] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Mark Paid</button>
                            <button className='bg-[#ce1126] text-white border border-[#e1e5e9] px-4 py-2 rounded-md'>Call Parent</button>
                        </td>
                    </tr> )) }
                </tbody>
            </table>
        </div>}

    </section>
  )
}

export default FeesCollection
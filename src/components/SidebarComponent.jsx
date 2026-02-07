import { NavLink } from 'react-router-dom'

const SidebarComponent = ({open, academics, title}) => {
  return (
    <div className="flex flex-col py-2 cursor-default">
        {open && <p className='text-[12px] text-[#ffffffb3] font-medium py-1 pl-5'>{title}</p>}
        { academics.map((item, index) => (
            <NavLink key={index} to={item.path} className={({isActive}) => `flex items-center gap-3 w-full px-5 py-3 text-white hover:bg-amber-50/20  transition-all duration-100 relative group focus:bg-amber-50/30 focus:outline-none ${isActive ? 'bg-amber-50/30 border-l-4 border-amber-300' : ''}`}>
            {item.icon}
            {open && <span className='text-sm font-medium'>{item.label}</span>}
            {!open && <span className='pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 rounded-lg bg-gray-900 px-3 py-1 text-white opacity-0 shadow transition-opacity group-hover:opacity-100 z-50'>{item.label}</span>}
        </NavLink>
        ))
        }
    </div>
  )
}

export default SidebarComponent
import { NavLink } from 'react-router-dom'

const SidebarComponent = ({open, items, title}) => {
  return (
    <div className="flex flex-col py-2">
        {open && <p className='px-6 text-[11px] text-white/70 tracking-widest mb-1'>{title}</p>}
        { items.map((item) => (
            <NavLink key={item.className} to={item.path} className={({isActive}) => `flex items-center gap-3 mx-3 rounded-xl px-4 py-2 text-white/80 hover:bg-white/10 hover:text-white  transition-all duration-200 relative group z-10 ${isActive ? 'bg-white/15 text-white shadow-md' : ''}`}>
              <div className={` grid place-items-center size-9 rounded-lg transition `} >
                <item.icon />
              </div>
              {open && (
              <span className="text-sm font-medium tracking-wide">
                    {item.label}
                </span> )}
      
              {/* tooltip */}
              {!open && (
                <span className="absolute left-10 ml-4 whitespace-nowrap rounded-lg bg-gray-900/90 px-3 py-1 text-xs shadow-lg opacity-0 group-hover:opacity-100 z-50">
                  {item.label}
                </span>
              )}
        </NavLink>
        ))
      }
    </div>
  )
}

export default SidebarComponent
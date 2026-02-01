import ASide from './pages/dashboard/ASide'
import Header from './pages/dashboard/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ASide />

      {/* Right side */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Page Content or dashboard*/}
        <main className="flex-1 overflow-y-auto bg-[#f5f7fa] custom-scrollbar">
          <Outlet />
        </main>

      </div>
    </div>
  )
}

export default App

import ASide from './pages/dashboard/ASide'
import Header from './pages/dashboard/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Header />
      <div className="flex h-screen overflow-y-auto">
        <ASide/>
        {/* Page Content or dashboard*/}
        <main className="flex flex-1 bg-[#f5f7fa]">
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default App

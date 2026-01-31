import { Outlet } from 'react-router-dom'
import Header from './pages/dashboard/Header'
import ASide from './pages/dashboard/ASide'
import Dashboard from './pages/dashboard/Dashboard'
import ClassesSections from './pages/ClassesSections'

const App = () => {
  return (
    <>
      <Header />
      {/* <div className="flex">
        <ASide />
        <Dashboard />
      </div> */}
      <ClassesSections />
      <Outlet />
    </>
  )
}

export default App
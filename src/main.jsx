import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ClassesSections from './pages/ClassesSections.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {        
        path: '/classes',
        element: <ClassesSections />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)

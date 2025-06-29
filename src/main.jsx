import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root/Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Project from './Components/Project.jsx'

//Create router 
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root
  },
  {
    path: '/details/:id',
    Component: Project
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-background min-h-screen max-w-[2500px] mx-auto">
    <RouterProvider router={router}>
    </RouterProvider>
    </div>
  </StrictMode>,
)

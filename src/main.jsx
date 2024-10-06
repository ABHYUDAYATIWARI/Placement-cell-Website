import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import JobsList from './pages/JobsList.jsx'
import SectorJobs from './pages/JobsListSector.jsx'
import CategoryJob from './pages/JobsListCategory.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/all-jobs',
        element:<JobsList/>
      },
      {
        path:'/sector-jobs',
        element:<SectorJobs/>
      },
      {
        path:'/category-jobs',
        element:<CategoryJob/>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

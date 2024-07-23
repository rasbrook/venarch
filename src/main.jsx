import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './assets/pages/about.jsx'
import Contact from './assets/pages/contact.jsx'
import Project from './assets/pages/projects.jsx'


import './index.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

const main=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/about',
    element:<About />

  }
  ,
  {
    path:'/project',
    element:<Project />

  }
  ,
  {
    path:'/contact',
    element:<Contact />

  }
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={main} />,
)

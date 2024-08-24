
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/home/Home.jsx'
import About from './component/about/About.jsx'
import Contact from './component/contact/Contact.jsx'
import Github, { githubInfoLoader } from './component/github/Github.jsx'
import User from './component/user/User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:"user",
        element:<User/>
      },
      {
        loader:githubInfoLoader,
        path:"/github",
        element:<Github/>
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

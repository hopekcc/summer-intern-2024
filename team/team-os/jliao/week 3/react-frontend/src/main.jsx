import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './pages/home.jsx'
import SignIn from './pages/signin.jsx'
import Profile from './pages/profile.jsx'
import Header from './components/header.jsx'

import './assets/index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Header />} >
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

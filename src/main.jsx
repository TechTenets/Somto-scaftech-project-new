import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootRoute from './route/RootRoute.jsx'
import App from './App.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootRoute />}>

      <Route path='' element={<App />} />
      {/* <Route path='what-we-do' element={<WhatWedo />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='jobs' element={<Timeline />} />
      <Route path='track' element={<TrackWaybill />} /> */}
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={ router}/>
  </React.StrictMode>,
)
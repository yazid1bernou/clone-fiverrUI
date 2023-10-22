import { useState } from 'react'
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet 
} from "react-router-dom";

function App() {

  const Layout =  () => {
     return (
         <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
         </div>
     )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
          path : "/" ,
          element : <Home />
        }
      ]
    },
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App

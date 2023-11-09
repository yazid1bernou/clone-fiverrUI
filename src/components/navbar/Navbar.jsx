import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {

  const [active , setActive] = useState(false);
  const [open , setOpen] = useState(false) ;
  const {pathname} =  useLocation();

  const isActive = () => {
     window.scrollY > 0 ? setActive(true) : setActive(false);
  }

  useEffect(()=> {
    window.addEventListener("scroll" , isActive);
    return ()=> {
      window.removeEventListener("scroll" , isActive)
    }
  },[]);

  const currentUser =  {
    id : 1 , 
    username : "bernou adem" ,
    isSeller : true

  }

  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
          <div className="container">
               <div className="logo">
                <Link to="/" className='link'> 
                  <span className='text'>fiverr </span>
                </Link> 
                <span className='dot'>.</span>
               </div>
               <div className="links">
                   <Link to="/" className='link'> Fiverr Business</Link>
                   <Link to="/" className='link'> Explore</Link>
                   <Link to="/" className='link'> English</Link>
                   <Link to="/" className='link'>Sign in </Link>
                   {!currentUser?.isSeller && <span>Become a seller</span>}
                   {!currentUser?.isSeller &&  <button> Join </button> } 
                   {currentUser && (
                     <div className='user' onClick={()=>setOpen(!open)}> 
                      <img src="https://www.pngall.com/wp-content/uploads/8/Man-PNG-Free-Download.png" />
                      <span>{currentUser?.username}</span>
                      
                      {open &&
                       <div className="options">
                        {currentUser?.isSeller && (
                          <>
                          <Link to="/mygigs" className="link">Gigs</Link>
                          <Link to="/add" className="link">Add New Gig</Link>
                          </>
                        )}
                        <Link to="/orders" className="link">Orders</Link>
                        <Link to="/messages" className="link">Messages</Link>
                        <Link to="/" className="link">Logout</Link>
                      </div> 
                      }

                     </div>
                   )}
                   
                
                   
               </div>
               
          </div>
          {(active  || pathname !=="/") && (
            <>
              <hr />
              <div className="menu">
                <Link to="/" className='link menuLink'>
                   Graphics & Design
                </Link>
                <Link to="/" className='link menuLink'>
                   Video & Animation 
                </Link>
                <Link to="/" className='link menuLink'>
                   Writing & Translation 
                </Link>
                <Link to="/" className='link menuLink'>
                  AI Services 
                </Link>
                <Link to="/" className='link menuLink'>
                   Graphics & Design
                </Link>
                <Link to="/" className='link menuLink'>
                   Digital Marketing 
                </Link>
                <Link to="/" className='link menuLink'>
                   Music & Audio 
                </Link>
                <Link to="/" className='link menuLink'>
                   Programming & Tech 
                </Link>
                <Link to="/" className='link menuLink'>
                   Business  
                </Link>
                <Link to="/" className='link menuLink'>
                   Lifestyle  
                </Link>
                
              </div>
              <hr />
            </>
           )}
          
          
    </div>
  )
}

export default Navbar;

import React, { useEffect, useState } from 'react';
import './Navbar.scss';
//import { Link } from 'react-router-dom';
const Navbar = () => {

  const [active , setActive] = useState(false);

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
    <div className={active ? "navbar active" : "navbar"}>
          <div className="container">
               <div className="logo">
                {/* <Link to="/"> */}
                  <span className='text'>fiverr </span>
                {/* </Link> */}
                <span className='dot'>.</span>
               </div>
               <div className="links">
                   <span> Fiverr Business</span>
                   <span> Explore</span>
                   <span> English</span>
                   <span>Sign in </span>
                   <span>Become a seller</span>
                   {currentUser.isSeller ?  currentUser.username : 
                      <button> Join </button>
                   
                  }
                   
               </div>
               
          </div>
          {active &&
            <>
              <hr />
              <div className="menu">
                <span>Test 1</span>
                <span>Test 2</span>
              </div>
            </>
           }
          
          
    </div>
  )
}

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom';
import './Message.scss';
const Message = () => {
  return (
    <div className='message'>
      <div className="container">
          <span className='breadcrumbs'>
             <Link to="/messages">MESSAGES</Link> - BERNOU Adem -
          </span>
          <div className="messages">
             <div className="item">
                 <img src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                 <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi architecto soluta. Consequuntur, officiis quisquam! Quae culpa ratione nemo molestiae recusandae. Quasi minima eaque laudantium magnam repudiandae similique est rem?
                 </p>
             </div>

          </div>
          <div className="write">
            <textarea name="" placeholder='Write a message' id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </div>
      </div>
        
    </div>
  )
}

export default Message

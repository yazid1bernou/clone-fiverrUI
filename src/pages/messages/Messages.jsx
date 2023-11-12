import React from 'react';
import { Link } from 'react-router-dom';
import './Messages.scss';
const Messages = () => {

  
  const currentUser = {
    id : 1 , 
    username : "bernou adem" ,
    isSeller : true
  }
  const message = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ea sapiente delectus, dignissimos excepturi eum sit neque eos corporis perspiciatis quidem quae quas nulla amet quis! Fugit quaerat obcaecati sint?`;
  return (
    <div className='messages'>
          <div className="container">
            <div className="title">
               <h1>Messages</h1>
              
             
            </div>
            <table>
              <tr>
                <th>Buyer</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
              <tr className='active'>
                <td>
                   Bernou Adem
                </td>
                <td><Link to="/message/123" className="link">{message.substring(0 , 100)}...</Link></td>
                <td>1 day ago</td>
                <td>
                  <button>Mark as Read</button>
                </td>
              </tr>
              <tr className='active'>
                <td>
                   Bernou Adem
                </td>
                <td><Link to="/message/123" className="link">{message.substring(0 , 100)}...</Link></td>
                <td>1 day ago</td>
                <td>
                  <button>Mark as Read</button>
                </td>
              </tr>
              <tr>
                <td>
                   Bernou Adem
                </td>
                <td><Link to="/message/123" className="link">{message.substring(0 , 100)}...</Link></td>
                <td>1 day ago</td>
               
              </tr>
              <tr>
                <td>
                   Bernou Adem
                </td>
                <td><Link to="/message/123" className="link">{message.substring(0 , 100)}...</Link></td>
                <td>1 day ago</td>
               
              </tr>
              <tr>
                <td>
                   Bernou Adem
                </td>
                <td><Link to="/message/123" className="link">{message.substring(0 , 100)}...</Link></td>
                <td>1 day ago</td>
                
              </tr>
              <tr>
                <td>
                   Bernou Adem
                </td>
                <td><Link to="/message/123" className="link">{message.substring(0 , 100)}...</Link></td>
                <td>1 day ago</td>
                
              </tr>

            </table>
          </div>
    </div>
  )
}

export default Messages;

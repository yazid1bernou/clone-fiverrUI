import React from 'react';
import './Orders.scss';
const Orders = () => {

  
  const currentUser = {
    id : 1 , 
    username : "bernou adem" ,
    isSeller : true
  }
  return (
    <div className='orders'>
          <div className="container">
            <div className="title">
               <h1>Orders</h1>
              
             
            </div>
            <table>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser?.isSeller ? "Buyer" : "Seller" }</th>
                <th>Contact</th>
              </tr>
              <tr>
                <td>
                  <img className="img" src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                   <img className="delete" src="/img/delete.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="img" src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                   <img className="delete" src="/img/delete.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="img" src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                   <img className="delete" src="/img/delete.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="img" src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                   <img className="delete" src="/img/delete.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="img" src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                   <img className="delete" src="/img/delete.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img className="img" src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                   <img className="delete" src="/img/delete.png" alt="" />
                </td>
              </tr>

            </table>
          </div>
    </div>
  )
}

export default Orders;

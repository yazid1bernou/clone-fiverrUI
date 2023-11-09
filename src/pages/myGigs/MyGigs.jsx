import React from 'react';
import { Link } from 'react-router-dom';
import './MyGigs.scss';
const MyGigs = () => {
  return (
    <div className='myGigs'>
          <div className="container">
            <div className="title">
               <h1>Gigs</h1>
               <Link to="/add">
                  <button>Add New Gig</button>
               </Link>
             
            </div>
            <table>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>
                  <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
                </td>
                <td>Gig1</td>
                <td>88</td>
                <td>123</td>
                <td>
                   <img src="/img/delete.png" alt="" />
                </td>
              </tr>

            </table>
          </div>
    </div>
  )
}

export default MyGigs

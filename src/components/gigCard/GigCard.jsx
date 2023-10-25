import React from "react";

const GigCart = ({item}) => {
    return (
        <Link to="/gig/5455">
        
        <div className="gigCard">
              <img src={item.img} alt="" />
        </div>

        </Link>
    )
}

export default GigCart ;
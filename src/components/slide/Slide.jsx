import React from 'react'
import './Slide.scss';
import Slider from 'infinite-react-carousel';

const Slide = ({children , slidesToShow , autoplayScroll}) => {
  return (
    <div className='slide'>
         <div className="container">
            <Slider slidesToShow={slidesToShow} autoplayScroll={autoplayScroll} >
                   {children}
            </Slider >
         </div>
    </div>
  )
}

export default Slide;

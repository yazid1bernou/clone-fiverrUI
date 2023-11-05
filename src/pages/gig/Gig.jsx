import React from 'react'
import './Gig.scss';
import Slider from 'infinite-react-carousel';
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
         <div className="left">
           <span className="breadCrumbs">FIVERR {">"} GRAPHICS & DESIGN {">"} </span>
           <h1>I will create ai generated art for you</h1>
           <div className="user">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Jon Doe</span>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>

           </div>

           <Slider slidesToShow={1} arrowsScroll={1}>
            <img src="https://images.pexels.com/photos/18972776/pexels-photo-18972776/free-photo-of-a-beach-with-people-walking-on-it-and-people-on-the-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img src="https://images.pexels.com/photos/18937801/pexels-photo-18937801/free-photo-of-wanna-play-football-or-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img src="https://images.pexels.com/photos/18895009/pexels-photo-18895009/free-photo-of-autumnal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
           </Slider>
           <h2> About this gig</h2>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim officia tempora minima quaerat voluptate quisquam totam. Nulla perferendis, sunt voluptatibus fuga deserunt architecto ad sapiente ratione odio molestias sit magnam.</p>
           <div className="seller">
            <h2> About the seller</h2>
            <div className="user">
               <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
               <div className="info">
                  <span>BERNOU Adem</span>
                  <div className="stars">
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <span>5</span>
                  </div>
                  <button>Contact Me</button>
               </div>
            </div>
            <div className="box">
                <div className="items">
                     <div className="item">
                       <span className="title">From</span>
                       <span className="desc">USA</span>
                     </div>
                     <div className="item">
                       <span className="title">Member since</span>
                       <span className="desc">Aug 2022</span>
                     </div>
                     <div className="item">
                       <span className="title">From</span>
                       <span className="desc">USA</span>
                     </div>
                     <div className="item">
                       <span className="title">Avr. response time</span>
                       <span className="desc">4 hours</span>
                     </div>
                     <div className="item">
                       <span className="title">Last delivery </span>
                       <span className="desc">1 days</span>
                     </div>
                     <div className="item">
                       <span className="title">Languages </span>
                       <span className="desc">English</span>
                     </div>
                </div>
                <hr/>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo perferendis iure impedit ipsum, in dolores maxime, dicta nisi, cumque ratione ut ipsa soluta magni aliquid architecto rem? Quam, officia officiis.
                </p>
            </div>
          
           </div>

           <div className="reviews">
             <h2>Reviews</h2>
             <div className="item">
              <div className="user">
                <img src="https://images.pexels.com/photos/4866043/pexels-photo-4866043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="info">
                   <span>Adem ayoub</span>
                   <div className="country">
                     <img src="https://cdn.countryflags.com/thumbs/algeria/flag-round-250.png" alt="" />
                     <span>Algeria</span>
                   </div>
                </div>
              </div>
              <div className="stars">
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <img src="/img/star.png" alt="" />
                    <span>5</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure iusto expedita vitae itaque. Inventore dolores obcaecati perferendis ab doloribus rem ratione quidem repellat repudiandae in mollitia corrupti, illo repellendus?</p>

             </div>
           </div>
         </div>
         <div className="right">

         </div>
      </div>
         
    </div>
  )
}

export default Gig

import React from 'react';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/TrustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import {cards} from "../../data";
import CatCard from '../../components/catCard/CatCard';

const Home = () => {
  return (
    <div className='home'>
          <Featured />
          <TrustedBy />
          <Slide slidesToShow={5} autoplayScroll={5}>
            {cards.map(card => (
              <CatCard key={card.id} item={card} /> 
            ))}
          </Slide>
          <div className="features">
             <div className="container">
                <div className="item">
                   <h1>A whole world of freelance talent at your fingertips</h1>
                   <div className="title">
                    <img src="./img/check.png" alt="" />
                     The best for every budget 
                   </div>
                   <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>

                   <div className="title">
                    <img src="./img/check.png" alt="" />
                     The best for every budget 
                   </div>
                   <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                   <div className="title">
                    <img src="./img/check.png" alt="" />
                     The best for every budget 
                   </div>
                   <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                   <div className="title">
                    <img src="./img/check.png" alt="" />
                     The best for every budget 
                   </div>
                   <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                </div>
                <div className="item">
                   <video src="" controls></video>
                </div>
             </div>
          </div>

    </div>
  )
}

export default Home

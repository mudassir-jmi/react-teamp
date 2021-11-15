import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className="img">
        <img src="images/bg.jpg" alt="" />
         <h1>Find Advantures You Want to talk about</h1>
      

      {/* search bar */}
        
          {/* <div className="container"> */}
            <div className="search_wrap search_wrap_1">
               <div className="search_box">
                   <input type="text" className="input" placeholder="☺Search Tour" />
                   <div className="btn btn_common">
                     <i class="fas fa-search"></i>
          </div>
             </div>
          </div>
     </div>
        
       
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           
            <CardItem className="card-1"
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
            </div>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Car Tour Africa 10 days'
              label='Mystery'
              path='/store list'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Cappadocia Turkey Scenic Tour'
              label='Adventure'
              path='/store list'
            />
            <CardItem
              src='images/img-8.jpg'
              text='New Zealand Hiking Tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        
      </div>
    </div>
  );
}

export default Cards;
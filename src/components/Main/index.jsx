import React, { useEffect } from 'react'
import Swiper from 'swiper';
import swipeFirst from './images/slider-light-slide-1.jpg'
import swipeSecond from './images/slider-light-slide-2.jpg'
import './index.scss'

let  mainSwiper
const MainCarousel = () => {
    useEffect(()=>{
       if(!mainSwiper) {
        mainSwiper = new Swiper('.swiper-container', {
            autoPlay: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            loop: true
        })
       }
    })
  
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={swipeFirst} alt="swipeFirst" />
                </div>
                <div className="swiper-slide">
                  <img src={swipeSecond} alt="swipeSecond" />
                </div>
                <div className="swiper-slide">
                  <img src={swipeFirst} alt="swipeFirst" />
                </div>
            </div>
         
            <div className="swiper-pagination"></div>
        </div>
    )
}

export default MainCarousel
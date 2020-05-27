import React,{ useState,useEffect } from 'react'
import Swiper from 'swiper';
import swipeFirst from './images/slider-light-slide-1.jpg'
import swipeSecond from './images/slider-light-slide-2.jpg'
import swipeThird from './images/slider-light-slide-3.jpg'
import './index.scss'

let mainSwiper
const MainCarousel = () => {

    useEffect(() => {
        if (!mainSwiper) {
            mainSwiper = new Swiper('.swiper-container',{
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                loop: true,
                autoplay: {
                  delay: 3000,
                  stopOnLastSlide: false,
                  disableOnInteraction: true,
                },
            })
        }

    })

    return (
        <div className="swiper-container" id="home-wrap">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={swipeFirst} alt="swipeFirst" />
                </div>
                <div className="swiper-slide">
                    <img src={swipeSecond} alt="swipeSecond" />
                </div>
                <div className="swiper-slide">
                    <img src={swipeFirst} alt="swipeThird" />
                </div>
            </div>

            <div className="swiper-pagination"></div>
        </div>
    )
}

export default MainCarousel
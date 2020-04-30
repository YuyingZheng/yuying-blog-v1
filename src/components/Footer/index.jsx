import React from 'react'
import './index.scss'
import facebookIcon from './images/facebook.svg'
import twitterIcon from './images/twitter.svg'
import gitIcon from './images/git.svg'
import qqIcon from './images/qq.svg'
import wechatIcon from './images/wechat.svg'
import phoneIcon from './images/phone.svg'
import svgIcon from './images/email.svg'
import addressIcon from './images/address.svg'
import personalImg  from './images/sunflower.jpg'


const socialIcons = [
    {name: 'twitter', icon: twitterIcon, desc: 'twitter'},
    {name: 'facebook', icon: facebookIcon, desc: 'facebook'},
    {name: 'git', icon: gitIcon, desc: 'twitter'},
    {name: 'qq', icon: qqIcon, desc: 'qq'},
    {name: 'wechat', icon: wechatIcon, desc: 'wechat'}
]

const contactInfo = [
    {title: 'PHONE', icon: phoneIcon, desc: '19959285169'},
    {title: 'E-MAIL', icon: svgIcon, desc: '719982185@qq.com'},
    {title: 'ADDRESS', icon: addressIcon, desc: 'Xiamen Fujian Province'}
]

const Footer = ()=>{
   return (
       <div className="footer-wrap section">
          <div className="personal-info-wrap">
           <div className="global-width personal-info">
               
                <div className="personal-img">
                  <div className="img-box">
                   <img src={personalImg} alt=""/>
                  </div>
                </div>
                <ul className="personal-text">
            
                    {
                        contactInfo.map(item=>{
                            return (
                            <li className="icon-item" key={item.title.toString()}>
                                <h6 className="title">{item.title}</h6>
                                <div className="desc"><span className="icon icon-phone"><img src={item.icon} alt="" title={item.desc}/></span><span className="text">{item.desc}</span></div>
                            </li> )
                        })
                    }
                </ul>
            </div>
        </div>
        <div>
            <div className="copy-right global-width">
                <span className="text">Jady©2020.    All rights reserved</span>
                <ul className="social-icons">
                {
                    socialIcons.map(item=>{
                        return (
                            <li className="icon icon-twitter" key={item.name.toString()}>
                            <img src={item.icon} alt="" title={item.name}/>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
        </div>
       </div>
   )
}

export default Footer
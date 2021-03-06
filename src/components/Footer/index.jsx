import React,{ useState,useEffect } from 'react'
import './index.scss'
import facebookIcon from './images/facebook.svg'
import twitterIcon from './images/twitter.svg'
import gitIcon from './images/git.svg'
import qqIcon from './images/qq.svg'
// import wechatIcon from './images/wechat.svg'
import phoneIcon from './images/phone.svg'
import svgIcon from './images/email.svg'
import addressIcon from './images/address.svg'
import weiboIcon from './images/weibo.svg'
import personalImg from './images/yy-02.png'
import { FormattedMessage } from 'react-intl';


const socialIcons = [
    { name: 'twitter',icon: twitterIcon,desc: 'twitter',url: 'https://twitter.com/Jady59023584' },
    { name: 'facebook',icon: facebookIcon,desc: 'facebook',url: "https://www.facebook.com/jady.jady.311056" },
    { name: 'git',icon: gitIcon,desc: 'github',url: "https://github.com/YuyingZheng" },
    { name: 'qq',icon: qqIcon,desc: 'qq', url: "https://tim.qq.com/" },
    { name: 'weibo',icon: weiboIcon,desc: 'weibo', url: 'https://weibo.com/3042725611/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1'}
]

const contactInfo = [
    {
        title: <FormattedMessage id="component.contact.title.phone" />,
        icon: phoneIcon,desc: <FormattedMessage id="component.contact.phone" />
    },
    {
        title: <FormattedMessage id="component.contact.title.email" />,
        icon: svgIcon,
        desc: <FormattedMessage id="component.contact.email" />
    },
    {
        title: <FormattedMessage id="component.contact.title.address" />,
        icon: addressIcon,
        desc: <FormattedMessage id="component.contact.address" />
    }
]

const Footer = () => {
    let [slideToLeft,setSlideToLeft] = useState(false)

    useEffect(() => {
        const contactWrap = document.getElementById('contact-wrap')

        const bindScroll = function () {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scrollTop + document.body.offsetHeight >= contactWrap.offsetTop + 200) {
                setSlideToLeft(true)
            }
        }

        window.addEventListener('scroll',bindScroll);
    })

    const goPage = function (url) {
        window.open(url,'_blank')
    }

    return (
        <div className="footer-wrap section">
            <div className="personal-info-wrap" id="contact-wrap">
                <div className="global-width personal-info">

                    <div className={["personal-img",slideToLeft ? "slideToLeft" : null].join(' ')}>
                        <div className="img-box">
                            <img src={personalImg} alt="" />
                        </div>
                    </div>
                    <ul className="personal-text">

                        {
                            contactInfo.map((item, index) => {
                                return (
                                    <li className="icon-item" key={index}>
                                        <h6 className="title">{item.title}</h6>
                                        <div className="desc"><span className="icon icon-phone"><img src={item.icon} alt="" title={item.desc} /></span><span className="text">{item.desc}</span></div>
                                    </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div>
                <div className="copy-right global-width">
                    <span className="text"><FormattedMessage id="component.contact.copyright" /></span>
                    <ul className="social-icons">
                        {
                            socialIcons.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a className="icon icon-twitter" onClick={goPage.bind(this,item.url)}>
                                            <img src={item.icon} alt="" title={item.name} />
                                        </a>
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
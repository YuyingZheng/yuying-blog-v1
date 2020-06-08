import Logo from './images/logo.png'
import LangIcon from './images/lang.svg'
import './index.scss'
import React,{ useState,useEffect } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';

const navArr = [
    { label: <FormattedMessage id="component.nav.label.home" />,href: "/home",id: 'home-wrap' },
    { label: <FormattedMessage id="component.nav.label.career" />,href: "/career",id: 'career-wrap' },
    { label: <FormattedMessage id="component.nav.label.skills" />,href: "/skills",id: 'skills-wrap' },
    { label: <FormattedMessage id="component.nav.label.education" />,href: "/eductaion",id: 'education-wrap' },
    { label: <FormattedMessage id="component.nav.label.contact" />,href: "/contact",id: 'contact-wrap' }
]

const signature = <FormattedMessage id="component.header.signature" />
const Header = ({ locale,setLocale }) => {

    let [fixedHeader,setFixedHeader] = useState(false)
    let [meunAcitve,setMenuActive] = useState(false)


    useEffect(() => {
        const bindScroll = function () {
            if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
                setFixedHeader(true);
            } else {
                setFixedHeader(false);
            }
        }

        window.addEventListener('scroll',bindScroll.bind(this));

        return () => {
            window.removeEventListener('resize',bindScroll)
        }

    })

    const scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName)
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start',behavior: 'smooth' }) }
        }
    }

    const switchActiveNav = (item) =>{
        scrollToAnchor(item.id)
        setMenuActive(!meunAcitve)
    }

    const switchLang = function(e) {
        e.preventDefault();
        locale = locale === 'zh' ? 'en' : 'zh';
        setMenuActive(!meunAcitve)
    }

    return (
        <div className={["header",fixedHeader ? "fixed" : null].join(' ')}>
            <div className="nav-aside-outer">
                <div className="nav-aside-inner global-width">
                    <button className={["nav-toggle show-mobile",meunAcitve ? "menu-active" : null].join(' ')}
                        onClick={() => setMenuActive(!meunAcitve)}>
                        <span></span>
                    </button>
                    <h1 className="logo-wraper" href="/">
                        <img src={Logo} className="app-logo" alt="logo" />
                    </h1>

                    <p className="signature show-pc">
                        {signature}
                    </p>
                </div>
            </div>

            <div className="nav-main-outer show-pc">
                <div className="nav-main-inner global-width">

                    <nav className="nav">
                        {navArr.map((item,index) => {
                            return <Link href={item.href} key={index}>
                                <a onClick={() => scrollToAnchor(item.id)}>{item.label}</a>
                            </Link>
                        })}
                    </nav>

                    <span className="sign arrow">
                        <a className="lang-switch"
                            onClick={e => {
                                e.preventDefault();
                                setLocale(locale === 'zh' ? 'en' : 'zh')
                            }}>
                            <img src={LangIcon} alt="" className="lang-pic" />
                            {locale == 'zh' ? <span className="zh">中文</span> : <span className="en">en</span>}
                        </a>
                    </span>
                </div>
            </div>

            <div className={["nav-bar-warp-mobile show-mobile",meunAcitve ? "menu-active" : null].join(' ')}>
                <div className="layer-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="layer-content">
                    <div className="nav-menu">
                        {navArr.map((item,index) => {
                            return <Link href={item.href} key={item.id}>
                                <a onClick={() => switchActiveNav(item)}>{item.label}</a>
                            </Link>
                        })}
                    </div>

                    <p className="mobile-lang-switch">
                        <a className="lang-switch"
                            onClick={e => 
                                switchLang(e)
                            }>
                            <img src={LangIcon} alt="" className="lang-pic" />
                            {locale == 'zh' ? <span className="zh">中文</span> : <span className="en">en</span>}
                        </a>
                    </p>
                </div>
            </div>


        </div>)
}

export default Header;

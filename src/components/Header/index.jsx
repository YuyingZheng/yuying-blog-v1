import Logo from './images/logo.png'
import './index.scss'
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';

const navArr = [
    { label: 'HOME',href: "/home", id: 'home-wrap' },
    { label: 'CAREER',href: "/career" , id: 'career-wrap'},
    { label: 'SKILLS',href: "/skills", id: 'skills-wrap' },
    { label: 'EDUCATION',href: "/eductaion", id: 'education-wrap' },
    { label: 'CONTACT',href: "/contact", id: 'contact-wrap'}
]

const signature = 'The day will become simple and beautiful as long as we grow towards the sun. '
const lang="en"

const Header = () => {

    let [ fixedHeader, setFixedHeader ] = useState(false)
    let [ meunAcitve, setMenuActive ] = useState(false)
  

    useEffect(() => {
      const toggleLang = function() {
          
      }
      const bindScroll = function () {
        // debugger
        if(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
            setFixedHeader(true);
        } else {
            setFixedHeader(false);
        }
      }
  
      window.addEventListener('scroll',bindScroll.bind(this));
  
      return ()=>{
        window.removeEventListener('resize', bindScroll)
      }

    })

    const scrollToAnchor = (anchorName) => {
        // debugger
        if(anchorName) {
            let anchorElement = document.getElementById(anchorName)
            if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'})}

            
        }
    }

    return (
        <div className={["header",fixedHeader ? "fixed" : null ].join(' ')}>
            <div className="nav-aside-outer">
                <div className="nav-aside-inner global-width">
                    <button className={["nav-toggle show-mobile", meunAcitve ? "menu-active" : null ].join(' ')}
                     onClick={()=>setMenuActive(!meunAcitve)}>
                        <span></span>
                    </button>
                    <h1 className="logo-wraper" href="/">
                        <img src={Logo} className="app-logo" alt="logo" />
                    </h1>

                    <p className="signature show-pc">
                      <FormattedMessage id="component.header.signature" />
                    </p>
                </div>
            </div>

            <div className="nav-main-outer show-pc">
                <div className="nav-main-inner global-width">

                    <nav className="nav">
                        {navArr.map((item, index) => {
                            return <Link href={item.href} key={item.label.toString()}>
                                <a onClick={()=>scrollToAnchor(item.id)}>{item.label}</a>
                            </Link>
                        })}
                    </nav>

                    <span className="sign arrow"><a className="lang-switch" onClick={()=>toggleLang()}>{lang}</a></span>
                </div>
            </div>

            <div className={["nav-bar-warp-mobile show-mobile", meunAcitve ? "menu-active" : null ].join(' ')}>
               <div className="layer-bg">
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
                 <div></div>
               </div>
               <div className="layer-content">
                 <div className="nav-menu">
                   {navArr.map((item, index) => {
                        return <Link href={item.href} key={item.label.toString()}>
                            <a onClick={()=>scrollToAnchor(item.id)}>{item.label}</a>
                        </Link>
                    })}
                 </div>
               </div>
            </div>

            
        </div>)
}

export default Header;

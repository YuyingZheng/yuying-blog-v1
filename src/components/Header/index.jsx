import Logo from './images/logo.png'
import './index.scss'
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const navArr = [
    { label: 'HOME',href: "/home", id: 'home-wrap' },
    { label: 'CAREER',href: "/career" , id: 'career-wrap'},
    { label: 'SKILLS',href: "/skills", id: 'skills-wrap' },
    { label: 'EDUCATION',href: "/eductaion", id: 'education-wrap' },
    { label: 'CONTACT',href: "/contact", id: 'contact-wrap'}
]

const signature = 'The day will become simple and beautiful as long as we grow towards the sun. '
const menuText = ''



const Header = () => {

    let [ fixedHeader, setFixedHeader ] = useState(false)


    useEffect(() => {
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

    function scrollMoothTo (index) {
    //   debugger
       return console.log(index);
    }

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
                    <button className="nav-toggle show-mobile">
                        <span></span>
                    </button>
                    <h1 className="logo-wraper" href="/">
                        <img src={Logo} className="app-logo" alt="logo" />
                    </h1>

                    <p className="signature show-pc">{signature}</p>
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

                    <span className="sign arrow">{menuText}</span>
                </div>
            </div>

            <div className="nav-bar-warp-mobile show-mobile">
                <div className="nav-bar-mobile">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="" className="nav-link">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">EDUCATION</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">CAREER</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">HOBBY</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>)
}

export default Header;

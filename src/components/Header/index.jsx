import Logo from './images/logo.png'
import './index.scss'
import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const navArr = [
    { label: 'HOME',href: "/home" },
    { label: 'EDUCATION',href: "/eductaion" },
    { label: 'CAREER',href: "/career" },
    { label: 'HOBBY',href: "/hobby" },
    { label: 'CONTACT',href: "/contact" }
]

const signature = 'The day will become simple and beautiful as long as we grow towards the sun, '
const menuText = ''

const Header = () => {
    return (
    <div className="header">
        <div className="nav-aside-outer">
            <div className="nav-aside-inner global-width">
                <h1 className="logo-wraper" href="/">
                    <img src={Logo} className="app-logo" alt="logo" />
                </h1>

                <p className="signature">{signature}</p>
            </div>
        </div>

        <div className="nav-main-outer">
            <div className="nav-main-inner global-width">
        
                <nav className="nav">
                    {navArr.map(item => {
                        return <Link href={item.href}>
                            <a>{item.label}</a>
                        </Link>
                    })}
                </nav>

                <span className="sign arrow">{menuText}</span>
            </div>
        </div>
    </div>)
}

export default Header;

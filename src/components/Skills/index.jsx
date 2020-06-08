import React, {useState, useEffect} from 'react'
import './index.scss'
import htmlIcon from './images/html.svg'
import cssIcon from './images/css.svg'
import jsIcon from './images/js.svg'
import gitIcon from './images/git.svg'
import axureIcon from './images/axure.svg'
import webpackIcon from './images/webpack.svg'
import scrumIcon from './images/scrum.svg'
import frameworkIcon from './images/framework.svg'
import { FormattedMessage } from 'react-intl';

const skillArr = [
    { name: 'HTML',icon: htmlIcon,desc: 'html、 html5' },
    { name: 'CSS',icon: cssIcon,desc: 'css2、 css3、 scss、less' },
    { name: 'JS',icon: jsIcon,desc: 'JS、 ES6' },
    { name: 'JS Framework ',icon: frameworkIcon,desc: 'Vue, Avalon、 Jquery、 React、 Element、Ant Design UI' },
    { name: 'Automated Build Tools',icon: webpackIcon,desc: 'Webpack、 Gulp、Grunt' },
    { name: 'Code Management Tools',icon: gitIcon,desc: 'Git、SVN' },
    { name: 'Draw Tools',icon: axureIcon,desc: 'Axure、PS' },
    { name: 'Development Mode',icon: scrumIcon,desc: 'Scrum、WaterFall' }
]

const Skills = () => {
    let [ slideToLeft, setSlideToLeft ] = useState(false)

    useEffect(() => {
        let slideToLeft = false
        const skillsWrap = document.getElementById('skills-wrap')
        
        const bindScroll = function () {
        let  scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          if(scrollTop + document.body.offsetHeight >= skillsWrap.offsetTop + 200) {
            setSlideToLeft(true)
          }
        }
    
        window.addEventListener('scroll',bindScroll);
    })

    return (
        <div className="skills-wrap section clearfix" id="skills-wrap">
            <h2 className="sub-title"> <FormattedMessage id="component.skills.title" /></h2>
            <ul className="skills global-width clearfix">
                {skillArr.map((item, index) => {
                    return (
                        <li key={index}  className={["skill-item",slideToLeft ? "slideToLeft" : null ].join(' ')}>
                            <p className="img-wrap">
                                <span className="icon icon-html">
                                    <img src={item.icon} alt={item.desc} />
                                </span>
                            </p>
                            <h6 className="desc-title">{item.name}</h6>
                            <p className="desc">
                                {item.desc}
                            </p>
                        </li>)
                })
                }
            </ul>
        </div>
    )
}

export default Skills
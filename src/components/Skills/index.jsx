import React from 'react'
import './index.scss'

import htmlIcon from './images/html.svg'
import cssIcon from './images/css.svg'
import jsIcon from './images/js.svg'
import gitIcon from './images/git.svg'
import reactIcon from './images/react.svg'
import vueIcon from './images/vue.svg'
import axureIcon from './images/axure.svg'
import webpackIcon from './images/webpack.svg'
import scrumIcon from './images/scrum.svg'
import frameworkIcon from './images/framework.svg'

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
    return (
        <div className="skills-wrap section clearfix">
            <h2 className="sub-title">MY TECHNOLOGY SKILLS</h2>
            <ul className="skills global-width">
                {skillArr.map(item => {
                    return (
                        <li className="skill-item" key={item.name.toString()}>
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
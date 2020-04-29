import React from 'react'
import './index.scss'


const educationArr = [
    {time: '2008.09 ~ 2011.07', school: 'Yuxi NO.1 Middle School', major: 'Science Department'},
    {time: '2011.09 ~ 2015.07', school: 'JiMei University', major: 'Science And Technology'},
    {time: '2011.09 ~ 2015.07', school: 'JiMei University', major: 'Business English'}
]

const Education = () => {
    return (
        <div className="eduction-wrap section">
        <h2 className="sub-title">EDUCATION EXPERIENCE</h2>
          <div className="education timeline global-width">
            <ul>
                {
                    educationArr.map(item=>{
                       return <li>
                        <div className="content">
                            <h6>
                                TIME：<time>{item.time}</time>
                            </h6>
                            <p>SCHOOL: <span>{item.school}</span></p>
                            <p>MAJOR: <span>{item.major}</span></p>
                        </div>
                      </li>
                    })
                }
            </ul>
          </div>
        </div>
    )
}

export default Education
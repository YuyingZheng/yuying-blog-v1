import React, {useState, useEffect} from 'react'
import './index.scss'


const educationArr = [
    {time: '2008.09 ~ 2011.07', school: 'Yuxi NO.1 Middle School', major: 'Science Department'},
    {time: '2011.09 ~ 2015.07', school: 'JiMei University', major: 'Science And Technology'},
    {time: '2011.09 ~ 2015.07', school: 'JiMei University', major: 'Business English'}
]

const Education = () => {
    let [ slideToBottom, setSlideToBottom ] = useState(false)
       

    useEffect(() => {
        let slideToBottom = false
        const eductionWrap = document.getElementById('education-wrap')
        
        const bindScroll = function () {
        let  scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if(scrollTop + document.body.offsetHeight >= eductionWrap.offsetTop + 200) {
                setSlideToBottom(true)
            }
        }
    
        window.addEventListener('scroll',bindScroll);
    })

    return (
        <div className="eduction-wrap section" id="education-wrap">
        <h2 className="sub-title">EDUCATION EXPERIENCE</h2>
          <div className="education timeline global-width">
            <ul>
                {
                    educationArr.map(item=>{
                       return <li key={item.major.toString()}>
                        <div className={["content",slideToBottom ? "slideToBottom" : null ].join(' ')}>
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
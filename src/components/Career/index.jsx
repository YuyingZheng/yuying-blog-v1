import React, {useState, useEffect} from 'react'
import careerPic from './images/career.jpg'
import './index.scss'

const subTitle = 'A Few Words About Career',
    paramOne = 'Work as a quality assaurance in Yardi, a IT company, i mainly responsible for software quality. Writting test cases and automation testing script to verify software quality.',
    paramTwo = 'I make job transform to a front end developer in Yardi, then i step into creating industry. From the begining, i work as a htmler,which in charger of html and css in project; Next....';

const Career = () => {
        let [ slideToLeft, setSlideToLeft ] = useState(false)
       

        useEffect(() => {
            const careerPic = document.getElementById('career-pic')
            
            const bindScroll = function () {
            let  scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
              if(scrollTop + document.body.offsetHeight >= careerPic.offsetTop + 200) {
                setSlideToLeft(true)
              }
            }
        
            window.addEventListener('scroll',bindScroll);
        })
  
    return (
        <div className="career-wrap section" id="career-wrap">
            <div className="career global-width">
                <div id="career-pic" className={["career-pic",slideToLeft ? "slideToLeft" : null ].join(' ')}>
                    <img src={careerPic} alt="careerPic" />
                </div>
                <div className="career-text">
                    <article className={["article",slideToLeft ? "slideToBottom" : null ].join(' ')}>
                        <h3 className="sub-title">{subTitle}</h3>
                        <p className="param">{paramOne}</p>

                        <p className="param">{paramTwo}</p>
                        <div className="button-wrap">
                            <button className="button button-blue max">LEARN MORE</button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}


export default Career

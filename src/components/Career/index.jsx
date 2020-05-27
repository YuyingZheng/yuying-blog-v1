import React, {useState, useEffect} from 'react'
import careerPic from './images/career.jpg'
import './index.scss'

const subTitle = 'A Few Words About Career',
    paramOne = 'COST Accountant was founded in 1995 and since that time has grown into the largest CPA firm in the area. We are an assertive firm providing our clients a full range of services.',
    paramTwo = 'COST Accountant was founded in 1995 and since that time has grown into the largest CPA firm in the area. We are an assertive firm providing our clients a full range of services.';

const Career = () => {
    // let [ slideToLeft, setSlideToLeft ] = useState(false)

    // useEffect(() => {

        // const careerPic = document.getElementById('career-pic')

        // const bindScroll = function () {
        //   if(document.documentElement.scrollTop >= careerPic.offsetTop - document.documentElement.clientHeight-62) {
        //     setSlideToLeft(true);
        //   }
        // }
    
        // window.addEventListener('scroll',bindScroll.bind(this));
    //   })

    return (
        <div className="career-wrap section" id="career-wrap">
            <div className="career global-width">
                <div id="career-pic" className="career-pic">
                    <img src={careerPic} alt="careerPic" />
                </div>
                <div className="career-text">

                    <article className="article">
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

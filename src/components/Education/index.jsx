import React,{ useState,useEffect } from 'react'
import './index.scss'
import { FormattedMessage } from 'react-intl';


const educationArr = [
    {
        time: <FormattedMessage id="component.education.highschool.time" />,
        school: <FormattedMessage id="component.education.highschool.school" />,
        major: <FormattedMessage id="component.education.highschool.major" />
    },
    {
        time: <FormattedMessage id="component.education.university.time" />,
        school: <FormattedMessage id="component.education.university.school" />,
        major: <FormattedMessage id="component.education.university.major" />
    },
    {
        time: <FormattedMessage id="component.education.university.time" />,
        school: <FormattedMessage id="component.education.university.school" />,
        major: <FormattedMessage id="component.education.university.secondMajor" />
    }
]

const Education = () => {
    let [slideToBottom,setSlideToBottom] = useState(false)


    useEffect(() => {
        let slideToBottom = false
        const eductionWrap = document.getElementById('education-wrap')

        const bindScroll = function () {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scrollTop + document.body.offsetHeight >= eductionWrap.offsetTop + 200) {
                setSlideToBottom(true)
            }
        }

        window.addEventListener('scroll',bindScroll);
    })

    return (
        <div className="eduction-wrap section" id="education-wrap">
            <h2 className="sub-title"> <FormattedMessage id="component.education.title" /></h2>
            <div className="education timeline global-width">
                <ul>
                    {
                        educationArr.map(item => {
                            return <li key={item.major.toString()}>
                                <div className={["content",slideToBottom ? "slideToBottom" : null].join(' ')}>
                                    <h6>
                                        <FormattedMessage id="component.education.title.time" />:<time>{item.time}</time>
                                    </h6>
                                    <p><FormattedMessage id="component.education.title.school" />:<span>{item.school}</span></p>
                                    <p className="mt10"><FormattedMessage id="component.education.title.major" />: <span>{item.major}</span></p>
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
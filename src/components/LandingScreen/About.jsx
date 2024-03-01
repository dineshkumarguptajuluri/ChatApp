import React from 'react'
import '../Styles/About.css'
import image1 from '../img/image1.png'
import image2 from '../img/image2.png'

const About = () => {
  return (
    <div className="about">
        <div className="left">
            <img src={image1} alt="" />
            <img src={image1} alt="" />
            <img src={image1} alt="" />
            <img src={image1} alt="" />
            <img src={image2} alt="" />
        </div>
        <div className="right">
            <div>
                <span className='text'>ABOUT </span>
                <span>US?</span>
            </div>
            <div className='content'>
                <div><span>We are a group of passionate developers who have come together to create an application that can</span></div>
                <div><span>We are a group of passionate developers who have come together to create an application that can</span></div>
                <div><span>We are a group of passionate developers who have come together to create an application that can</span></div>
                <div><span>We are a group of passionate developers who have come together to create an application that can</span></div>
                <div><span>We are a group of students passionate about technology and innovation, who have come together</span></div>
            </div>
        </div>
    </div>
  )
}

export default About
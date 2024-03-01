import React from 'react'
import '../Styles/Hero.css'
import Header from '../pages/Header'

import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const [text] =useTypewriter({
    words : ['Learning'],
    loop:{},
    typeSpeed:110,
    deleteSpeed:60
  });
  const naviagtor=useNavigate();
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>
            <div className="hero-text">
              <div>
                <span className='text'>VISHNU </span>
                <span>Institute Of Technology</span>
              </div>
              <div>

                <span>Universal {text}<Cursor cursorStyle='.'/></span>
              </div>
              <div className='text1'>
                <span>ignite the minds of the students through academic excellence so as to bring about social transformation and prosperity</span>
              </div>
            </div>
            <div className='figures'>
              <div>
                <span>+1,470</span>
                <span>Placments This Year</span>
              </div>
              <div>
                <span>+1000</span>
                <span>Students In Take</span>
              </div>
              <div>
                <span>+50</span>
                <span>Hackthons Conducted</span>
              </div>
            </div>
            <div className="hero-button">
              <bottons className='btn'>Create Profile</bottons>
              <bottons className='btn'>Post</bottons>
            </div>
        </div>
        <div className="right-h">
          <button  onClick={()=>{
            naviagtor('/login')
          }}    className='btn1'>Login</button>
          <button onClick={()=>{
            naviagtor('/register')
          }} className='btn1'>SignUp</button>
        </div>
    </div>
  )
}

export default Hero;
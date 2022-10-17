import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/dipakimg3.png'
import Headersolial from './headersolial'
const header = () => {
  return (
    <header>
      <div className="container header__container">

        <h4>Hello , I am</h4>
        <h1>Dipak Kumar Paul</h1>
        <h4 className="text-light">Web Developer</h4>
        <CTA />
        <Headersolial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scrollDown'> Scroll Down</a>
      </div>
    </header>
  )
}

export default header
import React from 'react'
import './about.css'
import ME from '../../assets/dipakimg.jpg'
import {FaUserGraduate} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'
import {BsFilePersonFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__containt">
          <div className="about__cards">
          <article className='about__card'>
              <BsFilePersonFill className='about__icon'/>
              <h3>Personal Details</h3>
              <h4>Dipak Kumar Paul</h4>
              <h5>Location :- Kolkata</h5>
              <h5>Email :- pauldipakkr@gmail.com</h5>
              <h5>Mobile :- 8967671041</h5>
            </article>

            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h3>Educatioin</h3>
              <h4>B.Tech,2016</h4>
              <h5>Asansol Engineering College</h5>
              <h4>HS,2011</h4>
              <h5>Fulia Sikshaniketan</h5>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h3>Experience</h3>
              <h4> <a href="https://www.mindbrewstudio.com/index.html"> Mind Brew Studio </a> - Currently Working</h4>
              <h5>Web Developer</h5>
              <h4> <a href="http://www.stmarysgroupofinstitutions.in/"> St.Mary's Arcadian School </a> - Formar</h4>
              <h5>Assistant Teacher</h5>

            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default About
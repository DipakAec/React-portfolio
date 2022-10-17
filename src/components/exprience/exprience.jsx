import React from 'react'
import './exprience.css'
import {RiHtml5Fill} from 'react-icons/ri'
import {DiCss3} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {SiPhp} from 'react-icons/si'
import {DiMysql} from 'react-icons/di'
import {DiWordpress} from 'react-icons/di'

const exprience = () => {
  return (
    <section id='experience'>
      <h2>Skills</h2>
      <container className="container experience_container">
       
        <div className="experience_fontend">
          <h3>FontEnd Development</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <RiHtml5Fill className='experience_details-icon'/>
                <div>
                <h4>HTMl</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
              <DiCss3 className='experience_details-icon'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
              <DiJavascript1 className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
              

              <article className='experience_details'>
              <DiReact className='experience_details-icon'/>
              <div>
              <h4>React JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>


            </div>
        </div>
        
        <div className="experience_backend">
          <h3>BackEnd Development</h3>
          <div className="experience_content">
          <article className='experience_details'>
              <SiPhp className='experience_details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <DiMysql className='experience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

              <article className='experience_details'>
              <DiWordpress className='experience_details-icon'/>
              <div>
              <h4>WordPress</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

          </div>

        </div>
      </container>
    </section>
  )
}

export default exprience
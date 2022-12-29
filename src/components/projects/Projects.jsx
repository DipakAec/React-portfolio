import React from 'react'
import './Projects.css'
import IMG1 from '../../assets/projects/bmi.png'
import IMG2 from '../../assets/projects/movie.png'
import IMG3 from '../../assets/projects/weather.png'


const data = [
  
  {
    id:1,
    img:IMG1,
    title:'BMI Calculetor in React',
    live:'https://dipakaec.github.io/React-BMI-calculetor/'
  }
,
  {
    id:2,
    img:IMG2,
    title:'Movie Search in React',
    live:'https://dipakaec.github.io/movie-Search-React/'
  }
  ,
  {
    id:3,
    img:IMG3,
    title:'Weather App in React',
    live:'https://dipakaec.github.io/React-Weather-App/'
  }

]

const Projects = () => {
  return (
    <section id='projects'>
    <h5>My Projects in React</h5>
      <h2>Projects </h2>
      
      <div className='container projects_container'>
        {
                    data.map(({id, img, title, live}) => {
                      return(
            
                        <article key={id} className='projects-item'>
                              <div className='projects-item-image'>
                                <img src={img} alt="" />
                              </div>
                               <h3>{title}</h3>
                              <a href={live} className='btn btn-primary' target="blank">See Live</a>
                        </article>
            
                      )
            
                    })
        }
      </div>
    </section>
  )
}

export default Projects
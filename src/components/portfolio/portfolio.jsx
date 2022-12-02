import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/contempory.png'
import IMG2 from '../../assets/uma.png'
import IMG3 from '../../assets/raga.png'
import IMG4 from '../../assets/sibarita.png'

const data = [
  
  {
    id:1,
    img:IMG2,
    title:'UMA group',
    technology:'HTML,CSS,JS',
    live:'https://mindbrewstudio.com/development/uma/UMAGroup/index.html'
  }
,
  {
    id:2,
    img:IMG1,
    title:'Contempory Real stete',
    technology:'WordPress',
    live:'https://contemporaryrealestate.ae/'
  }
  ,
  {
    id:3,
    img:IMG3,
    title:'Raga Kitchen solutions',
    technology:'HTML,CSS,JS,PHP,MySql',
    live:'https://ragakitchen.com/'
  }
,
  {
    id:4,
    img:IMG4,
    title:'Madame Sibarita',
    technology:'HTML,CSS,JS,PHP,MySql,WordPress',
    live:'http://madamesibarita.com/'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Works in Teams </h5>
      <h2>Portfolio</h2>
      
      <div className='container portfolio_container'>
        {
                    data.map(({id, img, title,technology, live}) => {
                      return(
            
                        <article key={id} className='portfolio-item'>
                              <div className='portfolio-item-image'>
                                <img src={img} alt="" />
                              </div>
                               <h3>{title}</h3>
                               <h4>Technology: {technology}</h4>
                              <a href={live} className='btn btn-primary'>See Live</a>
                        </article>
            
                      )
            
                    })
        }
      </div>
    </section>
  )
}

export default portfolio

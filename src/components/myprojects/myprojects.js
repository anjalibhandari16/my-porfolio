import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img6.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>Fitness Slot Booking System</h3>
            <h3><pre> </pre></h3>
            <small className='text-light'>ReactJs | HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/anjalibhandari16/fitness-slot-booking-system" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://fitness-slot-booking-system.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
              
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Weather Forecast Application</h3>
            <small className='text-light'>ReactJs | HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/anjalibhandari16/weather-forecast-application" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://weather-forecast-application-teal.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Amazon Clone</h3>
            <h3><pre> </pre></h3>
            <small className='text-light'>HTML | CSS</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/anjalibhandari16/amazon-clone" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://amazon-clone-iota-two.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Enhanced Table Component</h3>
            <small className='text-light'>ReactJs | HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/anjalibhandari16/enhanced-table-component" target="_blank" rel='noreferrer' className='btn'>Github</a>  
              <a href="https://enhanced-table-component.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/anjalibhandari16/my-porfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://my-porfolio-anjalibhandari.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Myprojects
import React from 'react'
import './about.css'
import myImage from '../../assets/me-new.png'
import { GiGraduateCap } from 'react-icons/gi'
// import { BsBookmarkStar } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'

const About = () => {
    return (
        <section id='about'>

            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={myImage} alt="Me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card'>
                            <GiGraduateCap className='about__icon' />
                            <h5>M.Tech</h5>
                            <small>CSE<br /><i>Indian Institute of Information Technology (IIIT) Pune</i></small>
                        </article>

                        <article className='about__card'>
                            <GiGraduateCap className='about__icon' />
                            <h5>B.Tech</h5>
                            <small>IT<br /><i>Rajkiya Engineering College Ambedkar Nagar</i></small>
                        </article>

                        <article className='about__card'>
                            <TfiWorld className='about__icon' />
                            <h5>Domains</h5>
                            <small>
                                <ul>
                                    <li>Web Development</li>
                                    <li>Shipping and Logistics</li>
                                </ul>
                            </small>
                        </article>



                    </div>
                    <p>
                        <p>
                            I'm an <b>Experienced Software Engineer </b>
                            with expertise in React.js, Redux, Javascript, HTML5 and CSS3.
                            Proven track record in creating user-friendly interfaces and implementing robust systems.
                            Skilled in leading development and implementation of innovative features, code reviews, and migration of business processes.
                        </p>
                        <p>
                            I have 2.4 years of professional experience working at Cogoport and WebAffinity, where I contributed to the shipment and logistics domain, and 10 months of internship experience as a full stack developer at TCS.
                        </p>


                    </p>

                </div>
            </div>
        </section>
    )
}

export default About
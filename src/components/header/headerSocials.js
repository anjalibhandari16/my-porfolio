import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/anjali-bhandari-9767ba150/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/anjalibhandari464" target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials
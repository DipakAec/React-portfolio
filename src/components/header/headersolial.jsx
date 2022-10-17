import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImFacebook2} from 'react-icons/im'

const headersolial = () => {
  return (
    <div className='header__socials'>
            <a href="https://www.linkedin.com/in/dipak-kumar-paul-368379128/" target="_blank"> <BsLinkedin/> </a>
            <a href="https://github.com/DipakAec" target="_blank"><FaGithub/></a>
            <a href="https://www.facebook.com/idipakaec/" target="_blank"><ImFacebook2/></a>
    </div>
  )
}

export default headersolial
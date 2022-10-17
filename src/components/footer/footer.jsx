import React from 'react'
import './footer.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoLinkedin} from 'react-icons/io';
import {FaInstagramSquare} from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaTwitterSquare} from 'react-icons/fa';
import {AiFillCodepenSquare} from 'react-icons/ai';
import {SiReact} from 'react-icons/si';

const footer = () => {
  return (
    <footer>
      <a href="" className='footer_logo'>Dipal Kumar Paul</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/dipak-kumar-paul-368379128/"> <IoLogoLinkedin/> </a>
        <a href="https://github.com/DipakAec"> <FaGithubSquare/></a>
        <a href="https://www.facebook.com/idipakaec/"> <FaFacebookSquare/> </a>
        <a href="https://www.instagram.com/dipakaec/"><FaInstagramSquare/></a>
        <a href="https://codepen.io/your-work/"> <AiFillCodepenSquare/></a>
        <a href="https://twitter.com/Dipak_1993"><FaTwitterSquare/></a>
      </div>

      <div className='footer_copyright'>
        <p> © Dipak Kumar Paul.Build on React <SiReact/> </p>
      </div>
    </footer>
  )
}

export default footer
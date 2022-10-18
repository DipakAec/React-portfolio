import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'




const contact = () => {

  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>pauldipakkr@gmail.com</h5>
            <a href="mailto:pauldipakkr@gmail.com">Send Me a Mail</a>
          </article>

          <article className='contact_option'>
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Dipak Kumar Paul</h5>
            <a href="https://m.me/idipakaec">Message Me</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>8967671041</h5>
            <a href="https://api.whatsapp.com/send?phone=+918967671041">WhatsApp Me</a>
          </article>

        </div>

        <form>
          <input type="text" name='name' placeholder='Enter Your Name' />
          <input type="text" name='email' placeholder='Enter Your E-mail Id'/>
          <textarea name="message"   rows="10" placeholder='Write Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Sent Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact

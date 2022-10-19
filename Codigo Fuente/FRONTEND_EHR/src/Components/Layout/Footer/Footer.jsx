import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook,faInstagram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { ContactUs } from '../../UI/ContactUs/ContactUs';


export const Footer = () => {
  return (
    <div className='register-footer-container'>
        <NavLink to="/"><p className='footer-title'>Easy House Rent</p></NavLink>
        <div className="footer-icons">
          <a href='https://twitter.com/EasyHouseRent02' target='_blank' rel='noreferrer' ><FontAwesomeIcon className="footer-icon" icon={faTwitter}/></a>
          <a href='https://www.facebook.com/Easy-House-Rent-104807078925662' target='_blank' rel='noreferrer' ><FontAwesomeIcon className="footer-icon" icon={faFacebook}/></a>
          <a href='https://api.whatsapp.com/send?phone=573127104558&text=%F0%9F%92%81%E2%80%8D%E2%99%80%EF%B8%8F%20Este%20es%20un%20mensaje%20predeterminado%20al%20servicio%20al%20cliente%20de%20EHR%20%2C%20%20dejanos%20tu%20consulta.%0Aen%20breve%20te%20respondemos' target='_blank' rel='noreferrer'><FontAwesomeIcon className="footer-icon" icon={faWhatsapp}/></a>
          <a href='https://github.com/mari293' target='_blank' rel='noreferrer'><FontAwesomeIcon  className='footer-icon' icon={faGithub}/></a>
          <a href='https://www.instagram.com/easyhouserent' target='_blank' rel='noreferrer'><FontAwesomeIcon className='footer-icon' icon={faInstagram}/></a>     
        </div>
        <div className="footer-relinks">
            <NavLink to="/privacy&polity" className="footer-textInfo"><p>POLÍTICA DE PRIVACIDAD</p></NavLink>
            <NavLink to="/aboutUs" className="footer-textInfo"><p>SOBRE NOSOTROS</p></NavLink>
            <ContactUs value={'text'} />
            <a href='https://docs.google.com/document/d/1DrMiacSmUaDV-KP539nJ3Ih5Rh1ChZUK/edit?usp=sharing&ouid=105302495081606426840&rtpof=true&sd=true' target='_blank' rel='noreferrer' className='footer-textInfo'><p>MANUAL DE USUARIO</p></a>
        </div>
    </div>
  )
}

import React from 'react';
import '../css/footer.css'
import {BsFillClockFill} from 'react-icons/bs'
import {FaFacebook,FaInstagramSquare,FaTwitterSquare,FaPinterestSquare} from 'react-icons/fa'
import {IoMdArrowRoundForward} from 'react-icons/io'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
            <div className='footer_home'>
                <div  className='footer_home_h2'>< IoMdArrowRoundForward className='footer_home_icon' />Home</div>
                <div  className='footer_home_h2'>< IoMdArrowRoundForward className='footer_home_icon' />About us</div>
                <div  className='footer_home_h2'>< IoMdArrowRoundForward className='footer_home_icon' />Impresum</div>
                <div  className='footer_home_h2'>< IoMdArrowRoundForward className='footer_home_icon' />Datenschutz</div>
            </div>
            <div className='footer_about'>
                 <div  className='footer_about_p'>Working hours</div>
                 <div className='footer_about_p' >Mon. : 09:30-16:30</div>
                 <div className='footer_about_p' >Tues. : 09:30-16:30</div>
                 <div className='footer_about_p' >Wed. : 09:30-16:30</div>
                 <div className='footer_about_p' >Thur. : 09:30-16:30</div>
                 <div className='footer_about_p'  >Fri. : 09:30-16:30</div>

            </div>
            <div className='footer_social'>
                <div> <FaFacebook className='footer_social_icon' /></div>
                <div> <FaInstagramSquare className='footer_social_icon' /></div>
                <div> <FaTwitterSquare className='footer_social_icon' /></div>
                <div> <FaPinterestSquare  className='footer_social_icon'/></div>

            </div>
            </div>
        </div>
    )
}

export default Footer

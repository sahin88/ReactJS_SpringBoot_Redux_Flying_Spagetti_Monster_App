import React from 'react'
import MapContainer from '../container/MapContainer'
import '../css/contact.css'
import Form from './Form'
import {FiMail} from 'react-icons/fi'
import { ImLocation2} from 'react-icons/im'
import {AiOutlinePhone} from 'react-icons/ai'

function Contact() {
    return (
        <div className="contact_div" >
             <div  className="contact_div_left">
                <MapContainer/>
                <div className="contact_div_local">
                    <div className="contact_div_local_mail">
                        <div className="contact_icon_div"><FiMail className="contact_icon"/>E-mail</div>
                        <div>spagettimonster@mail.com</div>

                    </div>

                    <div className="contact_div_local_telefon">
                    <div className="contact_icon_div"><AiOutlinePhone className="contact_icon"/>Telefon</div>
                    <div>+491236363363</div>

                    </div>
                    <div className="contact_div_local_adress">
                    <div className="contact_icon_div"><ImLocation2 className="contact_icon"/>Adress</div>
                    <div className="contact_div_local_adress_section">Albert Einstein Strasse 23</div>
                    <div>42416 Dortmund</div>


                    </div>

                </div>
               
            </div>
            <div className="contact_div_right" >
            <Form/>
            </div>
            
        </div>
    )
}

export default Contact

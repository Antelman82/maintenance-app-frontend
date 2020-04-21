import React, { Component } from 'react'
import Feedback from './Feedback'

class ContactInfo extends Component {
    render(){
        return(
            <div className='contact-info'>
                <h2>Contact Info Page</h2>

                <div>Tony Antelman</div>
                <div>anthonyantelman@gmail.com</div>
                <div>(515) 210-8878</div>
                <div>417 SE 9th St.</div>
                <div>Ankeny, Iowa</div>
                <div>50021</div>

                <h2>Feedback</h2>
                <div><Feedback /></div>
            </div>
        )
    }
}

export default ContactInfo
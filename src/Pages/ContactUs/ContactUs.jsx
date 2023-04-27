import React from 'react';
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div>
       <div className="services">
        <div className='contactPage'>
            <div className='sendMessage'>
              <h2>Get in touch</h2>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Subject'/>
                <input type="text" placeholder='Message'/>
                <button className='submit'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
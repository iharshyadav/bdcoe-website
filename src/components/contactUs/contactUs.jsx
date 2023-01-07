import React, {useState} from "react";
import "./contactUs.css";
import ReCAPTCHA from "react-google-recaptcha"
import styled from 'styled-components'

const ContactUs = () => {
  const [verified, setVerified] = useState(false);
  return (
    <div>
      <div className="contact">
        <div className="con-heading">
          <h1>CONTACT US</h1>
        </div>
        <div className="con-body">
          <div className="con-left">
            {/* <h2>+91XXXXXXXXXX</h2> */}
            <h3>www.bdcoe.ac.in</h3>
            <h3>If you have any queries, drop it here.</h3>
             
          </div>
          
          <div className="con-right">
          
            <div className="form">
            
              <form action="#" method="POST">
              
                <span className="scndclm">
                  
                 
                  <div className="">
                  
                    <label className="lbl">Name</label>
                    <input type="text" name="name" placeholder="Ram" required />
                    
                    <label className="lbl">Email</label>
                    <input type="email" name="Email" placeholder="xyz@gmail.com" required/>
                  </div>
                  <div>
                    <label className="lbl">Message</label>
                    <textarea name="message" placeholder="Your message here..." required></textarea>
                  </div>
                </span>
                  
                  
                  <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={() => {
                          setVerified(!verified);
                        }}
                        className="captcha"
                  />
                  
                  <div>
                    <input className="btn" type="submit" value="Send" disabled={!verified}/>
                  </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

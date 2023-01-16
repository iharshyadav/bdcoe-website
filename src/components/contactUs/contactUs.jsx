import React, {useState} from "react";
import "./contactUs.css";
import ReCAPTCHA from "react-google-recaptcha"

const ContactUs = () => {
  const [verified, setVerified] = useState(false);
  return (
    <div id="Contact">
      <div className="contact">
        <div className="con-heading">
          <h1>Contact Us</h1>
        </div>
        <div className="con-body">
          <div className="con-left">
            {/* <h2>+91XXXXXXXXXX</h2> */}
            <h3>www.bdcoe.co.in</h3>
            <h3>If you have any queries, drop it here.</h3>
             
          </div>
          
          <div className="contact-container">
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
                    <textarea name="message" placeholder="Your Message Here" required></textarea>
                  </div>
                </span>
                <ReCAPTCHA
                      sitekey="6Ld0ftEjAAAAAOodkf282VwH7MMXFat3qRstfXQx"
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
            <div className="map">
              <div className="mapouter gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Big%20Data%20Center%20of%20Excellence&t=k&z=15&ie=UTF8&iwloc=&output=embed" title='map'></iframe></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

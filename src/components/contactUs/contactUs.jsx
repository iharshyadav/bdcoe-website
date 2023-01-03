import React from "react";
import "./contactUs.css";
// import reCAPTCHA from "react-google-recaptcha";
const contactUs = () => {
  return (
    <div>
      <div className="contact">
        <div className="con-heading">
          <h1>CONTACT US</h1>
        </div>
        <div className="con-body">
          <div className="con-left">
            <h2>+91XXXXXXXXXX</h2>
            <h3>www.bdcoe.ac.in</h3>
            <h3>If you have any queries, drop it here.</h3>
          </div>
          <div className="con-right">
            <div className="form">
              <form action="#" method="POST">
                <span className="scndclm">
                  <span className="">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="Email" placeholder="Email" required/>
                  </span>
                  <span>
                    <textarea name="message" placeholder="Your message here..." required></textarea>
                  </span>
                </span>
                  <span>
                    {/* <reCAPTCHA
                      sitekey={process.env.REACT_APP_SITE_KEY}
                    /> */}
                    <input type="submit" value="Send" />
                  </span>  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactUs;

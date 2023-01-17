import React, { useState, useRef } from "react";
import "./contactUs.css";
import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios";

const ContactUs = () => {
  const [verified, setVerified] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState();
  const captchaRef = useRef();

  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SITE_KEY = "6Ld0ftEjAAAAAOodkf282VwH7MMXFat3qRstfXQx"
  const TEST_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

  const handleEvent = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
    //console.log(user)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    captchaRef.current.reset();
    axios.post('https://bdcoe.onrender.com/api/v1/contact', {
      ...user,
      recaptchaValue
    }).then((res) => { alert(res.data.message) })
      .catch(error => { alert(error.response.message) });
    setUser({
      name: "",
      email: "",
      message: "",
    })
  }
  return (
    <div id="contact">
      <div className="contact">
        <div className="con-heading">
          <h1>Contact Us</h1>
        </div>
        <div className="con-body">
          <div className="con-left">
            <h3>If you have any queries, drop them here :</h3>
          </div>

          <div className="contact-container">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <span className="scndclm">
                  <div className="">
                    <label className="lbl">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      onChange={handleEvent}
                      value={user.name}
                      required />
                    <label className="lbl">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={handleEvent}
                      value={user.email}
                      required />
                  </div>
                  <div>
                    <label className="lbl">Message</label>
                    <textarea
                      name="message"
                      placeholder="Your Message Here"
                      onChange={handleEvent}
                      value={user.message}
                      required />
                  </div>
                </span>
                <ReCAPTCHA
                  sitekey={SITE_KEY}
                  onChange={(value) => {
                    setVerified(!verified);
                    setRecaptchaValue(value);
                  }}
                  ref={captchaRef}
                  className="captcha"
                />
                <div>
                  <input className="btn" type="submit" value="Send" disabled={!verified} />
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

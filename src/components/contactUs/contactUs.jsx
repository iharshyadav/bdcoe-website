import React from 'react'
import './contactUs.css'

const ContactUs = () => {
  return (
    <div id="Contact">
        <div className="contact">
        <div className="con-heading">
                    <h1>CONTACT US</h1>
                </div>
            <div className="con-body">
                <div className="con-left">
                    <h2>+91XXXXXXXXXX</h2>
                    <h3>www.bdcoe.ac.in</h3>
                </div>
                <div className="con-right">
                    <div class="shade">
                        <div class="blackboard">
                            <div class="form">
                                <p>
                                    {/* <label>Name: </label> */}
                                    <input type="text" placeholder='Name' />
                                </p>
                                <p>
                                    {/* <label>Email: </label> */}
                                    <input type="text" placeholder='email' />
                                </p>
                                <p>
                                    {/* <label>Message: </label> */}
                                    <textarea placeholder='Your message here...'></textarea>
                                </p>
                                <p class="wipeout">
                                    <input type="submit" value="Send" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
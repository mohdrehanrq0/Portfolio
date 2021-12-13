import React from 'react'

import './contact.css'
const Contact = () => {
    return (
        <div className="contact section__padding">
            <div className="content" data-aos="zoom-out-up"
       data-aos-offset="200"
       data-aos-mirror="true"
       data-aos-duration="1000">
                <h2 className="gradient__text">
                    Contact Us
                </h2>
                <p className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eveniet saepe rerum natus vero aliquid assumenda ducimus incidunt ratione quo!</p>
            </div>
            <div className="container">
                <div className="contactInfo" data-aos="slide-right"
       data-aos-offset="200"
       data-aos-mirror="ture"
       data-aos-duration="1000">
                    <div className="box">
                        <div className="icon">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>2342 Apolo DB City,  <br />nipania Indore, </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>123-234-3233</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i class="far fa-envelope"></i>   
                             </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>test@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm" data-aos="slide-left"
       data-aos-offset="200"
       data-aos-mirror="ture"
       data-aos-duration="1000">
                    <form>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name=""  required="required" />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name=""  required="required" />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required"></textarea>
                            <span>Type Your Message....</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit"  value="send" />
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
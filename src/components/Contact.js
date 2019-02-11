import React, { Component } from 'react'
import './css/Contact.css'
import { phone, address, email } from './Icons'
export class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
    <div className="container">
      <div className="row">
          <div className="col-10 mx-auto col-sm-6 text-center">
            <h1 className="text-capitalize section-heading">Get In Touch</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
              <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputName">Name</label>
                      <input type="text" className="form-control" id="inputName" placeholder="name"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail">Email</label>
                      <input type="email" className="form-control" id="inputEmail" placeholder="email"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="address"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="textareaMessage">Message</label>
                      <textarea className="form-control" id="textareaMessage" rows="4" placeholder="message"></textarea>
                    </div>
                  
                  
                  <button type="submit" className="btn btn-green btn-block">Send Message</button>
                </form>
          </div>
        </div>

        <div className="block mt-5">
            <div className="row">
                <div className="col-10 mx-auto col-lg-4 text-center item sep-vertical my-2">
                <div className="icon"><a href="tel:+94 0703301830">{phone}</a></div>
                  <h6 className="contact-type">Phone</h6>
                  <p className="contact-text">+94 0703301830</p></div>
                <div className="col-10 mx-auto col-lg-4 text-center item sep-vertical my-2">
                <div className="icon"><a href="mailto:dilumsanjaya@gmail.com">{address}</a></div>
                    <h6 className="contact-type">Home</h6>
                    <p className="contact-text">Colombo, Sri Lanka</p>
                </div>
                <div className="col-10 mx-auto col-lg-4 text-center item my-2">
                <div className="icon"><a href="mailto:dilumsanjaya@gmail.com">{email}</a></div>
                    <h6 className="contact-type">Email</h6>
                    <p className="contact-text">dilumsanjaya@gmail.com</p>
                </div>
              </div>
        </div>

    </div>
  </section>
    )
  }
}

export default Contact

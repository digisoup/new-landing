import React from 'react';
import {Link} from 'react-router-dom'
function Contact() {
  return (
  <div className="container">
      <h1 className='text-center mt-5'>Contact</h1>
      <h2 className="text-center mt-3 mb-3">Please fill out form and I will get get back to you ASAP!</h2>
  
    {/* <form className='mt-5' name='contact' method="POST">
    <input type="hidden" name="form-name" value="contact" />
      <div className="row mb-3">
        <div className="col-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="col-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="phone"
            name="phone"
            className="form-control"
            placeholder="Phone Number"
          />
          <div className="row mt-3">
            <div className="col">
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="form-control"
          />
          
        </div>
      </div>

      <div className="row">
        <div className="col">
          <button className="btn btn-primary" type="submit">Contact</button>
        </div>
      </div>
    </form> */}
    <div className='mt-5'>
    <form target="/" name="contact" method="post">
      <div className="row">
        <div className="col">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input className='form-control' type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input className='form-control' type="email" name="email"/></label>
          </p>
          </div> 
          <div className="col">
          <p>
            <label>Message: <textarea className='form-control text' name="message"></textarea></label>
          </p>
          </div>
          </div>
          <p>
            <button className='btn btn-primary' type="submit">Send</button>
          </p>
        </form>
        </div>
    <Link to="/">Back to home</Link>
  </div>
)
}

export default Contact;

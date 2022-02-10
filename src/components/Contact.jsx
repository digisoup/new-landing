import React from 'react';
import {Link} from 'react-router-dom'
function Contact() {
  return (
  <div className="container">
      <h1 className='text-center mt-3'>Contact</h1>
      <h2 className="text-center mt-3">Please fill out form and I will get get back to you ASAP!</h2>
  
    <form className='mt-5 
    ' name='contact' method="post">
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
                name="description"
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
          <input className="btn btn-primary" type="submit" value="Send" />
        </div>
      </div>
    </form>
    <Link to="/">Back to home</Link>
  </div>
)
}

export default Contact;

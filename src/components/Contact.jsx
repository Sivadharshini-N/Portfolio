import React from 'react'

const contact = () => {
  return (
    <div id='contact'>
        <div className="container col-md-8 glossy-container glass-effect rounded">
          <div className="container">
            <div className="text-center"><br />
              <h2>Reach Out</h2><br /><br />
              <div className="cotainer">
                <form action="mailto:nsivadharshini1@gmail.com" encType='text/plain' style={{color:"#bbff33"}}>
                Name:{" "} <input type="text" id='name' className='rounded' placeholder='Enter your name' /><br /><br />
                email:{" "} <input type="text" id='email' className='rounded' placeholder='Email' /> <br /><br />
                <label htmlFor="body">Message</label><br /><br />  <textarea name="body" id="body" placeholder='Share your valuable message' className='rounded text-area'></textarea>
                <br /><br />
                <input type="submit" className='btn btn-green' value={"Send 🪶"} />
                </form>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default contact

import React from "react";

class Contact extends React.Component {
    render() {
        return(
    <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
      <h2 className="w3-xxlarge w3-text-light-black">Contact Me</h2>
      <hr style={{width:'200px'}} className="w3-opacity" />

      <div className="w3-section">
        <p>
            <i className="fa fa-map-marker fa-fw w3-text-light-black w3-xxlarge w3-margin-right"></i>
            Mississauga, ON
        </p>
        <p>
            <i className="fa fa-linkedin fa-fw w3-text-light-black w3-xxlarge w3-margin-right"></i>
            <a href="/#">My LinkedIn profile</a>
        </p>
        <p>
            <i className="fa fa-envelope fa-fw w3-text-light-black w3-xxlarge w3-margin-right"></i> 
            Email: haridinesh08@gmail.com
        </p>
      </div><br />

      <p>Let's get in touch. Send me a message:</p>

      <form action="/#">
        <p><input className="w3-input w3-border w3-round w3-padding-16" type="text" placeholder="Name" required name="Name" />
        </p>
        <p><input className="w3-input w3-border w3-round w3-padding-16" type="text" placeholder="Email" required
            name="Email" /></p>
        <p><input className="w3-input w3-border w3-round w3-padding-16" type="text" placeholder="Subject" required
            name="Subject" />
        </p>
        <p><input className="w3-input w3-border w3-round w3-padding-16" type="text" placeholder="Message" required
            name="Message" />
        </p>
        <p>
          <button className="w3-button w3-border w3-round w3-light-grey w3-padding-large" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
        );
    }
}

export default Contact;
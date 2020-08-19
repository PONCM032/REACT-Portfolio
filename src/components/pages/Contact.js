import React from "react";
import "../../pages/styles/contact.css"

const Contact = () => (
  <div>
    <form id="form" className="topBefore">
        
        <input id="name" type="text" placeholder="NAME"/>
        <input id="email" type="text" placeholder="E-MAIL"/>
        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
        <br/>
        <input id="submit" type="submit" value="SEND!"/>
    </form>
  </div>
);

export default Contact;

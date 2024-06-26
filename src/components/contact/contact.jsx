import React from 'react' 
import "./contact.css";
const Contact = () => {
return(
<section className="contact container section" id="contact"> <h2 className="section_title">Get In Touch</h2>
<div className="contact_container grid">
<div className="contact_info">
<h3 className="contact_title">Let's talk about
everything!</h3>
<p className="contact_ details">Don't like forms? Send me an email.</p>
</div>

<form action="" className="contact_form"> 
<div className="contact_form-group">
<div className="contact_form-div">
<input type="text" className="c" placeholder='Insert your name' />
</div>
<div className="contact_form-div">
<input type="email"
className="c"
placeholder='Insert your email' />
</div>
</div>
<div className="contact_form-div">
<input type="text" className="c" placeholder='Insert your subject' />
</div>

<div className="contact_form-div contact_form-area">
<textarea
name=""
id=""
cols="30"
rows="10"
className="c"
placeholder="Write your message"
></textarea>
</div> 
<button className="btn">Send Message</button>
</form>
</div>
</section>
)}
export default Contact
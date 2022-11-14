import React from "react";
import { Formik } from "formik";
import { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const ContactForm = () => {
const [ sent, setSent] = useState(false)
return(
<Formik
initialValues={
{name: "",
  email: "",
  message: ""
}
}

validate={(values) => {
let errors = {};

if(!values.name) {
  errors.name = 'You must enter a name'
}
  else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
  errors.name = 'Only spaces and characters allowed.'
  }
  
  if(!values.email) {
  errors.email = 'You must enter an email'
  }
  else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
  errors.email = 'Please enter a valid email adress.'
  }   

  if(!values.message) {
  errors.message = "You must write a message"
  }  
  return errors;  
}}
onSubmit={(values, {resetForm}) => {
resetForm();  
console.log("formulario enviado");
setSent(true);
}}
> 

{({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
<form className="contact" onSubmit={handleSubmit}>
  <h2 className="formTitle">Contact me</h2>
  <label htmlFor="name">Name:</label>
  <input 
  name="name" 
  id="name" 
  type="text" 
  placeholder="write your name..." 
  value={values.name}
  onChange={handleChange}
  onBlur={handleBlur}
  />
  {touched.name && errors.name && <div className="formErrors">{errors.name}</div>}
  <label htmlFor="contactMail">Email:</label>
  <input 
  name="email" 
  id="email" 
  type="email" 
  placeholder="example@mail.com..." 
  value={values.email}
  onChange={handleChange}
  onBlur={handleBlur}
  /> 
  {touched.email &&  errors.email && <div className="formErrors">{errors.email}</div>}    
  <textarea 
  name="message" 
  rows="8" 
  cols="39"
  placeholder="Tell me in 300 characters..."
  value={values.message}
  onChange={handleChange}
  onBlur={handleBlur}
  >   
  </textarea>
  {touched.message && errors.message && <div className="formErrors">{errors.message}</div>}
  <Button className="formSubmit" variant="contained" type="submit">submit</Button>
  {sent && <p className="success">Form sent successfully!</p>}
  <div className="wsap">
  <img 
  src="https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png" 
  width="30" 
  height="30" 
  alt="wsap"
  >       
  </img>
  <h5>+56-920536330</h5>
  </div>
  <Link to="/index"><button id="contextHomeButtonContact" className="homeButton"><img src="https://cdn.iconscout.com/icon/free/png-256/google-home-2981837-2476489.png" height="50"></img><h5 className="contactBack">Back</h5></button></Link>
</form>
)}
</Formik> 
)
};

export default ContactForm
import React, { useState } from "react"
import "../styles/Locataire.css"
import Footer from "./footer"
import axios from "axios"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Input from './input';
import { db } from "./firebase";
import { useAlert } from 'react-alert'




const Contact = props => {

    const [firstname, setFirstname] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const firstnameHandler = evt => {
    const value = evt.target.value
    setFirstname(value)
  }
  const surnameHandler = evt => {
    const value = evt.target.value
    setSurname(value)
  }
  const emailHandler = evt => {
    const value = evt.target.value
    setEmail(value)
  }
  const messageHandler = evt => {
    const value = evt.target.value
    setMessage(value)
  }

  // LET THE USER KNOW THAT THE INFO IS GOING TO THE DB
  // const [loader, setLoader] = useState(false);
  const alert = useAlert();


  // SUBMIT SERVICE
  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoader(true)

    db.collection('contacts').add({
      firstname: firstname,
      surname: surname,
      email: email,
      message: message,
    })
    .then(() => {
      // alert('Message has been submitted 👍');
  
      // setLoader(false)
    })
    .catch(error => {
      alert(error.message);
      // setLoader(false);
    });

    setFirstname('');
    setSurname('');
    setEmail('');
    setMessage('');
  };
  

  const data = useStaticQuery(graphql`
  query {
  contactMap: file(relativePath: { eq: "contactMap.png" }) {
    childImageSharp {
      fluid(maxWidth: 525, maxHeight: 501) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)

  


  return (
    <React.Fragment>
       <div className="contactFormWrapper">
      <div className="contactFormHeader">Contact Us</div>
      <div className="contactFormContainer">
        <div className="contactFormInternalContainer">
          <h2 className="contactFormHeading">
            Get in touch with us!
          </h2>
{/* 
          <form className="contact-form contactForm" id="contactForm" encType="multipart/form-data" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form> */}


{/* <!-- FormToEmail HTML -->	  */}
{/* <form action="https://formtoemail.com/user_forms.php" method="post" >
  <input type="hidden" name="user_id" value="CMZ95D5AZAAAPWPDQM72" />
  <input type="hidden" name="form_id" value="1" />
  Name: <input type="text" name="name" placeholder="Enter your name..." /><br />
  Email Address: <input type="text" name="email" placeholder="name@example.com" /><br />
  Comments: <textarea name="comments" rows="5" placeholder="Enter your comments..."></textarea><br />
  <input type="submit" value="Submit Form" /> <span class="credit">Created with <a href="https://formtoemail.com" rel="nofollow">FormToEmail</a></span>
</form> */}
{/* <!-- FormToEmail CSS --> */}



          <form
            action="https://formtoemail.com/user_forms.php" 
            method="post"
            className="contactForm contact-form"
            id="contactForm"
            // onSubmit={handleSubmit}
          >
            <div className="contactFormInputWrapper">
            <input type="hidden" name="user_id" value="CMZ95D5AZAAAPWPDQM72" />
            <input type="hidden" name="form_id" value="1" />

              <Input
              contactForm
              firstname
            key="firstname"
            label="First Name"
            type="text" handleChange={firstnameHandler}
            name="First Name"
            value={firstname}
            valid={true}
            touched={true} 
            onChange={(e) => setFirstname(e.target.value)}
            />

              <Input
              contactForm
            key="lastname"
            label="Last Name"
            type="text" handleChange={surnameHandler}
            name="Last Name"
            value={surname}
            valid={true}
            touched={true} 
            onChange={(e) => setSurname(e.target.value)}
            />
            </div>

            <Input
            contactForm
            key="email"
            label="Email Address"
            type="text" 
            handleChange={emailHandler}
            name="Email Address"
            value={email}
            valid={true}
            touched={true} 
            onChange={(e) => setEmail(e.target.value)}
            />

            <Input
            textarea
            contactForm
            key="message"
            label="Your Message"
            type="text" handleChange={messageHandler}
            name="Your Message"
            value={message}
            valid={true}
            touched={true} 
            onChange={(e) => setMessage(e.target.value)}
            />

            
            
            <button
              className="bttn btn-7 btn-7h"
              type="submit"
              // style={{background : loader ? "#ccc" : "rgb(2, 2, 110)"}}
              onClick={() => {
                alert.show('Thank you for reaching out. Our team will get back to you shortly.!');
              }}
            >
              Send
            </button>
          </form>
        </div>
        <div className="contactFormMapDiv">
          {/* <Img
              className="contactFormMap"
              fluid={data.contactMap.childImageSharp.fluid}
            /> */}
            <div className="contactFormMap">
              <iframe id="contact--frame" src="https://www.atlistmaps.com/map/2deadae9-9e2a-43e0-8e26-bfd671eb0e12?share=true" allow="geolocation" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen></iframe>
            </div>
            <p className="contactMapFooterLocation">Central Business District, Newark, NJ, United States 07102</p>
        </div>
      </div>

      <Footer light />
    </div>

    </React.Fragment>
  )
}
export default Contact
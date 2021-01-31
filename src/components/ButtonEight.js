import React from "react"
import "../styles/Locataire.css"
import {Link} from "react-scroll"

const ButtonEight = (props) => {

  return ( 
    // <a href="www.google.com" className="getStarted" style={{textDecoration: "none"}}>
    //     <button className="getStarted-btn " type="button" id="buttonSix">Get Started</button>
    // </a>
      <div className="button">
       <Link to="contact_page" smooth={true} duration={1000}>
          <a href="www.google.com" className="btn-header btn--green-header">{props.name}</a>
        </Link>
      </div>
  )
}

export default ButtonEight
import React from "react"
import "../styles/Locataire.css"
import {Link} from "react-scroll"

const ButtonNine = (props) => {

  return ( 
    <div className="button">
      <Link to="main-realtyContainer" smooth={true} duration={1000}>
        <a href="www.google.com" className="btnB-header btnB--transparent-header">{props.name}</a>
      </Link>
    </div>
  )
}

export default ButtonNine
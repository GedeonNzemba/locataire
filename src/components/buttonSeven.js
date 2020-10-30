import React from "react"
import "../styles/Locataire.css"

const ButtonSeven = (props) => {

  return ( 
    <div className="button">
      <a href="www.google.com" className="btnB btnB--transparent">{props.name}</a>
    </div>
  )
}

export default ButtonSeven
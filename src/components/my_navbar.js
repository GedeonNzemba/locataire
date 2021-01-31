import React from "react"
import Helmet from "react-helmet"
import "../styles/Locataire.css"
import "../fonts/gt super/stylesheet.css"
import "./realty_about_layout"
import ButtonOne from "./buttonOne"
import ButtonEight from "./ButtonEight"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function My_navbar() {
  return (
    <>
    <Container fluid>
      <Row>
        <Col sm={2}>
          <div className="realEstate_logoWrap">
            <img
              src={require("../images/logo.png")}
              alt="Locataire logo"
            ></img>

          </div>
        </Col>
        <Col sm={8}>
          <nav class="stroke">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Real Estate</a></li>
              <li><a href="#">Livestock</a></li>
              <li><a href="#">Risk management</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </nav>
        </Col>
        <Col sm={2}>
          <ButtonEight name="contact us" />
        </Col>
      </Row>
      </Container>
    </>
  )
}
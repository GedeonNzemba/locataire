import React, { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Media from 'react-media';
// import { Parallax } from 'react-scroll-parallax';
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
// import IMG from "gatsby-image"
import "../styles/Locataire.css"
import "../fonts/gt super/stylesheet.css"
import "../components/realty_about_layout"
// import ButtonFive from "../components/ButtonFive"
import ButtonSix from "../components/buttonSix"
import ButtonSeven from "../components/buttonSeven"
import ButtonEight from "../components/ButtonEight"
import ButtonSevenB from "../components/buttonNine"
// import Contact_btn from "../components/Contact_btn"
// import Navbar from "../components/Navbar";

// import Home from './Home'
// import Realty from './'
// import Farm from './Farm'
import Contact from './Contact'
// import Career from './Career'
// import RiskManagement from './RiskManagement'
import Realtymobile from "../components/Realtymb";
// import ScriptTag from 'react-script-tag';
// import  image_1  from "../images/REALTY/data0/images/image_1.jpg";
// import image_2 from '../images/REALTY/data0/images/image_2.jpg'
// import image_3 from '../images/REALTY/data0/images/image_3.jpg'
// import image_4 from '../images/REALTY/data0/images/image_4.jpg'
// import image_5 from '../images/REALTY/data0/images/image_5.jpg'
// import image_6 from '../images/REALTY/data0/images/image_6.jpg'
// import image_7 from '../images/REALTY/data0/images/image_7.jpg'

import woman_a from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_899.jpg"
import woman_b from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1011.jpg"
import woman_c from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1114.jpg"
import woman_d from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1211.jpg"
import woman_e from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1294.jpg"
import woman_f from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1404.jpg"
import woman_g from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1495.jpg"
import woman_h from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1639.jpg"
import woman_i from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1643.jpg"
import woman_j from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1728.jpg"
import woman_k from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1810.jpg"
import woman_l from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_1990.jpg"
import woman_m from "../images/REALTY/desktop/woman_glasses/woman_glasses_c_scale,w_2400.jpg"





// import image_1a from '../images/REALTY/all types/900_1199/office-881758.jpg'
// // import image_2b from '../images/REALTY/data0/tooltips/image_2.jpg'
// import image_3c from '../images/REALTY/all types/900_1199/pexels-tomek-mądry.jpg'
// // import image_4d from '../images/REALTY/data0/tooltips/image_4.jpg'
// // import image_5e from '../images/REALTY/data0/tooltips/image_5.jpg'
// import image_6f from '../images/REALTY/all types/900_1199/single-family-home.jpg'
import RealtyServices from "../components/RealtyServices";
import { Col } from "react-bootstrap";
import { GiContract, GiAutoRepair } from 'react-icons/gi';
import { FaChartLine } from 'react-icons/fa';
import { RiSkullFill, RiCriminalLine } from 'react-icons/ri';
import { HiUserRemove, HiDocumentReport } from 'react-icons/hi';
import { BsHouseFill } from 'react-icons/bs';
import {FcAdvertising, FcInspection} from 'react-icons/fc'
import Media from 'react-bootstrap/Media';
import {GrVmMaintenance, GrSystem} from 'react-icons/gr';
import {FaBullhorn, FaTimes, FaHands, FaHammer, FaAtlas, FaCogs} from 'react-icons/fa';
import  '../styles/hover.css';
import My_navbar from "../components/My_navbar"

// import image_7g from '../images/REALTY/data0/tooltips/image_7.jpg'




export default function RealEstate() {
  // const cover_mobile = require("../images/REALTY/mobile/drawable-mdpi/Group11.png")
  // const realty_about = require("../images/REALTY/realty_about_layout.png");
  // const realty_about_2 = require("../images/REALTY/realty_about_layout-about-2.png");
  // const realty_about_3 = require("../images/REALTY/realty_about_layout-about-3.png");

  // const cdn_1 = require("../static/engine0/style.css");
  // const cdn_2 = require("../images/REALTY/engine1/script");
  // const cdn_3 = require("https://locataire.imfast.io/engine1/jquery.js");
  // const cdn_4 = require("https://locataire.imfast.io/engine1/wowslider.mod.js");

  // IMAGES FOR HEADER SLIDER
  // const image_1 = require("../images/REALTY/data0/images/image_1.jpg");
  // const image_2 = require("../images/REALTY/data0/images/image_2.jpg");
  // const image_3 = require("../images/REALTY/data0/images/image_3.jpg");
  // const image_4 = require("../images/REALTY/data0/images/image_4.jpg");
  // const image_5 = require("../images/REALTY/data0/images/image_5.jpg");
  // const image_6 = require("../images/REALTY/data0/images/image_6.jpg");
  // const image_7 = require("../images/REALTY/data0/images/image_7.jpg");

  // const image_1a = require("../images/REALTY/data0/tooltips/image_1.jpg");
  // const image_2b = require("../images/REALTY/data0/tooltips/image_2.jpg");
  // const image_3c = require("../images/REALTY/data0/tooltips/image_3.jpg");
  // const image_4d = require("../images/REALTY/data0/tooltips/image_4.jpg");
  // const image_5e = require("../images/REALTY/data0/tooltips/image_5.jpg");
  // const image_6f = require("../images/REALTY/data0/tooltips/image_6.jpg");
  // const image_7g = require("../images/REALTY/data0/tooltips/image_7.jpg");


function useMediaQuery(query, defaultMatches = window.matchMedia(query)) {
  const [matches, setMatches] = useState(defaultMatches)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) setMatches(media.matches                                                                                                                                                                                                                               )
    const listener = () => setMatches(media.matches)
    media.addListener(listener)

    
  }, [query])

  return matches

}




  const data = useStaticQuery(graphql`
    query {
    realtyImg: file(relativePath: { eq: "REALTY/all types/invest.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 525, maxHeight: 501) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mobileOne: file(
      relativePath: { eq: "REALTY/mobile/homeOne.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    


  mobileTwo: file(
    relativePath: { eq: "REALTY/mobile/homeTwo.jpg" }
  ) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
  `)



  return (
    <>
        <Realtymobile />
        {/* <My_navbar /> */}
        <div className="realEstate onlyBtn">
          <Helmet>
            <script src="../static/wowslider.js" type="text/javascript" />
          </Helmet>
          {/* top header */}
        
          <header className="realEstate_header" >
            <nav className="realEstate_navigation">
              <div className="realEstate_logoWrap">
                <img
                  src={require("../images/logo.png")}
                  alt="Locataire logo"
                ></img>

              </div>
              <div className="realEstate_navItem">
             
                {/* <ul>
                  <li><a href="www.google.com" >home</a></li>
                  <li><a href="www.google.com" >real estate</a></li>
                  <li><a href="www.google.com" >livestock</a></li>
                  <li><a href="www.google.com" >risk management</a></li>
                  <li><a href="www.google.com">career</a></li>
                </ul> */}
              </div>
              <div className="realEstate_contactBtn">
                <ButtonEight name="contact us" />
              </div>
            </nav>
            <nav className="realEstate-navbar">

              {/* not this <div className="realEstate-logo" />
            <div id="burger" /> */}
            </nav>

            <section className="realEstate_headerSection">
              <div className="realEstate_leftContainer">
                <div className="realEstate_innerLeftContainer">
                  <div className="realEstate_title-wrap">
                    <h1>locataire realty</h1>
                  </div>
                  <div className="realEstate_text-wrap">
                    <p>
                      Locataire Realty provides real estate services to
                    prospective 
                    clients looking to buy, sell or lease residential and
                    commercial
                    
                    real estates in the United States and Canada.
                  </p>
                  </div>
                    
                  <section id="header-bottomLeftContent">
                  <div className="realEstate_getMoreInfoBtn">
                    <ButtonSevenB name="learn more" />
                  </div>

                  <div className="realEstate_flag-wrap">
                      <div className="realEstate_flag" />
                    </div>
                    </section>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="realEstate_rightContainer">
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img_h img_w"
      // src={image_1a}
      alt="First slide"
      id="img_a"
    />
    <Carousel.Caption>
      <h3 class="slide__header">First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <picture>
      <img
      sizes="(max-width: 2400px) 100vw, 2400px"
      srcset={
        woman_a, 
        woman_b,
        woman_c,
        woman_d,
        woman_e,
        woman_f,
        woman_g,
        woman_h,
        woman_i,
        woman_j,
        woman_k,
        woman_l,
        woman_m 
      }
      src="woman_glasses_c_scale,w_2400.jpg"
      alt="" />
  </picture>
  </Carousel.Item> */}

  <Carousel.Item>
    <img
      className="d-block w-100 img_h img_w"
      // src={image_3c}
      alt="Third slide"
      id="img_b"
    />

    <Carousel.Caption>
      <h3 class="slide__header">Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img_h img_w"
      // src={image_6f}
      alt="Third slide"
      id="img_c"
    />

    <Carousel.Caption>
      <h3 class="slide__header">Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
              </div>
            </section>
          </header>
          {/* ABOUT LOCATAIRE */}

          <main id="main-realtyContainer" >
          <div className="realty" id="realty_about">
            <header className="realty__heading">
              <div className="realty__image-svgThree">
                <img
                  src={require("../images/REALTY/Group8.png")}
                  alt="about locataire svg"
                  id="realty__about-svgTwo"
                ></img>
              </div>
              <div className="realty__headerContainer">
                <div className="realty__smallTitle">
                  <span>Locataire Realty</span>
                </div>
                <div className="realty__bigTitle">
                  <h1>
                    Locataire Realty provides real estate <br />
                  services to prospective clients.
                </h1>
                </div>
              </div>
            </header>
            <article className="realty__article">
              <div className="realty__article-content">
                <div className="realty__innerWrap">
                  <div className="realty__image">
                    <div className="item__img realty__about-img3" />
                    <div className="realty__image-svgOne">
                      <img
                        src={require("../images/REALTY/Group8.png")}
                        alt="about locataire svg"
                        id="realty__about-svgOne"
                      ></img>
                    </div>
                    <div className="realty__image-svgTwo">
                      <img
                        src={require("../images/REALTY/Group8.png")}
                        alt="about locataire svg"
                        id="realty__about-svgTwo"
                      ></img>
                    </div>{" "}
                  </div>
                  <div className="realty__content" id="realty__content">
                    <div className="realty__textWrap" id="realty__textWrap">
                      <div className="realty__text-container">
                        <p style={{ marginBottom: "0" }}>
                          Our core business includes management and administration
                          of commercial and multifamily residential properties,
                          and our primary business objective is to maximize the
                          total return to property owners, through strategic
                          acquisition, re-development, re-lease and management of
                          these properties for maximum cash flow.
                      </p>
                      </div>
                    </div>
                    <div
                      className="realty__content_buttonWrap"
                      id="realty__content_buttonWrap"
                    >
                      <div className="realty__leftBtn">
                        <ButtonSeven name="learn more" />
                      </div>
                      <div className="realty__rightBtn hidden">
                        <ButtonSix name="contact us" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="realty__article" id="realty__article-two">
              <div className="realty__article-content">
                <div className="realty__innerWrap" id="realty__innerWrap-two">
                  <div className="realty__image " id="realty__image-two">
                    <div className="item__img realty__about-img3" />
                    <div
                      className="realty__image-svgOne"
                      id="realty__image-svgOne-two"
                    >
                      <img
                        src={require("../images/REALTY/Group8.png")}
                        alt="about locataire svg"
                        id="realty__about-svgOne"
                      ></img>
                    </div>
                    <div className="realty__image-svgTwo">
                      <img
                        src={require("../images/REALTY/Group8.png")}
                        alt="about locataire svg"
                        id="realty__about-svgTwo"
                      ></img>
                    </div>{" "}
                  </div>
                  <div className="realty__content" id="realty__content">
                    <div className="realty__textWrap" id="realty__textWrap">
                      <div className="realty__text-container">
                        <p style={{ marginBottom: "0" }}>
                          Our team understand financial services, wealth
                          management, and the extend of risks relative to return
                          on investment property owners are willing to withstand.
                        </p>
                        <p style={{ marginBottom: "0", marginTop: "1em" }} >
                          We are committed to helping our clients preserve wealth
                          for yourself, and your family, and to prepare for future
                          responsibilities as wealth owners and leaders.
                      </p>
                      </div>
                    </div>
                    <div
                      className="realty__content_buttonWrap"
                      id="realty__content_buttonWrap"
                    >
                      <div className="realty__leftBtn hidden">
                        <ButtonSeven name="learn more " />
                      </div>
                      <div className="realty__rightBtn">
                        <ButtonSix name="contact us" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <br />
          <br />
          <br />
          <br /> {/* INVERSTMENT SERVICES */}
          <br />

          {/* TABLET */}
          <main className="investment_service" style={{position: 'relative'}}>
          {/* <Media query="(min-width: 900px)">
              {matches => {
                return matches ? 
                
                <>
                "HELLO"
                </>
                : 
                "HI"
              }}
            </Media> */}
          </main>


            <div className="realty-container">
              {/* <Helmet>
              <link rel="stylesheet"
                      href=
                      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
                      crossorigin="anonymous"></link>
              </Helmet> */}

              <div className="realty-content">

              <Container className="property-container">
              <Row className="justify-content-md-center investS">
                <Col md={8}>
                  <div className="invest-img" />
                </Col>
                <Col md={4} className="realty-content_left border_right">
                    <h1>investment service</h1>
                    <p>
                      Locataire offers to prospective partners opportunities
                      to invest in dozens of high-growth residential and
                      commercial properties in the United States, and Canada.
                    </p>
                </Col>
              </Row>
            </Container>
              {/* <div className="realty__services-svgDivider"></div>
                <div className="realty-content_left">
                  <h1>investment service</h1>
                  <div className="realty_services_content-paragraph">
                    <p>
                      Locataire offers to prospective partners opportunities
                      to invest in dozens of high-growth residential and
                      commercial properties in the United States, and Canada.
                    </p>
                      
                   
                </div>
                </div>
                <div className="realty-content_right">
                  
                </div> */}
              </div>

              <Container className="display_off">
                <Row>
                  <Col>
                    <div className="p1_img" />
                  </Col>
                  <Col className="sub_text-p1">
                    <p className="p1">
                      We leverage experience and local market knowledge to
                      produce top quality risk-adjusted returns for investors.
                    </p>
                  </Col>
                </Row>
              </Container>


               {/* SLIDER A */}

               <div className="carousel" id="carousel-investor" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
                <div className="carousel-cell hvr-underline-from-left hvr-underline-from-center">
                <div className="realEstate-invest__item ">
                      <div className="realEstate-invest__item-image-one realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex hvr-icon-forward">
                            <i class="fas fa-search-dollar hvr-icon"></i>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                                Identify undervalue real estate properties
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                </div>
                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-two realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                          <i class="fab fa-acquisitions-incorporated hvr-icon"></i>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                                Property acquisition                 
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                      
                     
                    </div>
                </div>
                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-three_b realEstate-invest__item-image--prop" />
                      
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <GiContract className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                                Leases administration            
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                      
                      
                    </div>
                </div>
                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-three realEstate-invest__item-image--prop" />
                      
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <GiAutoRepair className="hvr-icon" />
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                                Renovation and remodeling              
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                      
                     
                    </div>
                </div>
                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-four realEstate-invest__item-image--prop" />
                      
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <FaChartLine className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                               capital and operational programs to increase cashflow            
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                      
                    </div>
                </div>

                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-six realEstate-invest__item-image--prop" />
                     
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <RiSkullFill className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                                Reduce overall risk            
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                     
                     
                      
                    </div>
                    </div>

                    <div className="carousel-cell hvr-underline-from-left">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-eight_b realEstate-invest__item-image--prop" />
                      
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <HiUserRemove className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                                Evictions proceedings          
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                      
                      
                     
                    </div>
                    </div>

                    <div className="carousel-cell hvr-underline-from-left">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-nine_b realEstate-invest__item-image--prop" />
                     
                      <Container className="invest-container container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <BsHouseFill className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                                Possession of leased premises       
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                     
                     
                     
                    </div>
                    </div>

                  
            </div>

              {/* SLIDER A ENDS */}
            </div>


            <div className="realty-container right-hand-container" id="realty-content">


            <div className="realty-content realty-content_sec" >
              
            <Container className="property-container">
              <Row className="justify-content-md-center">
                <Col md={8}>
                  <div className="property-img" />
                </Col>
                <Col md={4} className="realty-content_left">
                    <h1>Property management</h1>
                    <p>
                      Locataire real estate property managers offer hands-on
                      experience management of single-family homes,
                      multi-family homes, condominiums, townhouses, and
                      commercial properties.
                    </p>
                </Col>
              </Row>
            </Container>

              
              
                </div>
              </div>

              
            <Container className="margin_btm">
              <Row>
                <Col>
                  <Media>
                    <img
                      width={128}
                      height={128}
                      className="mr-3"
                      src={require('../images/REALTY/all types/house_purshase.jpg')}
                      alt="Generic placeholder"
                    />
                    <Media.Body>
                      <h5 className="media_title">Property management services include the following:</h5>
                      <p style={{fontSize: '2rem'}}>
                        Whether you own one unit or many in an apartment building, our agents can assist you maximize profit and keep operating expenses low.
                      </p>
                      <br />
                    </Media.Body>
                  </Media>

                  <p style={{fontSize: '2rem'}}>
                  Our objective is to maximize the total return to property owners, through strategic acquisition, re-development, re-lease and management of these properties for maximum cash flow. We get paid after you get paid. Which means, if we don’t collect rent as agreed, you don’t pay us a management fee.
                  </p>
                </Col>
              </Row>
            </Container>

              <Container className="display_off">
                <Row>
                  <Col>
                    <div className="p1_img" />
                  </Col>
                  <Col className="sub_text-p1">
                    <p className="p1">
                    our agents can assist you maximize profit
                    and keep operating expenses low.
                    </p>
                  </Col>
                </Row>
              </Container>
              {/* <div className="realty-content right-hand">
              <div className="realty__services-svgDivider"></div>
                <div className="realty-content_left">
                  <h1>investment service</h1>
                  <div className="realty_services_content-paragraph">
                    <p>
                      Locataire offers to prospective partners opportunities
                      to invest in dozens of high-growth residential and
                      commercial properties in the United States, and Canada.
                    </p>
                      
                   
                </div>
                </div>
                <div className="realty-content_right">
                  
                </div>
              </div> */}

              {/* <div className="p2">
              <p>
                      We leverage experience and local market knowledge to
                      produce top quality risk-adjusted returns for investors.
                    </p>
              </div> */}


               {/* SLIDER A */}

               <div className="carousel" id="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
                <div className="carousel-cell hvr-underline-from-center">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-one realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex hvr-icon-forward">
                            <FaBullhorn className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                              	Advertising and filling vacancies
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                     
                    </div>
                </div>
                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-two realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                          <RiCriminalLine className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                              	Tenant screening (credit, criminal background)               
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                </div>
                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-three_b realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <GiContract className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                              	Leases administration            
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                </div>
                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-three realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <FcInspection className="hvr-icon" />
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                              	Move-in inspection walkthrough              
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                </div>
                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-four realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <FaCogs className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                              	Repairs & maintenance            
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                </div>

                <div className="carousel-cell hvr-underline-from-left">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-six realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <FaAtlas className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                              	Vendor management           
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    </div>

                    <div className="carousel-cell hvr-underline-from-left">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-eight_b realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <FaTimes className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                              	Evictions proceedings          
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                    </div>

                    <div className="carousel-cell hvr-underline-from-left">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-nine_b realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <FaHands className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                                Possession of leased premises       
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                     
                    </div>
                    </div>

                    <div className="carousel-cell hvr-underline-from-left">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-ten_b realEstate-invest__item-image--prop" />
                      <Container className="container_height">
                        <Row>
                          <Col sm={4} className="icon-flex  hvr-icon-forward">
                              <HiDocumentReport className="hvr-icon"/>
                          </Col>
                          <Col sm={8}>
                            <div className="realEstate-invest__item-content">
                              <p>
                              	Financial reporting      
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                     
                    </div>
                    </div>
            </div>

              {/* SLIDER A ENDS */}
            


              <div id="margin_top" />

            
           <div className="realty_services" id="realty_services-margin"  style={{display: 'none'}} >
            <span className="realty_services-svg"></span>
            <div className="realty__services-svgDivider"></div>
            <section className="realty_services-header">
              {/* content */}
              <div className="realty_services-content">
                <h1>investment service</h1>
                <div className="realty_services_content-text">
                  <Helmet>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
                      crossorigin="anonymous"
                    />
                  </Helmet>
                  <Container className="realty_service--container">
                    <Row>
                      <Col sm={2}>
                        <span className="realty_services_content-text-icon">
                          <i class="fas fa-info-circle"></i>
                        </span>
                      </Col>
                      <Col sm={10}>
                      <div className="realty_services_content-paragraph">
                        <p> 
                          Locataire offers to prospective partners opportunities
                          to invest in dozens of high-growth residential and
                          commercial properties in the United States, and Canada.
                        </p>
                  
                        <p>
                          We leverage experience and local market knowledge to
                          produce top quality risk-adjusted returns for investors.
                        </p>
                      </div>
                      </Col>
                    </Row>
                  </Container>
                  
                
                </div>

                <br />
                <div className="realty_services_content-banner"></div>

                <div className="realty_services-subContent">
                  <div className="realty_services-subsvg"></div>
                  <div className="realty_services-subtitle">
                    <div className="realty_services-verticalLine"></div>
                    <div className="services-subtitle">
                      <h3>
                        Locataire investment services
                      include the following.
                    </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className="realty_services-image">
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../images/REALTY/condominium-690086.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Multifamily residential real estate</h3>
      <p className="front">Locataire Realty provides real estate services to prospective clients looking to buy, sell or lease residential and commercial real estates in the United States, and Canada.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../images/REALTY/interior-3778708.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Condominiums</h3>
      <p className="front">We leverage experience and local market knowledge to produce top quality risk-adjusted returns for investors. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../images/REALTY/all types/estate_5.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Commercial</h3>
      <p className="front">We get paid after you get paid. Which means, if we don’t collect rent as agreed, you don’t pay us a management fee.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                <span className="realty_services-midsvg"></span>
              </div>
            </section>

            <br />


              <Container fluid id="down2k">
                <Col>
                  <Row className="slide_container">
                    {/* ITEM CONTAINER */}
                    <ul className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
                    <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageOne"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-search-location"></i>
                                </div>
                                <div className="realty__services-option-itemTitle">
                                  <p>
                                  Identify undervalue real estate properties
                                  </p>
                                  
                              </div>
                              </div>
                            </div>
                          </div>
                      </li>


                      <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageTwo"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-home"></i>
                                </div>
                                <div className="realty__services-option-itemTitle">
                                  <p>
                                  Property acquisition

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        
                        <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageThree"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-house-damage"></i>
                                </div>
                                <div className="realty__services-option-itemTitle">
                                  <p>
                                  Renovation and remodeling

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageFour"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-chart-line"></i>
                                </div>
                                <div
                                  className="realty__services-option-itemTitle"
                                  id="services-option-itemTitle-long"
                                >
                                  <p>
                                  capital and operational programs
                                  to increase cashflow

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageFive"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-tasks"></i>
                                </div>
                                <div
                                  className="realty__services-option-itemTitle"
                                  id="services-option-itemTitle-long"
                                >
                                  <p>
                                  Implement effective asset management controls

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageSix"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-balance-scale"></i>
                                </div>
                                <div className="realty__services-option-itemTitle">
                                  <p>
                                  Reduce overall risk

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>
                    </ul>
                    <div className="realty_services-option-decoration"></div> 
                  </Row>
                </Col>
              </Container>





              
              <Container className="up2k-container">
                <Row className="row-slider">
                <ul >
                    <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageOne"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-search-location"></i>
                                </div>
                                <div className="realty__services-option-itemTitle">
                                  <p>
                                  Identify undervalue real estate properties
                                  </p>
                                  
                              </div>
                              </div>
                            </div>
                          </div>
                      </li>


                      <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageTwo"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-home"></i>
                                </div>
                                <div className="realty__services-option-itemTitle">
                                  <p>
                                  Property acquisition

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        
                        <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageThree"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-house-damage"></i>
                                </div>
                                <div className="realty__services-option-itemTitle">
                                  <p>
                                  Renovation and remodeling

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageFour"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-chart-line"></i>
                                </div>
                                <div
                                  className="realty__services-option-itemTitle"
                                  id="services-option-itemTitle-long"
                                >
                                  <p>
                                  capital and operational programs
                                  to increase cashflow

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageFive"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-tasks"></i>
                                </div>
                                <div
                                  className="realty__services-option-itemTitle"
                                  id="services-option-itemTitle-long"
                                >
                                  <p>
                                  Implement effective asset management controls

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="realty_services-option--boxContainer">
                            <div className="realty__services-option--innerBox">
                              <div className="realty_services-option--imageContainer realty__services-option--imageSix"></div>
                              <div className="realty_services-option--content">
                                <div className="realty__services-option-icon">
                                  <i class="fas fa-balance-scale"></i>
                                </div>
                                <div className="realty__services-option-itemTitle">
                                  <p>
                                  Reduce overall risk

                                  </p>
                              </div>
                              </div>
                            </div>
                          </div>
                        </li>
                    </ul>
                    <div className="realty_services-option-decoration"></div> 
                  </Row>
                <Row className="row-bar">
                  <div className="slide-bar" />
                </Row>  
                  
              </Container>

            

            {/* =============================== */}
          </div> 

          <div className="realty_services" style={{display: 'none'}}>
            <span className="realty_services-svg realty__services-svgLeft"></span>
            <div className="realty__services-svgDivider realty__services-svgDividerLeft"></div>
            <section className="realty_services-header realty_services-headerLeft">
              {/* content */}
              <div className="realty_services-content" id="realty_left-container">
                <h1>property management</h1>
                <div className="realty_services_content-text">
                  <Helmet>
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                      integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
                      crossorigin="anonymous"
                    />
                  </Helmet>
                  <Container className="realty_service--container">
                    <Row>
                      <Col sm={2}>
                        <span className="realty_services_content-text-icon">
                          <i class="fas fa-info-circle"></i>
                        </span>
                      </Col>
                      <Col sm={10}>
                      <div className="realty_services_content-paragraph">
                        <p> 
                        Locataire real estate property managers offer hands-on
                        experience management of single-family homes,
                        multi-family homes, condominiums, townhouses, and
                        commercial properties.
                        </p>
                  
                        <p>
                        building, our agents can assist you maximize profit
                        and keep operating expenses low.
                        </p>
                      </div>
                      </Col>
                    </Row>
                  </Container>
                  
                
                </div>

                <br />
                <div className="realty_services_content-banner" id="realty_services_banner-left"></div>

                <div className="realty_services-subContent">
                  <div className="realty_services-subsvg"></div>
                  <div className="realty_services-subtitle">
                    <div className="realty_services-verticalLine"></div>
                    <div className="services-subtitle">
                      <h3>
                        Locataire property management
                      include the following.
                    </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className="realty_services-image" id="realty_image-wrap">
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../images/REALTY/5f2737a12b490.jpg')}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Multifamily residential real estate</h3>
      <p className="front">Locataire Realty provides real estate services to prospective clients looking to buy, sell or lease residential and commercial real estates in the United States, and Canada.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../images/REALTY/5f27347d39e82.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Condominiums</h3>
      <p className="front">We leverage experience and local market knowledge to produce top quality risk-adjusted returns for investors. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../images/REALTY/all types/office-881758.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Commercial</h3>
      <p className="front">We get paid after you get paid. Which means, if we don’t collect rent as agreed, you don’t pay us a management fee.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                <span className="realty_services-midsvg"></span>
              </div>
            </section>

            <br />


              <Container fluid id="down2k">
                <Col>
                  <Row className="slide_container">
                <ul className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageOneLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-search-location"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Advertising and filling vacancies

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageTwoLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-home"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Tenant screening (credit, criminal background)

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageThreeLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-house-damage"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Leases administration

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageFourLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-chart-line"></i>
                          </div>
                          <div
                            className="realty__services-option-itemTitle"
                            id="services-option-itemTitle-long"
                          >
                            <p>
                            Move-in inspection walkthrough

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageFiveLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-tasks"></i>
                          </div>
                          <div
                            className="realty__services-option-itemTitle"
                            id="services-option-itemTitle-long"
                          >
                            <p>
                            Rent payment

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageSixLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Repairs & maintenance

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageSevenLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Vendor management

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageEightLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Evictions proceedings

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageNineLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Possession of leased premises

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageTenLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Financial reporting

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                </Row>
                </Col>
                </Container>

                <Container className="up2k-container">
                <Row className="row-slider">
                <ul className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageOneLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-search-location"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Advertising and filling vacancies

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageTwoLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-home"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Tenant screening (credit, criminal background)

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageThreeLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-house-damage"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Leases administration

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageFourLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-chart-line"></i>
                          </div>
                          <div
                            className="realty__services-option-itemTitle"
                            id="services-option-itemTitle-long"
                          >
                            <p>
                            Move-in inspection walkthrough

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageFiveLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-tasks"></i>
                          </div>
                          <div
                            className="realty__services-option-itemTitle"
                            id="services-option-itemTitle-long"
                          >
                            <p>
                            Rent payment

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageSixLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Repairs & maintenance

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageSevenLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Vendor management

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageEightLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Evictions proceedings

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageNineLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Possession of leased premises

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageTenLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-balance-scale"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            <p>
                            Financial reporting

                            </p>
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                    <div className="realty_services-option-decoration"></div> 
                  </Row>
                <Row className="row-bar">
                  <div className="slide-bar" />
                </Row>  
                  
              </Container>
                <div className="realty_services-option-decoration"></div>
          </div>
          
          </main>
          
          <div id="contact_page">
            <Contact />
          </div>
        </div>
    </>
  )
}

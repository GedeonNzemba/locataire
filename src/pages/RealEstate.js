import React, { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import Media from 'react-media';
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

import image_1a from '../images/REALTY/all types/900_1199/office-881758.jpg'
// import image_2b from '../images/REALTY/data0/tooltips/image_2.jpg'
import image_3c from '../images/REALTY/all types/900_1199/pexels-tomek-mądry.jpg'
// import image_4d from '../images/REALTY/data0/tooltips/image_4.jpg'
// import image_5e from '../images/REALTY/data0/tooltips/image_5.jpg'
import image_6f from '../images/REALTY/all types/900_1199/single-family-home.jpg'
import RealtyServices from "../components/RealtyServices";
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
        <div className="realEstate">
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
                <ul>
                  <li><a href="www.google.com" >home</a></li>
                  <li><a href="www.google.com" >real estate</a></li>
                  <li><a href="www.google.com" >livestock</a></li>
                  <li><a href="www.google.com" >risk management</a></li>
                  <li><a href="www.google.com">career</a></li>
                </ul>
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
      className="d-block w-100"
      src={image_1a}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image_3c}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image_6f}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
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
              <div className="realty-content">
              <div className="realty__services-svgDivider"></div>
                <div className="realty-content_left">
                  <h1>investment service</h1>
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
                </div>
                <div className="realty-content_right">
                  
                </div>
              </div>


               {/* SLIDER A */}

               <div className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-one realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Identify undervalue real estate properties
                      </p>
                      </div>
                    </div>
                </div>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-two realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Property acquisition                       </p>
                      </div>
                    </div>
                </div>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-three_b realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Leases administration
                      </p>
                      </div>
                    </div>
                </div>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-three realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Renovation and remodeling                       </p>
                      </div>
                    </div>
                </div>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-four realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Implement strategic capital and operational programs to increase cashflow                       </p>
                      </div>
                    </div>
                </div>

                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-six realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Reduce overall risk
                      </p>
                      </div>
                    </div>
                    </div>

                    <div className="carousel-cell">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-eight_b realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Evictions proceedings
                      </p>
                      </div>
                    </div>
                    </div>

                    <div className="carousel-cell">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-nine_b realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Possession of leased premises
                      </p>
                      </div>
                    </div>
                    </div>

                    <div className="carousel-cell">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-ten_b realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Financial reporting
                      </p>
                      </div>
                    </div>
                    </div>
            </div>

              {/* SLIDER A ENDS */}
            </div>


            <div className="realty-container right-hand-container">
              <div className="realty-content right-hand">
              <div className="realty__services-svgDivider"></div>
                <div className="realty-content_left">
                  <h1>investment service</h1>
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
                </div>
                <div className="realty-content_right">
                  
                </div>
              </div>


               {/* SLIDER A */}

               <div className="carousel" id="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-one realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Identify undervalue real estate properties
                      </p>
                      </div>
                    </div>
                </div>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-two realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Property acquisition                       </p>
                      </div>
                    </div>
                </div>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-three_b realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Leases administration
                      </p>
                      </div>
                    </div>
                </div>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-three realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Renovation and remodeling                       </p>
                      </div>
                    </div>
                </div>
                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-four realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Implement strategic capital and operational programs to increase cashflow                       </p>
                      </div>
                    </div>
                </div>

                <div className="carousel-cell">
                <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-six realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Reduce overall risk
                      </p>
                      </div>
                    </div>
                    </div>

                    <div className="carousel-cell">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-eight_b realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Evictions proceedings
                      </p>
                      </div>
                    </div>
                    </div>

                    <div className="carousel-cell">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-nine_b realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Possession of leased premises
                      </p>
                      </div>
                    </div>
                    </div>

                    <div className="carousel-cell">
                    <div className="realEstate-invest__item">
                      <div className="realEstate-invest__item-image-ten_b realEstate-invest__item-image--prop" />
                      <div className="realEstate-invest__item-content">
                        <p>
                          Financial reporting
                      </p>
                      </div>
                    </div>
                    </div>
            </div>

              {/* SLIDER A ENDS */}
            </div>




            
           <div className="realty_services" style={{display: 'none'}} >
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
                  <span className="realty_services_content-text-icon">
                    <i class="fas fa-info-circle"></i>
                  </span>
                  <div className="realty_services_content-paragraph">
                    Locataire offers to prospective partners opportunities
                  <br />
                  to invest in dozens of high-growth residential and
                  <br />
                  commercial properties in the United States, and Canada.
                  <br />
                    <br />
                  We leverage experience and local market knowledge to
                  <br />
                  produce top quality risk-adjusted returns for investors.
                </div>
                </div>

                <br />
                <div className="realty_services_content-banner"></div>

                <div className="realty_services-subContent">
                  <div className="realty_services-subsvg"></div>
                  <div className="realty_services-subtitle">
                    <div className="realty_services-verticalLine"></div>
                    <div className="services-subtitle">
                      <h3>
                        Real Estate investment services
                      <br />
                      include the following
                    </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className="realty_services-image">
                <span className="realty_services-midsvg"></span>
              </div>
            </section>

            <br />

            <div className="realty_services-option">
              <div className="realty_services-option-boxItem">
                <ul>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageOne"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-search-location"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            Identify undervalue real estate properties
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
                            Property acquisition
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
                            Renovation and remodeling
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
                            Implement strategic capital and operational programs
                            to increase cashflow
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
                            Implement effective asset management controls
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
                            Reduce overall risk
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="realty_services-option-decoration"></div>
              </div>
            </div>
          </div> 

          <div className="realty_services" style={{display: 'none'}}>
            <span className="realty_services-svg realty__services-svgLeft"></span>
            <div className="realty__services-svgDivider realty__services-svgDividerLeft"></div>
            <section className="realty_services-header realty_services-headerLeft">
              {/* content */}
              <div className="realty_services-content realty_services-contentLeft">
                <h1>property management</h1>
                <div className="realty_services_content-text">
                  <span className="realty_services_content-text-icon">
                    <i class="fas fa-info-circle"></i>
                  </span>
                  <div className="realty_services_content-paragraph">
                    Locataire real estate property managers offer hands-on
                  <br />
                  experience management of single-family homes,
                  <br />
                  multi-family homes, condominiums, townhouses, and
                  <br />
                  commercial properties.
                  <br />
                    <br />
                  building, our agents can assist you maximize profit
                  <br />
                  and keep operating expenses low
                </div>
                </div>

                <br />
                <div className="realty_services_content-banner"></div>

                <div className="realty_services-subContent">
                  <div className="realty_services-subsvg"></div>
                  <div className="realty_services-subtitle">
                    <div className="realty_services-verticalLine"></div>
                    <div className="services-subtitle">
                      <h3>
                        Property management services
                      <br />
                      include the following
                    </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className="realty_services-image realty_services-imageLeft">
                <span
                  className="realty_services-midsvg"
                  id="realty_services-midsvg-two"
                ></span>
              </div>
            </section>

            <br />

            <div className="realty_services-option">
              <div className="realty_services-option-boxItem">
                <ul>
                  <li>
                    <div className="realty_services-option--boxContainer">
                      <div className="realty__services-option--innerBox">
                        <div className="realty_services-option--imageContainer realty__services-option--imageOneLeft"></div>
                        <div className="realty_services-option--content">
                          <div className="realty__services-option-icon">
                            <i class="fas fa-search-location"></i>
                          </div>
                          <div className="realty__services-option-itemTitle">
                            Advertising and filling vacancies
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
                            Tenant screening (credit, criminal background)
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
                            Leases administration
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
                            Move-in inspection walkthrough
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
                            Rent payment
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
                            Repairs & maintenance
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
                            Vendor management
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
                            Evictions proceedings
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
                            Possession of leased premises
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
                            Financial reporting
                        </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="realty_services-option-decoration"></div>
              </div>
            </div>
          </div>
          
          </main>
          
          <Contact />
        </div>
    </>
  )
}

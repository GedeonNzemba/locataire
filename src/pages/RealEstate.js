import React, { useEffect } from "react"
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import IMG from "gatsby-image"
import "../styles/Locataire.css"
import "../fonts/gt super/stylesheet.css"
import "../components/realty_about_layout"
// import ButtonFive from "../components/ButtonFive"
import ButtonSix from "../components/buttonSix"
import ButtonSeven from "../components/buttonSeven"
import ButtonEight from "../components/ButtonEight"
import ButtonSevenB from "../components/buttonNine"
import Contact_btn from "../components/Contact_btn"

import RiskManagement from "./RiskManagement"
import Farm from "./Farm"

import Contact from "./Contact"
// import ScriptTag from 'react-script-tag';


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
  const image_1 = require("../images/REALTY/data0/images/image_1.jpg");
  const image_2 = require("../images/REALTY/data0/images/image_2.jpg");
  const image_3 = require("../images/REALTY/data0/images/image_3.jpg");
  const image_4 = require("../images/REALTY/data0/images/image_4.jpg");
  const image_5 = require("../images/REALTY/data0/images/image_5.jpg");
  const image_6 = require("../images/REALTY/data0/images/image_6.jpg");
  const image_7 = require("../images/REALTY/data0/images/image_7.jpg");

  const image_1a = require("../images/REALTY/data0/tooltips/image_1.jpg");
  const image_2b = require("../images/REALTY/data0/tooltips/image_2.jpg");
  const image_3c = require("../images/REALTY/data0/tooltips/image_3.jpg");
  const image_4d = require("../images/REALTY/data0/tooltips/image_4.jpg");
  const image_5e = require("../images/REALTY/data0/tooltips/image_5.jpg");
  const image_6f = require("../images/REALTY/data0/tooltips/image_6.jpg");
  const image_7g = require("../images/REALTY/data0/tooltips/image_7.jpg");





  useEffect(() => {

    const addCSS = url => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;

      document.head.appendChild(link);
    }

    const addJquery = url => {
      const script = document.createElement("script")
      script.src = url;
      script.async = true
      document.head.appendChild(script);
    }

    const addWowSliderScript = url => {
      const script = document.createElement("script")
      script.src = url;
      script.async = true
      document.body.appendChild(script)
    }

    const addScript = url => {
      const script = document.createElement("script")
      script.src = url;
      script.async = true
      document.body.appendChild(script)
    }

    

    addCSS("https://locataire.imfast.io/engine1/style.css");
    addJquery("https://locataire.imfast.io/engine1/jquery.js");
    addWowSliderScript("https://locataire.imfast.io/engine1/wowslider.js");
    addScript("https://locataire.imfast.io/engine1/script.js");
  }, [])


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
      <ParallaxProvider>
      <div className="realEstate-midD">
      <nav className="realEstate-navbar">
         
            {/* <div className="realEstate-logo" />
            <div id="burger" /> */}
          </nav>
        {/* TOP HEADER */}
        <header className="realEstate_header" >
          
        

          <section className="realEstate-header_section">
            <div className="svg-Mobile-header_top" />
            <div className="realEstate-header-content" >
              <div className="svg-Mobile-header_bottom" />
              <div className="realEstate-header-content__title">
                <h1>locataire realty</h1>
              </div>
              <div className="realEstate-header-content__text">
                <p>
                  Locataire Realty provides real estate <br className="header_text"/>
                  services to prospective clients looking <br className="header_text"/>
                  to buy, sell or lease residential and <br className="header_text"/>
                  commercial real estates in the United <br className="header_text"/>
                  States, and Canada.
                </p>
              </div>
              <div className="realEstate-header-content__btn">
                <Contact_btn name="contact us" />
              </div>
            </div>
              <div className="realEstate-header-content__btn" id="realEstate-header-content__btn">
                <Contact_btn name="contact us" />
              </div>
          </section>
        </header>

        {/* MAIN CONTENT */}

        <main className="realEstate-about">
          <section className="realEstate-title">
            <div className="realEstate-title_wrap">
              <div className="realEstate-subTitle">
                <span>about us</span>
              </div>
              <div className="realEstate-title">
                <h1>
                  Locataire Realty provides real estate
                  services to prospective clients.
                </h1>
              </div>
            </div>
          </section>
          <section className="realEstate-image">
            <Parallax >
            <IMG fluid={data.mobileTwo.childImageSharp.fluid} className="mobile_one tablet__IMG"  />
            </Parallax>
            <div className="svg-Mobile-about_left" />
            <div className="svg-Mobile-about_right"></div>
          </section>
          <section className="realEstate-content">
            <div className="realEstate-content_wrap" >
            <div className="realEstate-content_text">
              <p>
                Our core business includes management 
                and administration of commercial and 
                multifamily residential properties. 
              </p>
              <p>
                our primary business objective is to 
                maximize the total return to property 
                owners, through strategic acquisition, 
                re-development, re-lease and 
                management of these properties for 
                maximum cash flow.  
              </p>
            </div>
            </div>
            <div className="realEstate-content_btn">
              <div className="realEstate-content_btn-left">
                <ButtonSeven name="learn more" />
              </div>
              {/* <div className="realEstate-content_btn-right">
                <ButtonSix name="contact us" />
              </div> */}
            </div>
          </section>



          <section className="realEstate-title" id="realEstate-title">
            <div className="realEstate-title_wrap">
              <div className="realEstate-title" id="realEstate-title__two">
                <h1 className="realEstate-title_invest">
                  investment services
                </h1>
              </div>
            </div>
          </section>
          <section className="realEstate-image">
            <Parallax >
            <IMG fluid={data.mobileOne.childImageSharp.fluid} className="mobile_one tablet__IMG"/>
            </Parallax>
            <div id="svg-Mobile-about_left"/>
            <div className="svg-Mobile-about_right" id="svg-Mobile-about_right" />
          </section>

          <section className="realEstate-content">
            <div className="realEstate-content_wrap" >
            <div className="realEstate-content_text">
              <div id="svg-Mobile-invest_left"/>
              <div className="realEstate-content_icon">
                <span><i class="fas fa-info-circle"></i></span>
                <p>
                  Locataire offers to prospective partners 
                  opportunities to invest in dozens of high-growth 
                  residential and commercial properties in the 
                  United States, and Canada. 
                </p>
              </div>
              <div className="realEstate-content_icon">
                <span><i class="fas fa-info-circle"></i></span>
                <p>
                  We leverage experience and local market 
                  knowledge to produce top quality risk-adjusted 
                  returns for investors.
                </p>
              </div>
            </div>
            </div>

            <div className="realEstate-content-typo">
              <div className="realEstate-conent_content">
                <div className="realEsate-content__svg">
                  <div id="svg-Mobile-invest"/>
                </div>
                <div className="realEstate-content-sub_heading">
                  <div id="realEstate-verticle_line" />
                  <div className="realEstate-content-sub_heading--text">
                    <h3>
                      Real Estate investment services <br />
                      include the following
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="realEstate-invest__services">
              <div className="reaalEstate-invest_content">
                <div className="realEstate-invest__item-Wrap">

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-one realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                        Identify undervalue real estate properties
                      </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-two realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Property acquisition                       </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-three realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Renovation and remodeling                       </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-four realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Implement strategic capital and operational programs to increase cashflow                       </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-five realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Implement strategic capital and operational programs to increase cashflow                       
                      </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-six realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                        Reduce overall risk
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROPERTY MANAGEMENT */}
          <section className="realEstate-title" id="realEstate-title">
            <div className="realEstate-title_wrap">
              <div className="realEstate-title">
                <h1 className="realEstate-title_invest">
                  property management
                </h1>
              </div>
            </div>
          </section>
          <section className="realEstate-image">
            <Parallax >
            <IMG fluid={data.mobileTwo.childImageSharp.fluid} className="mobile_one tablet__IMG"/>
            </Parallax>
            <div id="svg-Mobile-about_left"/>
            <div className="svg-Mobile-about_right" id="svg-Mobile-about_right" />
          </section>

          <section className="realEstate-content">
            <div className="realEstate-content_wrap" >
            <div className="realEstate-content_text">
              <div id="svg-Mobile-invest_left"/>
              <div className="realEstate-content_icon">
                <span><i class="fas fa-info-circle"></i></span>
                <p>
                  Locataire real estate property managers offer hands-on
                  experience management of single-family homes,
                  multi-family homes, condominiums, townhouses, and
                  commercial properties.
                </p>
              </div>
              <div className="realEstate-content_icon">
                <span><i class="fas fa-info-circle"></i></span>
                <p>
                  Whether you own one unit or many in an apartment building, our agents can assist you maximize profit and keep operating expenses low
                </p>
              </div>
            </div>
            </div>

            <div className="realEstate-content-typo">
              <div className="realEstate-conent_content">
                <div className="realEsate-content__svg">
                  <div id="svg-Mobile-invest"/>
                </div>
                <div className="realEstate-content-sub_heading">
                  <div id="realEstate-verticle_line" />
                  <div className="realEstate-content-sub_heading--text">
                    <h3>
                      Property management services <br />
                      include the following
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="realEstate-invest__services">
              <div className="reaalEstate-invest_content">
                <div className="realEstate-invest__item-Wrap">

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-one_b realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Advertising and filling vacancies                      </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-two_b realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Tenant screening (credit, criminal background)     
                      </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-three_b realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Leases administration          
                      </p>          
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-four_b realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Move-in inspection walkthrough         
                      </p>          
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-five_b realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Rent payment                      
                      </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-six_b realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Repairs & maintenance                      
                      </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-seven_b realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Vendor management
                      </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-eight_b realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Evictions proceedings
                      </p>
                    </div>
                  </div>

                  <div className="realEstate-invest__item">
                    <div className="realEstate-invest__item-image-nine_b realEstate-invest__item-image--prop" />
                    <div className="realEstate-invest__item-content">
                      <p>
                      	Possession of leased premises
                      </p>
                    </div>
                  </div>

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
            </div>
          </section>

          <Contact />

        </main>
      </div>





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
                    prospective <br />
                    clients looking to buy, sell or lease residential and
                    commercial
                    <br />
                    real estates in the United States and Canada.
                  </p>
                </div>
                <div className="realEstate_getMoreInfoBtn">
                  <ButtonSevenB name="learn more" />
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="realEstate_rightContainer">
              <div id="wowslider-container1">
                <div className="ws_images">
                  <ul>
                    <li>
                      <img
                        src={image_1}
                        alt=""
                        
                        id="wows1_0"
                      />
                      {/* Locataire offers to prospective partners opportunities to
                      invest in dozens of high-growth residential and commercial
                      properties in the United States, and Canada. */}
                    </li>
                    <li>
                      <img
                        src={image_2}
                        alt="Residential Real Estate"
                        // 
                        id="wows1_1"
                      />
                      {/* Locataire offers to prospective partners opportunities to
                      invest in dozens of high-growth residential and commercial
                      properties in the United States, and Canada. */}
                    </li>
                    <li>
                      <img
                        src={image_3}
                        alt="Residential Real Estate"
                        // 
                        id="wows1_2"
                      />
                      {/* Locataire offers to prospective partners opportunities to
                      invest in dozens of high-growth residential and commercial
                      properties in the United States, and Canada. */}
                    </li>
                    <li>
                      <img
                        src={image_4}
                        alt="Residential Real Estate"
                        // 
                        id="wows1_3"
                      />
                      {/* Locataire offers to prospective partners opportunities to
                      invest in dozens of high-growth residential and commercial
                      properties in the United States, and Canada. */}
                    </li>
                    <li>
                      <img
                        src={image_5}
                        alt=""
                        
                        id="wows1_4"
                      />
                      {/* Locataire offers to prospective partners opportunities to
                      invest in dozens of high-growth residential and commercial
                      properties in the United States, and Canada. */}
                    </li>
                    <li>
                      <a href="http://wowslider.net">
                        <img
                          src={image_6}
                          alt="wow slider"
                          
                          id="wows1_5"
                        />
                      </a>
                      {/* Locataire offers to prospective partners opportunities to
                      invest in dozens of high-growth residential and commercial
                      properties in the United States, and Canada. */}
                    </li>
                    <li>
                      <img
                        src={image_7}
                        alt="Residential Real Estate"
                        // 
                        id="wows1_6"
                      />
                      {/* Locataire offers to prospective partners opportunities to
                      invest in dozens of high-growth residential and commercial
                      properties in the United States, and Canada. */}
                    </li>
                  </ul>
                </div>
                <div class="ws_bullets">
                  <div>
                    <a href="www.google.com" >
                      <span>
                        <img src={image_1a} alt="" />1
                      </span>
                    </a>
                    <a href="www.google.com" >
                      <span>
                        <img src={image_2b} alt="Residential Real Estate" />2
                      </span>
                    </a>
                    <a href="www.google.com" >
                      <span>
                        <img src={image_3c} alt="Residential Real Estate" />3
                      </span>
                    </a>
                    <a href="www.google.com" >
                      <span>
                        <img src={image_4d} alt="Residential Real Estate" />4
                      </span>
                    </a>
                    <a href="www.google.com" >
                      <span>
                        <img src={image_5e} alt="" />5
                      </span>
                    </a>
                    <a href="www.google.com" >
                      <span>
                        <img src={image_6f} alt="" />6
                      </span>
                    </a>
                    <a href="www.google.com" >
                      <span>
                        <img src={image_7g} alt="Residential Real Estate" />7
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  className="ws_script"
                  style={{ position: "absolute", left: "-99%" }}
                >
                  <a href="http://wowslider.net">bootstrap image slider</a> by
                  WOWSlider.com v9.0
                </div>
                <div className="ws_shadow"></div>
              </div>
            </div>
          </section>
        </header>
        {/* ABOUT LOCATAIRE */}
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
                    <div className="realty__rightBtn">
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
                    <div className="realty__leftBtn">
                      <ButtonSeven name="learn more" />
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
        <main className="investment_service">
          <section className="investment_service-main">
            <div className="investment_service-inner_img">
              <div className="investment_service-image" />
            </div>
          
          <div className="investment_service-content">
            <div className="investment_service-header">
              <h1 style={{marginBlockStart: "none"}}>investment service</h1>
            </div>
            <div className="investment_service-text">
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
          </section>
        </main>

        <div className="realty_services">
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
        <br />
        <br />
        <br />
        <br /> {/* LEFT */}
        <div className="realty_services">
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
        <Contact />
      </div>
      </ParallaxProvider>
    </>
  )
}

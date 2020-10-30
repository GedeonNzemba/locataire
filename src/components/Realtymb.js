import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import IMG from "gatsby-image"
import "../styles/Locataire.css"
import "../fonts/gt super/stylesheet.css"
import "../components/realty_about_layout"
// import ButtonFive from "../components/ButtonFive"
import ButtonSix from "./buttonSix"
import ButtonSeven from "./buttonSeven"
import ButtonEight from "./ButtonEight"
import ButtonSevenB from "./buttonNine"
import Contact_btn from "./Contact_btn"
import Navbar from "./Navbar";

import Home from '../pages/Home'
import realEstate from '../pages/RealEstate'
import Farm from '../pages/Farm'
import Contact from '../pages/Contact'
import Career from '../pages/Career'
import RiskManagement from '../pages/RiskManagement'
import RealEstate from "../pages/RealEstate";
// import ScriptTag from 'react-script-tag';


export default function Realtymobile() {
  // const cover_mobile = require("../images/REALTY/mobile/drawable-mdpi/Group11.png")
  // const realty_about = require("../images/REALTY/realty_about_layout.png");
  // const realty_about_2 = require("../images/REALTY/realty_about_layout-about-2.png");
  // const realty_about_3 = require("../images/REALTY/realty_about_layout-about-3.png");

  // const cdn_1 = require("../static/engine0/style.css");
  // const cdn_2 = require("../images/REALTY/engine1/script");
  // const cdn_3 = require("https://locataire.imfast.io/engine1/jquery.js");
  // const cdn_4 = require("https://locataire.imfast.io/engine1/wowslider.mod.js");

  // IMAGES FOR HEADER SLIDER


//   useEffect(() => {

//     const addCSS = url => {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = url;

//       document.head.appendChild(link);
//     }

//     const addJquery = url => {
//       const script = document.createElement("script")
//       script.src = url;
//       script.async = true
//       document.head.appendChild(script);
//     }

//     const addWowSliderScript = url => {
//       const script = document.createElement("script")
//       script.src = url;
//       script.async = true
//       document.body.appendChild(script)
//     }

//     const addScript = url => {
//       const script = document.createElement("script")
//       script.src = url;
//       script.async = true
//       document.body.appendChild(script)
//     }



//     addCSS("https://locataire.imfast.io/engine1/style.css");
//     addJquery("https://locataire.imfast.io/engine1/jquery.js");
//     addWowSliderScript("https://locataire.imfast.io/engine1/wowslider.js");
//     addScript("https://locataire.imfast.io/engine1/script.js");
//   }, [])


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
          <Router>
            <Navbar />
            <Switch >
              <Route path='/home' component={Home} />
              <Route path='/'  component={RealEstate} />
              <Route path='/farm' component={Farm} />
              <Route path='/contact' component={Contact} />
              <Route path='/career' component={Career} />
              <Route path='/riskmanagement' component={RiskManagement} />
            </Switch>
          </Router>
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
                    Locataire Realty provides real estate <br className="header_text" />
                  services to prospective clients looking <br className="header_text" />
                  to buy, sell or lease residential and <br className="header_text" />
                  commercial real estates in the United <br className="header_text" />
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
                <IMG fluid={data.mobileTwo.childImageSharp.fluid} className="mobile_one tablet__IMG" />
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
                <IMG fluid={data.mobileOne.childImageSharp.fluid} className="mobile_one tablet__IMG" />
              </Parallax>
              <div id="svg-Mobile-about_left" />
              <div className="svg-Mobile-about_right" id="svg-Mobile-about_right" />
            </section>

            <section className="realEstate-content">
              <div className="realEstate-content_wrap" >
                <div className="realEstate-content_text">
                  <div id="svg-Mobile-invest_left" />
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
                    <div id="svg-Mobile-invest" />
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
                <IMG fluid={data.mobileTwo.childImageSharp.fluid} className="mobile_one tablet__IMG" />
              </Parallax>
              <div id="svg-Mobile-about_left" />
              <div className="svg-Mobile-about_right" id="svg-Mobile-about_right" />
            </section>

            <section className="realEstate-content">
              <div className="realEstate-content_wrap" >
                <div className="realEstate-content_text">
                  <div id="svg-Mobile-invest_left" />
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
                    <div id="svg-Mobile-invest" />
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
    </ParallaxProvider>]
    </>
  )
}
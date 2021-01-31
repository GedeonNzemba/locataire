import React, { useState } from "react"
import "../styles/Locataire.css"

import ButtonFour from "./buttonFour"
import ButtonThree from "./ButtonThree"
import ButtonFive from "./buttonFive"
import FarmPslide from "./FarmPslide"
import MainContent_farm from "./MainContent_farm"
import {Container, Col, Row, Header} from "react-bootstrap"
import Food_map from "./Food_map"
import Livestock_map from "./Livestock_map"
import Nutrition_map from "./Nutrition_map"
import Product_nav from './data/Product_nav'

export default function RealtyFarmLayout() {
  
  const profession = ["All", "Food", "Livestock", "Nutrition"];
  const [myProfession, setMyProfession] = useState(<MainContent_farm />);

  // if (myProfession === "All") {
  //   const title = document.getElementById('title');
  //   title.innerHTML('All');
  // }

  // const titlelists = Product_nav.map((item) => 

  //     <div class="button-group"  key={item.id}>
  //       <button class="button" onClick={() => setMyProfession(profession)}>
  //         {item.title}
  //       </button>
  //     </div>


  
  // )

  return (
    <React.Fragment>
      <iframe frameborder="0"  style={{width: '100%', height: '434vh', border: 'none'}} src="http://locatairefarm.online/" ></iframe>
      {/* <FarmPslide /> */}
      <div className="realty__farm">
        <header className="realty__farm-header">
          <nav className="realty__farm-navbar">
            <ul className="realty__farm-navWrap">
              <li className="nav-item" id="nav-logo">
                <img
                  src={require("../images/logo.png")}
                  alt="Locataire logo"
                ></img>
              </li>
            </ul>
            <div id="divider-header-farm" />
            <ul className="realty__farm-navWrap">
              <li className="nav-item">
                <span>home</span>
              </li>
              <li className="nav-item">
                <span>real estate</span>
              </li>
              <li className="nav-item">
                <span>livestock</span>
              </li>
              <li className="nav-item">
                <span>risk management</span>
              </li>
              <li className="nav-item">
                <span>career</span>
              </li>
            </ul>
          </nav>

          <div className="realty__farm-content">
            <section className="realty__farm-content-text">
              <div className="realty__farm-content-wrap">
                <div className="realty__farm-content-title">
                  <h1>livestock production</h1>
                </div>
                <div className="realty__farm-content-paragraph">
                  <p>
                    Locataire Farm is an agribusiness and food ingredient entity
                    dedicated
                    <br />
                    to improving the global food supply chain.
                  </p>
                  <p>
                    The farm is located in Pointe-Noire, a port city <br />
                    industry hub in the Republic of the Congo
                  </p>
                </div>
                <div className="realty__farm-content-buttons">
                  <div className="realty__farm-button-left">
                    <ButtonFour />
                  </div>
                  <div className="realty__farm-button-right">
                    <ButtonFive name="Contact Us"/>
                  </div>
                </div>
              </div>
            </section>

            <section className="realty__farm-content-image">
              {/* <Helmet>
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />

                        </Helmet> */}
              <div className="realty__farm-content-circleOne"></div>
              <div className="realty__farm-content-image_slide"></div>
            </section>
          </div>
        </header>

        <br />
        <br />
        <br />

          <>
              <FarmPslide />
          </>


        <br />
        <br />
        <br />

        <Container fluid className="realty__farm-Product">
          {/* <div id="circle-svg-right_one" />
          <div id="circle-svg-right_two" /> */}
          <Col id="farm_product-container">
            {/* <Row className="farm-product_row">
              <Header title="Show and hide elements" />
              <div className="btn-group" role="group" aria-label="Basic example">
                {profession.map(profession => (
                  <button 
                    type="button"
                    key={profession}
                    className={"btn btn-light border-dark"}
                    onClick={() => setMyProfession(profession)}
                  >
                    {profession.toLocaleUpperCase}
                  </button>
                ))}
              </div>

              <div className="col text-center">
                <p>{myProfession}</p>
                <p>
                  {myProfession === "police" && <h3>This is Police</h3>}
                </p>
              </div>

            </Row> */}



            <Row className="farm-product_row">
              <header className="realty__farm-Product_header">
                <div className="realty__farm-Product_header-title">
                  <h2>our products</h2>
                </div>
                
                {/* <div className="btn-group" role="group" aria-label="Basic example">
                {profession.map(profession => (
                  <button 
                    type="button"
                    key={profession}
                    className={"btn btn-light border-dark"}
                    onClick={() => setMyProfession(profession)}
                  >
                    {profession.toLocaleUpperCase}
                  </button>
                ))}
              </div> */}
              

              <br />

                  {console.log(Product_nav)};
                  <Container>
                <Row>
                <div class="button-group">
                {profession.map(profession => (
                  <button class="button" onClick={() => setMyProfession(profession)} key={profession}>
                    {profession.toLocaleUpperCase}
                    {profession}
                  </button>
                ))}

                  {/* <button class="button button--primary">
                    Primary
                  </button>

                  <button class="button button--warn">
                    Warn
                  </button>
                  <button class="button button--secondary">
                    Secondary
                  </button> */}
                </div>
                </Row>
              </Container>
              
              </header>
            </Row>
          

          {/* MAIN BOX ITEM */}
          <Row className="farm-product_row">
              <>
              

              <div className="col text-center">
                <p style={{color: '#ffffff'}}>{myProfession}</p>
                <p style={{color: '#ffffff'}}>
                  {myProfession === "All" && <Row className="farm-product_row"><MainContent_farm /></Row>}
                  {myProfession === "Food" && <Row className="farm-product_row"><Food_map /></Row>}
                  {myProfession === "Livestock" && <Row className="farm-product_row"><Livestock_map /></Row>}
                  {myProfession === "Nutrition" && <Row className="farm-product_row"><Nutrition_map /></Row>}
                </p>
                </div>
              </>
          </Row>
          {/* MAIN BOX ITEN ENDS */}

          
          {/* <iframe frameborder="0" scrolling="no" style="height:800px;width:100%;border:none;" src='http://locatairefarm.online/'></iframe> */}

          {/* <div className="realty__farm-Product_productContainerWrap">
            <div className="realty__farm-Product_productContainer">
            <div className="realty__farm-Product_product-box realty__farm-Product_box-1">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Animal Nutrition</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>
                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            <div className="realty__farm-Product_product-box realty__farm-Product_box-2">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-two" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Hatching Eggs</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>
                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            <div className="realty__farm-Product_product-box realty__farm-Product_box-3">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-three" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Poultry Meat</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>
            <div className="realty__farm-Product_product-box realty__farm-Product_box-4">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-four" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Old Day Chick</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            <div className="realty__farm-Product_product-box realty__farm-Product_box-5">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-five" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Livestock</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            <div className="realty__farm-Product_product-box realty__farm-Product_box-6">
              <div className="realty__farm-Product_product-box_imageContainer">
                <div className="realty__farm-Product_product-box_image realty__farm-Product_product-box_image-six" />
              </div>
              <div className="realty__farm-Product_product-box_content">
                <div className="realty__farm-Product_product-box_content-titleWrap">
                    <div className="realty__farm-Product_product-box_content-title">
                      <span>Fresh Eggs</span>
                    </div>
                    <div className="realty__farm-Product_product-box_content-title_line">
                        <hr id="product-line"/>
                    </div>                </div>
                <div className="realty__farm-Product_product-box_content-buttonWrap">
                  <ButtonThree />
                </div>
              </div>
            </div>

            
          </div>
          <br />
          <br />
         

          

          

          <div className="realty__farm-product__svgCircle-a" />
          </div> */}
          <div className="realty__farm-product-contactWrap">
            <div className="realty__farm-product-contact_image" />
            <div className="realty__farm-product-contact_content">
              <h1>
                Contact Us
              </h1>
              <p>
                For questions, more information or to place an order, <br />
                call or email us at info@locataire.net. We will review <br />
                your needs and discuss availability and delivery <br />
                options.
              </p>
            </div>
          </div>

          <div className="realty__farm-product-animal">
            <div className="realty__farm-product-content_left">
              <span>
                BOARD SEMEN ( PUREBRED )
              </span>
            </div>
            <div className="realty__farm-aboutUs-top_content_Rightwrap">
              <div className="realty__farm-aboutUs-top_content_divider"></div>
              <div className="realty__farm-aboutUs-top_content_text">
                we sell fresh (pure blood) pig seeds or refrigerated high qualities for <br />
                artificial reproduction of pure bred and crossbred. The boars Duroc, <br />
                Landrace, Berkshire, offered are intended to produce hybrid soars. <br />
                These are elite genetic strains from recognized and accredited <br />
                insemination centers in the United States. 
              </div>
            </div>

            
          </div>

          
          <br />
          <br />
          <br />
          <div className="realty__farm-product-BOARD-SEMEN">
            <div className="realty__farm-product__svgCircle-c" />
            <div className="realty__farm-product__svgCircle-d" />
            <div className="realty__farm-product-BOARD-SEMEN_duroc-bra">
              <div className="realty__farm-product__svgCircle-b" />
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      duroc-bra
                    </h1>
                    <p>
                      DUROC-BRA is a very trim made boar being lean about the jowl and <br />
                      trim middle. He has lean muscular top and shapely, thick ham. He <br />
                      stands on good bone with even toes and correctly structured both <br />
                      front and rear
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img" />
              </div>
            </div>

            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-rez">
              <div className="realty__farm-product__svgCircle-c" />
              <section id="section1">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      DUROC-REDZ
                    </h1>
                    <p>
                      DUROC-REDZ is a big, high performing and well balance and sound <br />
                      Duroc boar. He can inject superior performance and cutability into <br />
                      your herd while maintaining a sound well-balance phenotype. He is <br />
                      wide based, bold shouldered with very good spring of rib.
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img" />
              </div>
              </section>
            </div>





            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-riss">
              <div className="realty__farm-product__svgCircle-d" />
              <section id="section2">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      DUROC-RISS
                    </h1>
                    <p>
                      DUROC-RISS features a big forearm and blade with big, even toes <br />
                      that set down very correct and square as he floats across the <br />
                      ground on the move. A big top and rump features ideal muscle <br />
                      shape and volume for a terminal production-oriented sire.
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-riss__img" />
              </div>
              </section>
            </div>



            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-rez">
              <div className="realty__farm-product__svgCircle-c" />
              <section id="section1">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      DUROC-REG
                    </h1>
                    <p>
                      DUROC-REG is a wide made boar that displays a bold shoulder, wide <br />
                      chest floor and big well sprung rib cage. He has excellent shape down <br />
                      his top with a big square rump and a thick muscular ham. Well balanced <br />
                      from end to end, Reggie is very correct in his feet and leg structure. He <br />
                      stands on good bone with big even toes
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-reg__img" />
              </div>
              </section>
            </div>



            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-riss" id="duroc-mrr">
              <div className="realty__farm-product__svgCircle-d" />
              <section id="section2">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      DUROC-MRR
                    </h1>
                    <p>
                      DUROC-MRR is one of our best boars purchased. his proportions <br />
                      are incredible, his natural width of skeleton is superb, and he's got <br />
                      a long, square and athletic rear joint for a red hog.  
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-mrr__img" />
              </div>
              </section>
            </div>



          <div className="landrace_title">
            <span>
              Landrace
            </span>
          </div>

          <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-rez" id="landrace">
              <div className="realty__farm-product__svgCircle-c" id="landrace_svgCircle"/>
              <section className="landrace" id="section1">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                     LANDRACE-BUX
                    </h1>
                    <p>
                      LANDRACE-BUX has an extra punch for heaviness of structure and <br />
                      superior durability. He comes in a moderate framed, long bodied <br />
                      package. Landrace-BUX is very youthful. He exhibits clean bone, <br />
                      superior underline texture and a sharp sheath. His daughters can be <br />
                      expected produce more pigs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image" id="landrace_image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar"  />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-bux__img" />
              </div>
              </section>
            </div>
              
            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-riss" id="landrace">
              <div className="realty__farm-product__svgCircle-d" id="landrace_svgCircle" />
              <section className="landrace" id="section2">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      LANDRACE-FIN
                    </h1>
                    <p>
                      LANDRACE-FIN is one of the most productive and dominate line in <br />
                      the Landrace breed. The pig has that extra heaviness of structure, <br />
                      long faced, long necked, built to withstand the rigorous of <br />
                      confinement.  
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image" id="landrace_image">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-fin__img" />
              </div>
              
              </section>
            </div>

            
            <div className="landrace_title">
            <span>
            BERKSHIRE 
            </span>
          </div>

          <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-rez" id="berkshire_clip">
              <div className="realty__farm-product__svgCircle-c" />
              <section id="section1">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      BERKSHIRE-SEP
                    </h1>
                    <p>
                      BERKSHIRE-SEP - Three traits standout: Meat Quality- marbling as <br />
                      intramuscular fat has always been superb. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image" id="berkshire">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar"  />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-sep__img" />
              </div>
              </section>
            </div>

            <div className="realty__farm-product-BOARD-SEMEN_duroc BOARD-SEMEN_duroc-riss" id="berkshire_bottom-clip">
              <div className="realty__farm-product__svgCircle-d"  />
              <section id="section2">
              <div className="farm-product-BOARD-SEMEN_duroc-bra__content">
                <div className="farm-product-BOARD-SEMEN_duroc-bra__content_textwrap">
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__content_innertext">
                    <h1>
                      BERKSHIRE-EXC
                    </h1>
                    <p>
                      BERKSHIRE-EXC is known for superior meat quality, and durable in <br />
                      his build, stout in his muscle and excellent on his feet and legs.  
                    </p>
                  </div>
                </div>
              </div>
              <div className="farm-product-BOARD-SEMEN_duroc-bra__image" id="berkshire">
                <span className="farm-product-BOARD-SEMEN_duroc-bra__bg-bar" />
                  <div className="farm-product-BOARD-SEMEN_duroc-bra__img farm-product-BOARD-SEMEN_duroc-exc__img" />
              </div>
              
              </section>
            </div>

            <div className="realty__farm-product-contactWrap" id="product_contact-bottom">
            <div className="realty__farm-product-contact_image" />
            <div className="realty__farm-product-contact_content">
              <h1>
                Contact Us
              </h1>
              <p>
                For questions, more information or to place an order, <br />
                call or email us at info@locataire.net. We will review <br />
                your needs and discuss availability and delivery <br />
                options.
              </p>
            </div>
          </div>

           
          </div>
          </Col>
        </Container>
      </div>
    </React.Fragment>
  )
}

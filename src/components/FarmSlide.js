import React, { component } from 'react'
// import {Carousel} from 'react-bootstrap/Carousel';
// import {Container, Col, Row, Card, Button, Item} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { GiRoastChicken, GiHealthNormal, GiLifeSupport, GiMeat, GiGrass } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Helmet from 'react-helmet';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function FarmSlide() {

    
    
    return (
        <React.Fragment>
           <div className="carousel" id="farm" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
                <div className="carousel-cell hvr-overline-from-center" id="production-card-anim">
                    <div className="farm-services-container ">
                        <div className="farm-services--imageContainer"  id="farm-services__chickens-img"/>
                        <div className="farm-services--contentContainer">
                            <section className="farm-content-topWrap">
                                <Row className="farm-content-top__wrapper">
                                    <Col className="farm-icon-wrap"><GiRoastChicken className="farm-icon-slide" /></Col>
                                    <Col className="farm-content-slide-titleWrap"><h4 className="farm-content-slide-title">Poultry Production</h4></Col>
                                </Row>
                            </section>
                            <section className="farm-content-bottomWrap">
                                <Row className="farm-content-bottom__wrapper">
                                    <Col>
                                        <p className="farm-paragraph-slide">
                                            We raised various poultry species including 
                                            crossbred chickens, turkeys, ducks, guinea 
                                            fowl, and geese.
                                        </p>
                                    </Col>
                                </Row>
                                </section>
                                <Button variant="success" className="bootstrap__btn">Contact Us</Button>
                        </div>
                    </div>
                </div>
                <div className="carousel-cell hvr-overline-from-center" id="production-card-anim">
                <div className="farm-services-container ">
                        <div className="farm-services--imageContainer"  id="farm-services__pigs-img"/>
                        <div className="farm-services--contentContainer">
                            <section className="farm-content-topWrap">
                                <Row className="farm-content-top__wrapper">
                                    <Col className="farm-icon-wrap"><GiGrass className="farm-icon-slide" /></Col>
                                    <Col className="farm-content-slide-titleWrap"><h4 className="farm-content-slide-title">Healthy Journey</h4></Col>
                                </Row>
                            </section>
                            <section className="farm-content-bottomWrap">
                                <Row className="farm-content-bottom__wrapper">
                                    <Col>
                                        <p className="farm-paragraph-slide">
                                            Our animals are raised outdoors on pasture where they 
                                            enjoy a comfort that allows them to express their 
                                            natural behaviors.
                                        </p>
                                    </Col>
                                </Row>
                                </section>
                                <Button variant="success" id="bootContact" className="bootstrap__btn">Contact Us</Button>
                        </div>
                    </div>
                </div>
                <div className="carousel-cell hvr-overline-from-center" id="production-card-anim">
                <div className="farm-services-container ">
                        <div className="farm-services--imageContainer"  id="farm-services__check-img"/>
                        <div className="farm-services--contentContainer">
                            <section className="farm-content-topWrap">
                                <Row className="farm-content-top__wrapper">
                                    <Col className="farm-icon-wrap"><GiHealthNormal className="farm-icon-slide" /></Col>
                                    <Col className="farm-content-slide-titleWrap"><h4 className="farm-content-slide-title">Veterinarian Support</h4></Col>
                                </Row>
                            </section>
                            <section className="farm-content-bottomWrap">
                                <Row className="farm-content-bottom__wrapper">
                                    <Col>
                                        <p className="farm-paragraph-slide">
                                             We also have the support of a veterinarian who performs 
                                             weekly check of our animals and provides advise 
                                             for their care.
                                        </p>
                                    </Col>
                                </Row>
                                </section>
                                <Button variant="success" className="bootstrap__btn">Contact Us</Button>
                        </div>
                    </div>
                </div>
                <div className="carousel-cell hvr-overline-from-center" id="production-card-anim">
                <div className="farm-services-container ">
                        <div className="farm-services--imageContainer" id="farm-services__health-img" />
                        <div className="farm-services--contentContainer">
                            <section className="farm-content-topWrap">
                                <Row className="farm-content-top__wrapper">
                                    <Col className="farm-icon-wrap"><GiLifeSupport className="farm-icon-slide" /></Col>
                                    <Col className="farm-content-slide-titleWrap"><h4 className="farm-content-slide-title">Animal Care</h4></Col>
                                </Row>
                            </section>
                            <section className="farm-content-bottomWrap">
                                <Row className="farm-content-bottom__wrapper">
                                    <Col>
                                        <p className="farm-paragraph-slide">
                                        	Our well-trained staff work with the animals 
                                            taking care of them on a daily basis. 

                                        </p>
                                        <p style={{display: 'none'}}>
                                            They take special attention to hygiene, feeding and 
                                            preventive measures to reduce to a minimum injury 
                                            or any type of stress. 
                                        </p>
                                    </Col>
                                </Row>
                                </section>
                                <Button variant="success" className="bootstrap__btn">Contact Us</Button>
                        </div>
                    </div>
                </div>
                <div className="carousel-cell hvr-overline-from-center" id="production-card-anim">
                <div className="farm-services-container ">
                        <div className="farm-services--imageContainer" id="farm-services__turkey-drink-img" />
                        <div className="farm-services--contentContainer">
                            <section className="farm-content-topWrap">
                                <Row className="farm-content-top__wrapper">
                                    <Col className="farm-icon-wrap"><GiMeat className="farm-icon-slide" /></Col>
                                    <Col className="farm-content-slide-titleWrap"><h4 className="farm-content-slide-title">Meat Production</h4></Col>
                                </Row>
                            </section>
                            <section className="farm-content-bottomWrap">
                                <Row className="farm-content-bottom__wrapper">
                                    <Col>
                                        <p className="farm-paragraph-slide">
                                            Raised without antibiotics or growth enhancers, 
                                            animals’ nutrition includes cereals and flaxseed.
                                        </p>
                                    </Col>
                                </Row>
                                </section>
                                <Button variant="success" className="bootstrap__btn">Contact Us</Button>
                        </div>
                    </div>
                </div>
                <div className="carousel-cell hvr-overline-from-center" id="production-card-anim">
                <div className="farm-services-container ">
                        <div className="farm-services--imageContainer" id="farm-services__guideline-drink-img" />
                        <div className="farm-services--contentContainer">
                            <section className="farm-content-topWrap">
                                <Row className="farm-content-top__wrapper">
                                    <Col className="farm-icon-wrap"><VscLaw className="farm-icon-slide" /></Col>
                                    <Col className="farm-content-slide-titleWrap"><h4 className="farm-content-slide-title">Guidelines</h4></Col>
                                </Row>
                            </section>
                            <section className="farm-content-bottomWrap">
                                <Row className="farm-content-bottom__wrapper">
                                    <Col>
                                        <p className="farm-paragraph-slide">
                                            At Locataire, we follow strict guidelines to produce safe, healthy eggs and provide care for hens. 
                                        </p>
                                    </Col>
                                </Row>
                                </section>
                                <Button variant="success" className="bootstrap__btn">Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FarmSlide

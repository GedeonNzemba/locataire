import React from 'react';
import {Carousel} from 'react-bootstrap/Carousel';
import {Container, Col, Row} from 'react-bootstrap';
import FarmSlide from './FarmSlide';
import { GiMaterialsScience } from 'react-icons/gi'
import { SiMicrogenetics } from 'react-icons/si'


function FarmPslide() {
    return (
        <>
            <Container  className="production-container">
                <Row className="production-title_wrap" >
                    <Col  className="production-title_left" >
                        <div className="production-subtitle"><span>know about us</span></div>
                        <div className="production-title"><h2>livestock production</h2></div>
                    </Col>
                    <Col  className="production-title_right" >
                        {/* <div className="production-title_line" /> */}
                        <p>
                            From our farm to the table, our team supplies raw and
                            processed agricultural commodities and specialized
                            food ingredients to a wide range of customers in the
                            livestock, poultry, food processor, food services and
                            bakery industries.
                        </p>
                    </Col>
                </Row>
                <Row className="production-slider" >
                    <aside sm={4} className="col production-content_left" >
                        <div className="production-image_slide" />
                    </aside>
                    <Col sm={8} className="production-content_right" >
                        <div className="production-slide">
                            <FarmSlide />
                        </div>
                        <div className="production-content_bottom">
                            <div className="production-content__bottomPrg">
                                <Row className="production-content__bottom-top">
                                    <h2 className="production-content__bottom--title">
                                        We offer alternative farming system 
                                        with regard to biosecurity
                                    </h2>
                                </Row>
                                <Row className="production-content__bottom-middle">
                                    <p>
                                        based on free range production of poultry, 
                                        table eggs, pig, and goat. 
                                    </p>
                                    <p>
                                        We produce organic products of superior quality in accordance 
                                        with food safety management standards such 
                                        as the International Standard ISO 22000. 
                                    </p>
                                </Row>

                                {/* BOTTOM */}
                                <Row className="production-content__bottom-bottom">
                                    <div className="production-content__bottom-bottom--wrap">
                                        <Row className="production-content__bottom-bottom--itemwrap">
                                            <Col className="production__bottom--col"><SiMicrogenetics /></Col>
                                            <Col>
                                                <div className="production__bottom--text">
                                                    <p>
                                                        birds are bred for meat or egg production 
                                                        and require intensive nutritional and health 
                                                        management to express their genetic potential. 
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="production-content__bottom-bottom--itemwrap">
                                            <Col className="production__bottom--col">< GiMaterialsScience /></Col>
                                            <Col>
                                                <div className="production__bottom--text">
                                                    <p>
                                                    	Turkeys are generally raised for meat, not for any eggs they might provide.
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="production-content__bottom-bottom--itemwrap">
                                            <Col className="production__bottom--col"><GiMaterialsScience /></Col>
                                            <Col>
                                                <div className="production__bottom--text">
                                                    <p>
                                                    	Ducks however are raised for meat, feathers and for their eggs. 
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>

                                    </div>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default FarmPslide

import React from "react"
import "../styles/Locataire.css"

import ButtonSix from "./buttonSix"
import ButtonSeven from "./buttonSeven"
import RealEstate from "../pages/RealEstate"


export default function RealtyRiskManagementLayout() {
  return (
    <React.Fragment>
        <div className="locataire__risk-management">
            <header className="risk-management__header">
                <nav className="risk-management__navbar">
                    <div className="risk-management_logoWrap">
                        <img src={require("../images/logo.png")} alt="Locataire logo"></img>
                    </div>
                    <div id="risk-management__divider" />
                    <ul>
                        <li>home</li>
                        <li>real estate</li>
                        <li>livestock</li>
                        <li>risk management</li>
                        <li>career</li>
                    </ul>
                </nav>
                <div className="risk-management__headerWrap">
                    <div className="risk-management__leftWrap">
                        <div className="risk-management__header-content">
                            <div className="rs-subtitle" >
                                <h3>audit & management</h3>
                                <hr id="risk-management__Textline"/>
                            </div>
                            <h1>
                                Enhance The Degree <br />
                                Of Confidence
                            </h1>
                            <div className="risk-management__HeaderButton">
                                <ButtonSix name="Read More" />
                                <div id="rs-line" />
                                <ButtonSeven name="Contact Us"/>
                            </div>
                        </div>
                        <div className="risk-management__header-rs_img">
                            <div className="risk-management__header-rs_image" />
                        </div>
                    </div>
                    <div className="risk-management__rightWrap">
                        <section id="risk-management__RightTopcontainer">
                            <div className="risk-management__header-brief" id="risk-management__header-brief">
                                <h2>
                                    Locataire Risk Management 
                                </h2>
                                <p>
                                    We provides tailored solutions to help private companies <br />
                                    improve business strategies and practices.
                                </p>
                            </div>
                        </section>
                        <div className="risk-management__rightContent">
                            <div className="risk-management__right_image" />
                            {/* <div className="risk-management__header-brief">
                                <h2>
                                    Locataire Risk Management 
                                </h2>
                                <p>
                                    We provides tailored solutions to help private companies <br />
                                    improve business strategies and practices.
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </header>
        </div>

        


        <div className="locataire__risk-management_B" id="slide-2">
            <header id="risk-management__header_B">
                <nav className="risk-management__navbar_B">
                    <div className="risk-management_logoWrap_B">
                        <img src={require("../images/logo.png")} alt="Locataire logo"></img>
                    </div>
                    <div id="risk-management__divider_B" />
                    <ul>
                        <li>home</li>
                        <li>real estate</li>
                        <li>livestock</li>
                        <li>risk management</li>
                        <li>career</li>
                    </ul>
                </nav>
                <div className="risk-management__headerWrap_B">
                    <div className="right_content">
                        <h2>
                            Locataire Risk Management
                        </h2>
                        <p>
                            We provides tailored solutions to help private companies <br />
                            improve business strategies and practices.
                        </p>
                    </div>
                    <div className="risk-management__leftWrap_B">
                        <div className="risk-management__header-content_B">
                            <div className="rs-subtitle_B" >
                                <h3>audit & management</h3>
                                <hr id="risk-management__Textline_B"/>
                            </div>
                            <h1>
                                Services to Grow <br />
                                Your Business
                            </h1>
                            <div className="risk-management__HeaderButton_B">
                                <ButtonSix name="Read More" />
                                <div id="rs-line_B" />
                                <ButtonSeven name="Contact Us" />
                            </div>
                        </div>
                        <div className="risk-management__header-rs_img_B">
                            <div className="risk-management__header-rs_image_B" />
                        </div>
                    </div>
                    <div className="risk-management__rightWrap_B">
                        <section id="risk-management__RightTopcontainer_B">
                            <div className="risk-management__rightContent_B">
                                <div className="risk-management__right_image_B" />
                            </div>
                        </section>
                        <div className="risk-management__rightContent_B">
                            <div className="risk-management__right_image_B" />
                        </div>
                    </div>
                </div>
            </header>
        </div>

        <div className="risk-management__services">

            <div className="risk-management__services-header">
                <h1>our services</h1>
            </div>

            <div className="risk-management__services-container">
                <div className="rs__item">
                    <div className="rs__item-header rs__item1" />
                    <div className="rs__item-header_subTitle">
                        <span id="subTitle">Audit</span>
                    </div>
                    <div className="rs__item-content">
                        <p>
                            An audit is generally needed when outside third parties such as regulators, 
                            banks, creditors, potential purchasers and outside investors require an 
                            auditor’s opinion on the financial statements. 
                        </p>
                    </div>
                </div>

                <div className="rs__item">
                    <div className="rs__item-header rs__item2" />
                    <div className="rs__item-header_subTitle">
                        <span id="subTitle">Assurance</span>
                    </div>
                    <div className="rs__item-content">
                        <p>
                            We provide information technology 
                            audit services to deliver risk and controls, 
                            audit analytics to extract insights from data, 
                            as well as third-party assurance to manage risks 
                            from the extended enterprise. 
                        </p>
                    </div>
                </div>

                <div className="rs__item">
                    <div className="rs__item-header rs__item3" />
                    <div className="rs__item-header_subTitle">
                        <div><span>Operational risk</span></div>
                        <div><span>Transformation</span></div>
                    </div>
                    <div className="rs__item-content">
                        <p>
                          We help clients transform the ways 
                          in which they leverage people, technology, 
                          data, business processes and controls to 
                          address their operational risks and drive 
                          business performance.
                        </p>
                    </div>
                </div>

                <div className="rs__item">
                    <div className="rs__item-header rs__item4" />
                    <div className="rs__item-header_subTitle">
                        <div><span>third party</span></div>
                        <div><span>risk management</span></div>
                    </div>
                    <div className="rs__item-content">
                        <p>
                            We help clients evaluate and manage 
                            third-party risk related to outsourcing, 
                            and other business partnerships across the 
                            organization to maximize effectiveness.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="rs__appointement">
            <div className="rs__appointement-wrap">
                <section>
                    <div className="rs__appointement-bg" />
                    <div className="rs__appointement-content">
                        <div className="rs__appointement-content_Toptext">
                            <h3>improve business strategies and practices</h3>
                            <hr id="rs__appointement-line" />
                        </div>
                        <div className="rs__appointement-content_bottom">
                            <h1>Contact Us TODAY!</h1>
                            <p>
                            Locataire Risk Management provides tailored solutions to help private <br />
                            companies improve business strategies and practices
                            </p>
                            <p>
                                Our objective is to help our clients achieve what is important 
                                to them. 
                            </p>
                            <div className="rs__appointement-content_button">
                                <ButtonSix name="Contact Us" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <RealEstate />
        </div>
    </React.Fragment>
  )
}
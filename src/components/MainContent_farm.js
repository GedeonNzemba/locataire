import React, { useState } from 'react';
import Button from 'react-bootstrap/button';
import MyVerticallyCenteredModal from "./Modal_farm"
// import Modal from 'react-bootstrap/Modal';
// import Header from 'react-bootstrap/ModalHeader';
// import Title from 'react-bootstrap/ModalTitle';
// import Body from 'react-bootstrap/ModalBody';
// import Footer from 'react-bootstrap/ModalFooter';

import Product_card from "../components/data/Product_data";
import AnimalNutrition from './farmProductModal/AnimalNutrition';

const MainContent_farm = (props) => {

    // const [modalShow, setModalShow] = useState(false);
    // console.log(Product_card);
    // const listItems = Product_card.map((item) =>
    //    <div className="card" onClick={() => setModalShow(true)}  key={item.id}>
    //         <div className="card_img">
    //             <img src={item.thumb} />
    //         </ div>
    //         <div className="card_header" id="card_header-content">
    //             <h2 style={{color: '#ffffff', fontFamily: 'Ginto bold', fontWeight: '800', fontSize: '2rem'}}>{item.product_name}</h2>
    //             <p>{item.description}</p>
    //             <p className="price">{item.price}<span>{item.currency}</span></p>
    //             <Button variant="outline-success" style={{borderRadius: "14px"}}><span style={{margin: 'unset', fontSize: '1.3rem', color: '', fontFamily: 'Ginto regular', fontWeight: '400'}}>Add to cart</span></Button>
    //         </div>
    //     </div>

    // );


    // const modalCard_one = () => {
    
        
    // }

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow_2, setModalShow_2] = React.useState(false);
    const [modalShow_3, setModalShow_3] = React.useState(false);
    const [modalShow_4, setModalShow_4] = React.useState(false);
    const [modalShow_5, setModalShow_5] = React.useState(false);
    const [modalShow_6, setModalShow_6] = React.useState(false);


    function modalCard_two() {
        alert('card 2 has been clicked!');
    }

    const modalCard_three = () => {
        alert('card 3 has been clicked!')
    }

    const modalCard_four = () => {
        alert('card 4 has been clicked!')
    }

    const modalCard_five = () => {
        alert('card 5 has been clicked!')
    }

    const modalCard_six = () => {
        alert('card 6 has been clicked!')
    }

   

    return (

        <>
        <div className="main_content">
            {/* <h3>Headphones</h3> */}
            {/* {listItems}

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
            <div className="card" onClick={() => setModalShow(true)}>
                <div className="card_img">
                    <img src={require('../images/farm/food.png')}/>
                </ div>
                <div className="card_header" id="card_header-content">
                    <h2 style={{color: '#ffffff', fontFamily: 'Ginto bold', fontWeight: '800', fontSize: '2rem'}}>Animal Nutrition</h2>
                    <p>Hands-free, Hads-on Mushc Experience</p>
                    <p className="price">350<span>$</span></p>
                    <Button variant="outline-success" style={{borderRadius: "14px"}}><span style={{margin: 'unset', fontSize: '1.3rem', color: '', fontFamily: 'Ginto regular', fontWeight: '400'}}>Add to cart</span></Button>
                </div>
            </div>

            <div className="card" onClick={() => setModalShow_2(true)}>
                <div className="card_img">
                    <img src={require('../images/farm/hatching eggs.png')} />
                </ div>
                <div className="card_header" id="card_header-content">
                    <h2 style={{color: '#ffffff', fontFamily: 'Ginto bold', fontWeight: '800', fontSize: '2rem'}}>Hatching Eggs</h2>
                    <p>Hands-free, Hads-on Mushc Experience</p>
                    <p className="price">250<span>$</span></p>
                    <Button variant="outline-success" style={{borderRadius: "14px"}}><span style={{margin: 'unset', fontSize: '1.3rem', color: '', fontFamily: 'Ginto regular', fontWeight: '400'}}>Add to cart</span></Button>
                </div>
            </div>

            <div className="card" onClick={() => setModalShow_3(true)}>
                <div className="card_img">
                    <img src={require('../images/farm/poultry.png')} />
                </ div>
                <div className="card_header" id="card_header-content">
                    <h2 style={{color: '#ffffff', fontFamily: 'Ginto bold', fontWeight: '800', fontSize: '2rem'}}>Poultry Meat</h2>
                    <p>Hands-free, Hads-on Mushc Experience</p>
                    <p className="price">350<span>$</span></p>
                    <Button variant="outline-success" style={{borderRadius: "14px"}}><span style={{margin: 'unset', fontSize: '1.3rem', color: '', fontFamily: 'Ginto regular', fontWeight: '400'}}>Add to cart</span></Button>
                </div>
            </div>

            {/* mm */}

            <div className="card" onClick={() => setModalShow_4(true)}>
                <div className="card_img">
                    <img src={require('../images/farm/old-chick.png')} />
                </ div>
                <div className="card_header" id="card_header-content">
                    <h2 style={{color: '#ffffff', fontFamily: 'Ginto bold', fontWeight: '800', fontSize: '2rem'}}>Old Day Chick</h2>
                    <p>Hands-free, Hads-on Mushc Experience</p>
                    <p className="price">350<span>$</span></p>
                    <Button variant="outline-success" style={{borderRadius: "14px"}}><span style={{margin: 'unset', fontSize: '1.3rem', color: '', fontFamily: 'Ginto regular', fontWeight: '400'}}>Add to cart</span></Button>
                </div>
            </div>

            <div className="card" onClick={() => setModalShow_5(true)}>
                <div className="card_img">
                    <img src={require('../images/farm/livestock.png')} />
                </ div>
                <div className="card_header" id="card_header-content">
                    <h2 style={{color: '#ffffff', fontFamily: 'Ginto bold', fontWeight: '800', fontSize: '2rem'}}>Livestock</h2>
                    <p>Hands-free, Hads-on Mushc Experience</p>
                    <p className="price">250<span>$</span></p>
                    <Button variant="outline-success" style={{borderRadius: "14px"}}><span style={{margin: 'unset', fontSize: '1.3rem', color: '', fontFamily: 'Ginto regular', fontWeight: '400'}}>Add to cart</span></Button>
                </div>
            </div>

            <div className="card" onClick={() => setModalShow_6(true)}>
                <div className="card_img">
                    <img src={require('../images/farm/fresh-eggs.png')} />
                </ div>
                <div className="card_header" id="card_header-content">
                    <h2 style={{color: '#ffffff', fontFamily: 'Ginto bold', fontWeight: '800', fontSize: '2rem'}}>Fresh Eggs</h2>
                    <p>Hands-free, Hads-on Mushc Experience</p>
                    <p className="price">350<span>$</span></p>
                    <Button variant="outline-success" style={{borderRadius: "14px"}}><span style={{margin: 'unset', fontSize: '1.3rem', color: '', fontFamily: 'Ginto regular', fontWeight: '400'}}>Add to cart</span></Button>
                </div>
            </div>


        </div>


        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            modal={<AnimalNutrition />}
            // heading = "Heading 1"
            // body = "Body 1"
            // text = "cart 1 text. this is a simple test card for text of card 1"
        />

        <MyVerticallyCenteredModal
            show={modalShow_2}
            onHide={() => setModalShow_2(false)}
            heading = "Heading 2"
            body = "Body 2"
            text = "cart 2 text. this is a simple test card for text of card 2"
        />

        <MyVerticallyCenteredModal
            show={modalShow_3}
            onHide={() => setModalShow_3(false)}
            heading = "Heading 3"
            body = "Body 3"
            text = "cart 3 text. this is a simple test card for text of card 3"
        />
         <MyVerticallyCenteredModal
            show={modalShow_4}
            onHide={() => setModalShow_4(false)}
            heading = "Heading 4"
            body = "Body 4"
            text = "cart 4 text. this is a simple test card for text of card 4"
        />

        <MyVerticallyCenteredModal
            show={modalShow_5}
            onHide={() => setModalShow_5(false)}
            heading = "Heading 5"
            body = "Body 5"
            text = "cart 5 text. this is a simple test card for text of card 5"
        />
         <MyVerticallyCenteredModal
            show={modalShow_6}
            onHide={() => setModalShow_6(false)}
            heading = "Heading 6"
            body = "Body 6"
            text = "cart 6 text. this is a simple test card for text of card 6"
        />
        </>
    )

}
export default MainContent_farm;



  

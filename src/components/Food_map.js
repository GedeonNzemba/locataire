import React, { useState } from 'react';
import Button from 'react-bootstrap/button';
// import Modal from 'react-bootstrap/Modal';
// import Header from 'react-bootstrap/ModalHeader';
// import Title from 'react-bootstrap/ModalTitle';
// import Body from 'react-bootstrap/ModalBody';
// import Footer from 'react-bootstrap/ModalFooter';

import Food_card from "../components/data/Food";

const Food_map = () => {

    const [modalShow, setModalShow] = useState(false);


    console.log(Food_card);

    const listItems = Food_card.map((item) =>
        <div className="card" onClick={() => setModalShow(true)}  key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header" id="card_header-content">
                <h2 style={{color: '#ffffff', fontFamily: 'Ginto bold', fontWeight: '800', fontSize: '2rem'}}>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <Button variant="outline-success" style={{borderRadius: "14px"}}><span style={{margin: 'unset', fontSize: '1.3rem', color: '', fontFamily: 'Ginto regular', fontWeight: '400'}}>Add to cart</span></Button>
            </div>
        </div>

    );

   

    return (
        <div className="main_content">
            {/* <h3>Headphones</h3> */}
            {listItems}

            {/* <MyVerticallyCenteredModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> */}
        </div>
    )

}
export default Food_map;



  

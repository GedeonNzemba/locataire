import React from 'react';
import Product from './data/Product_data'
import Button from 'react-bootstrap/button';
import Modal from 'react-bootstrap/Modal';
import Header from 'react-bootstrap/ModalHeader';
import Title from 'react-bootstrap/ModalTitle';
import Body from 'react-bootstrap/ModalBody';
import Footer from 'react-bootstrap/ModalFooter';

function MyVerticallyCenteredModal(props) {


    return (
        <>
            <div  >
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered

                >
                    {/* <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {props.heading}
                        </Modal.Title>
                    </Modal.Header> */}

                    <Modal.Body>
                        {props.modal}
                        {/* <h4>{props.body}</h4>
                        <p>
                            {props.text}
                        </p> */}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        </>
    );
}

export default MyVerticallyCenteredModal;
import React from 'react';
import Colors from './Colors/Color'
import DetailsThumb from './ThumbDetails/AnimalNutrition';
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class AnimalNutrition extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Animal Nutrition",
        "src": [
            "https://i.ibb.co/2gF0yT7/pngegg.png",
            "https://i.ibb.co/TBCTc9n/pngegg-2.png",
            "https://i.ibb.co/zs8ymjq/pngegg-3.png",
            "https://i.ibb.co/6RQRgg4/pngegg-1.png"
          ],
        "description": "Livestock Production",
        "content": "we sell animal feed, protein meals, grain, oilseeds, concentrates and other commodities to local farmers and livestock producers.",
        "price": 23,
        "colors":["red","black","crimson","teal"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="modal_over-container">
        {
          products.map(item =>(
            <div className="details" style={{positions: 'relative'}} key={item._id}>
              <div id="modal_img-wall" />
              <div className="big-img" style={{zIndex: '999'}}>
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2 className="modal-ti">{item.title}</h2>
                  <span className="modal_price">${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <h4 className="modal-desc">{item.description}</h4>
                <p className="modal-texts">{item.content}</p>
                
                <Row>
                    <Accordion defaultActiveKey="0" className="row">
                        <Card>
                            <Accordion.Toggle className="btn" variant="primary" size="lg" active eventKey="0">
                            Protein Meal
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            Concentrates 
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            Premixes
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            Additives
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Row>
           

        
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default AnimalNutrition;

import React, { useState } from 'react'
import Card from "react-bootstrap/Card";


const Stationary = () => {
    const [isActive, setIsActive] = useState(false);
    const [isClothActive, setIsClothActive] = useState(false);
  
    const toggleMenu = () => {
      setIsActive(!isActive);
    };
  
    const toggleClothMenu = () => {
      setIsClothActive((prevState) => !prevState);
    };
  
    const closeMenu = () => {
      setIsActive(false);
    };
  return (
    <>
    <div className="clothing-container">
            <li className="list" onClick={toggleClothMenu}>
              <span className="link">Stationary</span>
            </li>
            <div className={`cloth-content ${isClothActive ? "active" : ""}`}>
              <div className="flex cloth-block">
                <div className="flex flex-col titles">
                  <li className="heading">All Stationary</li>
                  <li>Pens</li>
                  <li>Pencils</li>
                  <li>Notebooks</li>
                  <li>Erasers</li>
                </div>
                <div className="flex cards-container">
                  <Card className="cards">
                    <Card.Img variant="top" src="pens.jpg" />
                    <Card.Body>
                      <Card.Text>Pens</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="cards">
                   <Card.Img variant="top" src="pencils.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Pencils</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="notebooks.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Notebooks</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="eraser.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Erasers</Card.Text>
                   </Card.Body>
                 </Card>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Stationary
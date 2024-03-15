import React, { useState } from 'react'
import Card from "react-bootstrap/Card";


const Appliances = () => {
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
              <span className="link">Appliances</span>
            </li>
            <div className={`cloth-content ${isClothActive ? "active" : ""}`}>
              <div className="flex cloth-block">
                <div className="flex flex-col titles">
                  <li className="heading">All Appliances</li>
                  <li>Geysers</li>
                  <li>Fans</li>
                  <li>Irons</li>
                  <li>Kettles</li>
                </div>
                <div className="flex cards-container">
                  <Card className="cards">
                    <Card.Img variant="top" src="geyser.jpg" />
                    <Card.Body> 
                      <Card.Text>Geysers</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="cards">
                   <Card.Img variant="top" src="fans.jpg" />
                   <Card.Body> 
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Fans</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="irons.jpg" />
                   <Card.Body> 
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Irons</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="kettles.webp" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Kettles</Card.Text>
                   </Card.Body>
                 </Card>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Appliances
import React, { useState } from 'react'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


const Footwear = () => {
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
              <span className="link">Footwear</span>
            </li>
            <div className={`cloth-content ${isClothActive ? "active" : ""}`}>
              <div className="flex cloth-block">
                <div className="flex flex-col titles">
                  <li className="heading"><Link className='nav-heading' to="/footwearpage">All Footwear</Link></li>
                  <li>Shoes</li>
                  <li>Sandals</li>
                  <li>Heels</li>
                  <li>Running Shoes</li>
                </div>
                <div className="flex cards-container">
                  <Card className="cards">
                    <Card.Img variant="top" src="shoes.jpg" />
                    <Card.Body>
                      <Card.Text>Shoes</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="cards">
                   <Card.Img variant="top" src="sandals.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Sandals</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="heels.jpeg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Heels</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="rshoes.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Running Shoes</Card.Text>
                   </Card.Body>
                 </Card>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Footwear
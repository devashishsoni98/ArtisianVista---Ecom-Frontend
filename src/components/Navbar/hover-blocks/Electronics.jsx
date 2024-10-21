import React, { useState } from 'react'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


const Electronics = () => {
    // const [isActive, setIsActive] = useState(false);
    const [isClothActive, setIsClothActive] = useState(false);
  
    // const toggleMenu = () => {
    //   setIsActive(!isActive);
    // };
  
    const toggleClothMenu = () => {
      setIsClothActive((prevState) => !prevState);
    };
  
    // const closeMenu = () => {
    //   setIsActive(false);
    // };
  return (
    <>
    <div className="clothing-container">
            <li className="list" onClick={toggleClothMenu}>
              <span className="link">Electronics</span>
            </li>
            <div className={`cloth-content ${isClothActive ? "active" : ""}`}>
              <div className="flex cloth-block">
                <div className="flex flex-col titles">
                  <li className="heading"><Link className='nav-heading' to="/electronicspage">All Electronics</Link></li>
                  <li><Link className='nav-heading' to="/electronicspage">Mobiles</Link></li>
                  <li><Link className='nav-heading' to="/electronicspage">Laptops</Link></li>
                  <li><Link className='nav-heading' to="/electronicspage">Computers</Link></li>
                  <li><Link className='nav-heading' to="/electronicspage">Cameras</Link></li>
                </div>
                <div className="flex cards-container">
                  <Card className="cards">
                    <Card.Img variant="top" src="mobile.avif" />
                    <Card.Body>
                      <Card.Text>Mobiles</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="cards">
                   <Card.Img variant="top" src="laptop.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Laptops</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="computer.webp" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Computers</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="camera.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Cameras</Card.Text>
                   </Card.Body>
                 </Card>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Electronics
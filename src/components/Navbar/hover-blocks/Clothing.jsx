import React, { useState } from 'react'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


const Clothing = () => {
    const [isActive, setIsActive] = useState(false);
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
              <span className="link">Clothing</span>
            </li>
            <div className={`cloth-content ${isClothActive ? "active" : ""}`}>
              <div className="flex cloth-block">
                <div className="flex flex-col titles">
                  
                  <li className="heading"><Link className='nav-heading' to="/clothingpage">All Clothes</Link></li>
                  <li> <Link className='nav-heading' to="/clothingpage">Shirts </Link></li>
                  <li><Link className='nav-heading' to="/clothingpage">T-Shirts</Link></li>
                  <li><Link className='nav-heading' to="/clothingpage">Hoodies</Link></li>
                  <li><Link className='nav-heading' to="/clothingpage">Lowers</Link></li>
                </div>
                <div className="flex cards-container">
                  <Card className="cards">
                    <Card.Img variant="top" src="shirt.jpg" />
                    <Card.Body>
                      <Card.Text>Shirt</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="cards">
                   <Card.Img variant="top" src="t-shirt.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>T-Shirt</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="hoodie.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Hoodies</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="lower.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Lowers</Card.Text>
                   </Card.Body>
                 </Card>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Clothing
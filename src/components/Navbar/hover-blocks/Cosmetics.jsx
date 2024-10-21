import React, { useState } from 'react'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


const Cosmetics = () => {
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
              <span className="link">Cosmetics</span>
            </li>
            <div className={`cloth-content ${isClothActive ? "active" : ""}`}>
              <div className="flex cloth-block">
                <div className="flex flex-col titles">
                  <li className="heading"><Link className='nav-heading' to="/cosmeticspage">All Cosmetics</Link></li>
                  <li><Link className='nav-heading' to="/cosmeticspage">Kajal</Link></li>
                  <li><Link className='nav-heading' to="/cosmeticspage">Compact Powder</Link></li>
                  <li><Link className='nav-heading' to="/cosmeticspage">Eyeliner</Link></li>
                  <li><Link className='nav-heading' to="/cosmeticspage">Blush</Link></li>
                </div>
                <div className="flex cards-container">
                  <Card className="cards">
                    <Card.Img variant="top" src="kajal.jpg" />
                    <Card.Body> 
                      <Card.Text>Kajal</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="cards">
                   <Card.Img variant="top" src="powder.jpeg" />
                   <Card.Body> 
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Compact Powder</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="eyeliner.jpeg" />
                   <Card.Body> 
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Eyeliner</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="blush.webp" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Blush</Card.Text>
                   </Card.Body>
                 </Card>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Cosmetics
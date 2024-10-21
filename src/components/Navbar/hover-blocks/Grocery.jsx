import React, { useState } from 'react'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


const Grocery = () => {
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
              <span className="link">Grocery</span>
            </li>
            <div className={`cloth-content ${isClothActive ? "active" : ""}`}>
              <div className="flex cloth-block">
                <div className="flex flex-col titles">
                  <li className="heading"><Link to="/grocerypage" className='nav-head'>All Groceries</Link></li>
                  <li><Link to="/grocerypage" className='nav-head'>Spices</Link></li>
                  <li><Link to="/grocerypage" className='nav-head'>Pulses</Link></li>
                  <li><Link to="/grocerypage" className='nav-head'>Rice</Link></li>
                  <li><Link to="/grocerypage" className='nav-head'>Biscuits</Link></li>
                </div>
                <div className="flex cards-container">
                  <Card className="cards">
                    <Card.Img variant="top" src="spices.webp" />
                    <Card.Body>
                      <Card.Text>Spices</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className="cards">
                   <Card.Img variant="top" src="pulses.webp" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Pulses</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="rice.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Rice</Card.Text>
                   </Card.Body>
                 </Card>
                 <Card className="cards">
                   <Card.Img variant="top" src="biscuits.jpg" />
                   <Card.Body>
                     {/* <Card.Title>Shirt</Card.Title> */}
                     <Card.Text>Biscuits</Card.Text>
                   </Card.Body>
                 </Card>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Grocery
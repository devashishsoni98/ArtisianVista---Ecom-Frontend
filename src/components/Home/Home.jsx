import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="grid-full">
        <div className="home-container">
          <div className="home-content">
            <div className="home-p-1">Shop more with ArtisianVista</div>
            <h1>Shop all the best products in one place.</h1>
            <button className="home-btn">
              <Link to="/">
                <span className="flex">
                  Explore Products
                  <FaArrowRightLong className="home-icon" />
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="home-container-2">
          <div className="home-container-2">
            <div className="grid-2">
              <div className="grid-2-h">
                <h1>
                  ArtisianVista is a fashion platform to shop from a wide range
                  of brand products for everyone
                </h1>
              </div>

              <div className="home-cards-container">
                <div className="home-grid">
                  <div className="h-c-item">
                    <Link to="/" className="c-link">
                      <div className="c-img">
                        <img src="computer.webp" alt="shirt" />
                      </div>
                      <div className="c-title">Lorem ipsum dolor sit amet.</div>
                      <div className="c-price">&#8377; 350</div>
                    </Link>
                  </div>

                  <div className="h-c-item">
                    <Link to="/" className="c-link">
                      <div className="c-img">
                        <img src="mobile.avif" alt="shirt" />
                      </div>
                      <div className="c-title">Lorem ipsum dolor sit amet.</div>
                      <div className="c-price">&#8377; 350</div>
                    </Link>
                  </div>

                  <div className="h-c-item">
                    <Link to="/" className="c-link">
                      <div className="c-img">
                        <img src="laptop.jpg" alt="shirt" />
                      </div>
                      <div className="c-title">Lorem ipsum dolor sit amet.</div>
                      <div className="c-price">&#8377; 350</div>
                    </Link>
                  </div>

                  <div className="h-c-item">
                    <Link to="/" className="c-link">
                      <div className="c-img">
                        <img src="spices.jpg" alt="shirt" />
                      </div>
                      <div className="c-title">Lorem ipsum dolor sit amet.</div>
                      <div className="c-price">&#8377; 350</div>
                    </Link>
                  </div>

                  <div className="h-c-item">
                    <Link to="/" className="c-link">
                      <div className="c-img">
                        <img src="notebooks.jpg" alt="shirt" />
                      </div>
                      <div className="c-title">Lorem ipsum dolor sit amet.</div>
                      <div className="c-price">&#8377; 350</div>
                    </Link>
                  </div>

                  <div className="h-c-item">
                    <Link to="/" className="c-link">
                      <div className="c-img">
                        <img src="shoes.jpg" alt="shirt" />
                      </div>
                      <div className="c-title">Lorem ipsum dolor sit amet.</div>
                      <div className="c-price">&#8377; 350</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-grid more-products">
            <div className="divider"></div>
            <Link to="/" className="h-btn-2">
              {" "}
              <span className="flex gap-3">
                {" "}
                More Products <FaArrowRightLong className="mp" />{" "}
              </span>
            </Link>
            <div className="divider"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

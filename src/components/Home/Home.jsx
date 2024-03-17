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

        <div className="section">
          <div className="home-cat-container">
            <div>
              <h2 className="h-c-h2">
                ArtisianVista Categories
              </h2>
              <div>
                <div className="categories-list">
                  <div className="h-cat-item">
                    <Link to="/" className="h-cat-link">
                      <img src="electronics.avif" alt="" className="h-cat-pic" />
                      <div className="h-cat-title">Electronics</div>
                    </Link>
                  </div>
                  <div className="h-cat-item">
                    <Link to="/" className="h-cat-link">
                      <img src="appliances.jpg" alt="" className="h-cat-pic" />
                      <div className="h-cat-title">Appliances</div>
                    </Link>
                  </div>
                  <div className="h-cat-item">
                    <Link to="/" className="h-cat-link">
                      <img src="grocery.jpg" alt="" className="h-cat-pic" />
                      <div className="h-cat-title">Grocery</div>
                    </Link>
                  </div>
                  <div className="h-cat-item">
                    <Link to="/" className="h-cat-link">
                      <img src="clothes.jpg" alt="" className="h-cat-pic" />
                      <div className="h-cat-title">Clothing</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section discount-section">
          <div className="grid-halves discount">
            <div className="discount-left">
              <div className="column-large">
                <h2 className="col-lar-h2">
                  ArtisianVista Cyber Week 40% Discount
                </h2>
                <Link to="/" className="btn-3">
                Shop now →
                </Link>
              </div>
            </div>
            <img className="h-discount-img" src="dis-img.jpg" alt="image" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;

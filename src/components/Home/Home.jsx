import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
// import ProductItem from "../Products/ClothingPage";

const Home = () => {
  return (
    <>
      <div className="grid-full">
        <div className="home-container">
          <div className="home-content">
            <div className="home-p-1">Shop more with ArtisianVista</div>
            <h1>Shop all the best products in one place.</h1>
            <button className="home-btn">
              <Link to="/AllProducts">
                <span className="flex home-btnn">
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
                  <span>ArtisianVista</span> is a fashion platform to shop from
                  a wide range of brand products for everyone
                </h1>
              </div>

              {/* <div className="home-cards-container">
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
              </div> */}
              <div class="p-5 sm:p-8">
                <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                  <img src="watch.jpg" alt="watch"/>
                  {/* <img src="clothes1.webp" /> */}
                  <img src="camera.jpg" alt=""/>
                  <img src="mobile.avif" alt="" />
                  <img src="shoes.jpg" alt="" />
                  <img src="clothes2.webp" alt="" />
                  <img src="hoodie.jpg" alt="" />
                  <img src="notebooks.jpg" alt="" />
                  <img src="geyser.jpg" alt="" />
                  <img src="pens.jpg" alt="" />
                  {/* <img src="biscuits.jpg" /> */}
                  <img src="watch2.webp" alt="" />
                  <img src="braclet.webp" alt="" />
                  <img src="glasses.webp" alt="" />
                  <img src="purse.webp" alt="" />
                  <img src="men-purse.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="home-grid more-products">
            <div className="divider"></div>
            <Link to="/AllProducts" className="h-btn-2">
              {" "}
              <span className="flex gap-3 home-btnn">
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
                <span>ArtisianVista</span> Categories
              </h2>
              <div>
                <div className="categories-list">
                  <div className="h-cat-item">
                    <Link to="/electronicspage" className="h-cat-link">
                      <img
                        src="electronics.avif"
                        alt=""
                        className="h-cat-pic"
                      />
                      <div className="h-cat-title">Electronics</div>
                    </Link>
                  </div>
                  <div className="h-cat-item">
                    <Link to="/cosmeticspage" className="h-cat-link">
                      <img src="eyeliner.jpeg" alt="" className="h-cat-pic" />
                      <div className="h-cat-title">Cosmetics</div>
                    </Link>
                  </div>
                  <div className="h-cat-item">
                    <Link to="/grocerypage" className="h-cat-link">
                      <img src="grocery.jpg" alt="" className="h-cat-pic" />
                      <div className="h-cat-title">Grocery</div>
                    </Link>
                  </div>
                  <div className="h-cat-item">
                    <Link to="/clothingpage" className="h-cat-link">
                      <img src="clothes.jpg" alt="" className="h-cat-pic" />
                      <div className="h-cat-title">Clothing</div>
                    </Link>
                  </div>
                  <div className="h-cat-item">
                    <Link to="/footwearpage" className="h-cat-link">
                      <img src="footwear2.jpg" alt="" className="h-cat-pic" />
                      <div className="h-cat-title">Footwear</div>
                    </Link>
                  </div>
                  <div className="h-cat-item">
                    <Link to="/stationarypage" className="h-cat-link">
                      <img src="stat.jpeg" alt="" className="h-cat-pic" />
                      <div className="h-cat-title">Stationary</div>
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
                <Link to="/allproducts" className="home-btnn btn-3 ">
                  Shop now →
                </Link>
              </div> 
            </div>
            <img className="h-discount-img" src="dis-img.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* <ProductItem/> */}
    </>
  );
};

export default Home;

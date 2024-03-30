import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Clothes from "./components/Products/ClothingPage.jsx";
import Footwear from "./components/Products/FootwearPage.jsx";
import Groceryp from "./components/Products/GroceryPage.jsx";
import StationaryP from "./components/Products/StationaryPage.jsx";
import Cosmeticsp from "./components/Products/CosmeticsPage.jsx";
import Electro from "./components/Products/ElectronicsPage.jsx";
import AllProducts from "./components/Products/AllProducts.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clothingpage" element={<Clothes />} />
          <Route path="/footwearpage" element={<Footwear />} />
          <Route path="/grocerypage" element={<Groceryp />} />
          <Route path="/stationarypage" element={<StationaryP />} />
          <Route path="/cosmeticspage" element={<Cosmeticsp />} />
          <Route path="/electronicspage" element={<Electro />} />
          <Route path="/AllProducts" element={<AllProducts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

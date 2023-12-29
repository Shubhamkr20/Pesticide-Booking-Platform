import React from "react";
import Header from "./components/header/Header";
import Heropage from "./components/heropage/Heropage";
import Products from "./components/products/Products";
import Contact from "./components/contactus/Contact";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Heropage />
      <Products />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;

import React, { Component } from "react";
import Hoodie1 from "../assets/products/hoodie1.png";
import Hoodie2 from "../assets/products/hoodie2.png";
import Hoodie3 from "../assets/products/hoodie3.png"
import Hoodie4 from "../assets/products/hoodie4.png"
// import Beanie1 from "../assets/products/beanie1.png";
// import Beanie2 from "../assets/products/beanie2.png";
// import Beanie3 from "../assets/products/beanie3.png";
// import Trouser1 from "../assets/products/trouser1.png";
// import Trouser2 from "../assets/products/trouser2.png";
import HeroSection from "../components/HomePage/HeroSection";
import FeaturedCategory from "../components/HomePage/FeaturedCategory";
import Products from "../components/HomePage/Products";

class Home extends Component {
  state = {
    products: [
      {
        name: "Yellow Women Hoodie",
        price: 50,
        image: Hoodie1,
        rating: 4.8,
        sold: 491,
      },
      {
        name: "Yellow Women Hoodie",
        price: 50,
        image: Hoodie2,
        rating: 4.8,
        sold: 491,
      },
      {
        name: "Yellow Women Hoodie",
        price: 50,
        image: Hoodie3,
        rating: 4.8,
        sold: 491,
      },
      {
        name: "Yellow Women Hoodie",
        price: 50,
        image: Hoodie4,
        rating: 4.8,
        sold: 491,
      },
    ],
  };
  render() {
    return (
      <div>
        {/* Hero Section */}
        <HeroSection />
        {/* Categories Section */}
        <FeaturedCategory />
        {/* Products Section */}
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import HeroImage from "../../assets/hero-image.png";

class HeroSection extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row mb-5 hero-section">
            <div className="col-md-12 d-flex justify-content-center py-5 shadow">
              <div className="col-5 d-flex align-items-center">
                <div>
                  <h1 className="hero-tagline mb-3">
                    Upgrade Your Wordrobe <br />
                    With Our Collection
                  </h1>

                  <p className="hero-description">
                    We've got everything from classic basics to trendy pieces
                    that will take your style to the next level. Whether you
                    need everyday essentials or standout items, we have
                    something for everyone. Shop now to find the perfect
                    additions to your wardrobe and show off your unique style!
                  </p>
                  <button className="btn btn-success ">Buy Now</button>
                </div>
              </div>
              <div className="col-5 d-flex justify-content-center">
                <img src={HeroImage} className="hero-img" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default HeroSection;

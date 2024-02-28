import React, { Component } from "react";
import Hoodie from "../../assets/hoodie.png";
import Trouser from "../../assets/trouser.png";
import Short from "../../assets/short.png";
import Beanie from "../../assets/beanie.png";
class FeaturedCategory extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row my-lg-5 my-md-2 py-lg-3 py-md-2">
            <h2 className="mb-3 fw-bold">Featured Category</h2>
            <div className="col-12 d-flex justify-content-around featured-category">
              <div
                className="col-1 card category-card"
                style={{ transition: "transform 0.3s" }}
              >
                <div className="card-body text-center">
                  <img src={Hoodie} className="category-icon" alt="" />
                  <h5 className="card-title fw-bold mt-2 category-title">
                    Hoodie
                  </h5>
                </div>
              </div>
              <div
                className="col-1 card category-card"
                style={{ transition: "transform 0.3s" }}
              >
                <div className="card-body text-center">
                  <img src={Trouser} className="category-icon" alt="" />
                  <h5 className="card-title fw-bold mt-2 category-title">
                    Trouser
                  </h5>
                </div>
              </div>
              <div
                className="col-1 card category-card"
                style={{ transition: "transform 0.3s" }}
              >
                <div className="card-body text-center">
                  <img src={Short} className="category-icon" alt="" />
                  <h5 className="card-title fw-bold mt-2 category-title">
                    Short
                  </h5>
                </div>
              </div>
              <div
                className="col-1 card category-card"
                style={{ transition: "transform 0.3s" }}
              >
                <div className="card-body text-center">
                  <img src={Beanie} className="category-icon" alt="" />
                  <h5 className="card-title fw-bold mt-2 category-title">
                    Beanie
                  </h5>
                </div>
              </div>
              <div
                className="col-1 card category-card"
                style={{ transition: "transform 0.3s" }}
              >
                <div className="card-body text-center">
                  <img src={Hoodie} className="category-icon" alt="" />
                  <h5 className="card-title fw-bold mt-2 category-title">
                    Hoodie
                  </h5>
                </div>
              </div>
              <div
                className="col-1 card category-card"
                style={{ transition: "transform 0.3s" }}
              >
                <div className="card-body text-center">
                  <img src={Trouser} className="category-icon" alt="" />
                  <h5 className="card-title fw-bold mt-2 category-title">
                    Trouser
                  </h5>
                </div>
              </div>
              <div
                className="col-1 card category-card"
                style={{ transition: "transform 0.3s" }}
              >
                <div className="card-body text-center">
                  <img src={Short} className="category-icon" alt="" />
                  <h5 className="card-title fw-bold mt-2 category-title">
                    Short
                  </h5>
                </div>
              </div>
              <div
                className="col-1 card category-card"
                style={{ transition: "transform 0.3s" }}
              >
                <div className="card-body text-center">
                  <img src={Beanie} className="category-icon" alt="" />
                  <h5 className="card-title fw-bold mt-2 category-title">
                    Beanie
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedCategory;

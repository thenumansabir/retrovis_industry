import React, { Component } from "react";
import Hoodie1 from "../assets/products/hoodie1.png";
import Hoodie2 from "../assets/products/hoodie2.png";
import Hoodie3 from "../assets/products/hoodie3.png";

import "../style/product.style.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: null,
      selectedSize: null,
      count: 1,
    };
  }

  handleColorChange = (color) => {
    this.setState({ selectedColor: color });
  };
  handleSizeChange = (size) => {
    this.setState({ selectedSize: size });
  };
  decrement = () => {
    this.setState((prevState) => ({
      count: Math.max(1, prevState.count - 1),
    }));
  };
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const colors = ["Red", "Blue", "Yellow", "Green"];
    const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
    const { count } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-around">
              <div className="col-5">
                <div className="card border-0 product-card-large">
                  <div className="card-body text-center">
                    <img
                      src={Hoodie1}
                      className="product-img-large"
                      alt="Hoodie"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <h4 className="fw-bold product-price">$ 50</h4>
                  <span className="material-symbols-outlined text-secondary icon">
                    favorite
                  </span>
                </div>
                <h3 className="fw-bold">Yellow Women Hoodie</h3>
                <small className="text-secondary">
                  Get comfy in style with our Yellow Women Hoodie. Its vibrant
                  color and cozy fit make it perfect for any casual outing or
                  lounging at home. Add a pop of brightness to your wardrobe
                  with this must-have piece!
                </small>
                {/* Color Div */}
                <div className="my-3">
                  <small className="fw-semibold">
                    Color:{" "}
                    <span className="text-secondary">
                      {this.state.selectedColor}
                    </span>
                  </small>
                  <div>
                    {colors.map((color, index) => (
                      <label key={index}>
                        <span
                          className="dot"
                          style={{
                            backgroundColor: color,
                            display: "inline-block",
                            margin: "0 5px",
                            cursor: "pointer",
                            border:
                              this.state.selectedColor === color
                                ? "2px solid black"
                                : "none",
                          }}
                          onClick={() => this.handleColorChange(color)}
                        ></span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Size Div */}
                <div className="my-3">
                  <small className="fw-semibold">
                    Size:{" "}
                    <span className="text-secondary">
                      {this.state.selectedSize}
                    </span>
                  </small>
                  <div>
                    {sizes.map((size, index) => (
                      <label key={index}>
                        <small
                          className="text-center text-secondary"
                          style={{
                            display: "inline-block",
                            backgroundColor: "rgb(239 239 239)",
                            width: "40px",
                            margin: "0 5px",
                            padding: "2px",
                            cursor: "pointer",
                            borderRadius: "10%",
                            border:
                              this.state.selectedSize === size
                                ? "2px solid black"
                                : "none",
                          }}
                          onClick={() => this.handleSizeChange(size)}
                        >
                          {size}
                        </small>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Quantity Div */}
                <div className="my-3">
                  <small className="fw-semibold">Quantity </small>
                  <div className="d-flex justify-content-between align-items-center counter">
                    <button
                      className="btn btn-secondary"
                      onClick={this.decrement}
                    >
                      -
                    </button>
                    <small className="value">{count}</small>
                    <button
                      className="btn btn-secondary"
                      onClick={this.increment}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button className="btn btn-success my-2">Add To Cart</button>
              </div>
            </div>
          </div>
          <div className="row">
          </div>
        </div>
      </div>
    );
  }
}

export default Product;

import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mb-5 pb-5">
            <h2 className="mb-3 text-center fw-bold">
              Popular Products on Retrovis
            </h2>
            <div className="col-12">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                {this.props.products.map((product, index) => (
                  <div key={index} className="col">
                    <div className="  card product-card border-0">
                      <div className="card-body">
                        <div className="text-end">
                          <span class="material-symbols-outlined">
                            favorite
                          </span>
                        </div>
                        <div className="text-center">
                          <img
                            src={product.image}
                            className="product-img"
                            alt=""
                            style={{ transition: "transform 0.3s" }}
                          />
                          <hr className="m-0" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title fw-bold mt-2">
                            {product.name}
                          </h5>
                          <span className="fw-bold price">
                            ${product.price}
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span class="material-symbols-outlined star">
                            star
                          </span>
                          <span class="">{product.rating}</span>
                          <span class="">&emsp; {product.sold} Sold</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;

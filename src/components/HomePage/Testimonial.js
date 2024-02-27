import React, { Component } from "react";
import Numan1 from "../../assets/numan1.png";
import Numan2 from "../../assets/numan2.png";

class Testimonial extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row  mb-5 pb-5">
            <h2 className="mb-5 text-center fw-bold">Testimonials</h2>
            <div className="col-12 mt-5">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card p-2 testimonial-card border-0">
                    <div className="position-relative py-3">
                      <img
                        src={Numan1}
                        className="position-absolute testimonial-img"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title fw-bold">Numan Sabir</h5>
                        <div>
                          I absolutely love shopping at Retrovis! The quality of
                          their products is unmatched, and their customer
                          service is top-notch. I recently purchased a hoodie
                          from them, and I couldn't be happier with my purchase.
                          Highly recommend!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card p-2 testimonial-card border-0">
                    <div className="position-relative py-3">
                      <img
                        src={Numan2}
                        className="position-absolute testimonial-img"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title fw-bold">Numan Sabir</h5>
                        <div>
                          Retrovis has become my go-to store for trendy fashion!
                          Their collection is always up-to-date with the latest
                          styles, and the prices are incredibly affordable. I've
                          bought several items from them and have never been
                          disappointed.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card p-2 testimonial-card border-0">
                    <div className="position-relative py-3">
                      <img
                        src={Numan1}
                        className="position-absolute testimonial-img"
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <h5 className="card-title fw-bold">Numan Sabir</h5>
                        <div>
                          I'm a big fan of Retrovis' commitment to
                          sustainability. Their eco-friendly products are not
                          only good for the environment but also stylish and
                          comfortable to wear. Kudos to Retrovis for making a
                          positive impact!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./style/style.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-black text-light">
          <div className="row">
            <div className="col-12 p-5 d-flex justify-content-center">
              <div className="col-md-2">
                <h4 className="fw-bold">Support</h4>
                <div>
                  Airport Road Nangle <br />
                  <br /> support@retovis.com
                  <br /> +93 306 1234567
                </div>
              </div>
              <div className="col-md-2">
                <h4 className="fw-bold">Account</h4>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    My Account
                  </span>
                </NavLink>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    Login / Register
                  </span>
                </NavLink>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    Home
                  </span>
                </NavLink>
              </div>
              <div className="col-md-2">
                <h4 className="fw-bold">Quick Link</h4>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    Privacy Policy
                  </span>
                </NavLink>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    Terms Of Use
                  </span>
                </NavLink>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    FAQ
                  </span>
                </NavLink>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    Contact
                  </span>
                </NavLink>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    About
                  </span>
                </NavLink>
              </div>
              <div className="col-md-2">
                <h4 className="fw-bold">Social Media</h4>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    <FacebookIcon className="mx-2" />
                    Facebook
                  </span>
                </NavLink>
                <NavLink to="/" className="text-decoration-none">
                  <span class="nav-link text-decoration-none text-light py-2">
                    <InstagramIcon className="mx-2" />
                    Instagram
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

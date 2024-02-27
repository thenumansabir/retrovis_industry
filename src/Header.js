import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style/style.css";
class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="container-fluid">
            <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul class="navbar-nav me-auto">
                <NavLink
                  to="/"
                  activeClassName="active"
                  className="text-decoration-none"
                >
                  <li class="nav-item p-2">
                    <span class="nav-link text-decoration-none">Home</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  className="text-decoration-none"
                >
                  <li class="nav-item p-2">
                    <span class="nav-link">About</span>
                  </li>
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  className="text-decoration-none"
                >
                  <li class="nav-item p-2">
                    <span class="nav-link">Contact</span>
                  </li>
                </NavLink>
              </ul>
            </div>
            <div class="mx-auto order-0">
              <NavLink
                to="/"
                activeClassName="active"
                className="text-decoration-none"
              >
                <span class="navbar-brand mx-auto">
                  <h3 className="m-0 fw-bold">Retrovis Industry</h3>
                </span>
              </NavLink>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target=".dual-collapse2"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ms-auto mx-2">
                <li class="nav-item p-2">
                  <a class="nav-link" href="#">
                    <span class="material-symbols-outlined">favorite</span>
                  </a>
                </li>
                <li class="nav-item p-2">
                  <a class="nav-link" href="#">
                    <span class="material-symbols-outlined">
                      shopping_cart_checkout
                    </span>
                  </a>
                </li>
                <li class="nav-item p-2">
                  <a class="nav-link" href="#">
                    <span class="material-symbols-outlined">person</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

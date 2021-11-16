import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer.jsx/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`https://safe-oasis-95294.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  // we will show cards in home page
  let navStyle = {
    display: "none",
  };
  let mystyle = {
    display: "block",
  };
  if (location.pathname === "/products") {
    navStyle = {
      display: "block",
    };
    mystyle = {
      display: "none",
    };
  }
  if (location.pathname === "/home") {
    navStyle = {
      display: "none",
    };
    mystyle = {
      display: "block",
    };
    products.length = 6;
  }
  if (location.pathname === "/") {
    navStyle = {
      display: "none",
    };
    mystyle = {
      display: "block",
    };
    products.length = 6;
  }

  return (
    <div>
      {/* {
                navbar && 
                <Navbar
        >
        </Navbar>
            } */}
      <div style={navStyle}>
        <Navbar />
      </div>
      <header>
        <h1 className="text-center mt-3  mb-5">Products</h1>
      </header>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 g-4">
              <div className="card my-card h-100">
                <img
                  alt=" "
                  src={product.img}
                  className="img-fluid p-2"
                  alt="..."
                />
                <div className="card-body ms-2">
                  {/* <p>{product.type}</p> */}
                  <h5 className="card-title text-danger">{product.name}</h5>
                  <p className="card-text">{product.details}</p>
                  <p className="card-text">
                    <span className="text-danger">Price: </span>
                    {product.price}$
                  </p>
                  <Link to={`PlaceOrder/${product.id}`}>
                    <Button color="error" variant="outlined">
                      Purchase
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div style={mystyle}>
            <NavLink to="/products">Explore more...</NavLink>
          </div>
        </div>
      </div>
      <div style={navStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default Products;

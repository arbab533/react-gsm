import React from 'react'
import {useState} from 'react';
import logoImg from '../assets/Logo-1.png'
import carImg from '../assets/no-cart-items.png'
import { Link } from "react-router-dom";
import $ from 'jquery';


const Header = ({ show, onMouseEnter, onMouseLeave }) => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
    <div className='top_header container-fluid'>
      <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <Link to='/'><img src={logoImg} /></Link>
        </div>

        <div className='col-md-6'>
          <form className="d-flex search_box" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

        <div className='col-md-3'>
          <ul className='top_ul'>
            <li>Become Seller</li>
            <li>Login</li>

            {/* Start shopping-cart-header */}
            {/*<div className="navbar-right">
              <a href="#" id="cart"><i className="fa fa-shopping-cart"></i> Cart <span className="badge">3</span></a>
              <div className="shopping-cart">
                <div className="shopping-cart-header">
                  <i className="fa fa-shopping-cart cart-icon"></i><span className="badge">3</span>
                  <div className="shopping-cart-total">
                    <span className="lighter-text">Total:</span>
                    <span className="main-color-text total">70€</span>
                  </div>
                </div> {/*end shopping-cart-header */}

                {/*<ul className="shopping-cart-items">
                  <li className="clearfix">
                    <img src="https://www.qispackaging.com.au/getmetafile/fefe4afb-dd4d-495e-ad59-209f29b47052/XMREDTREE.aspx" alt="item1" />
                    <span className="item-name">XMREDTREE</span>
                    <span className="item-detail">Pack 100</span>
                    <span className="item-price">45€</span>
                    <span className="item-quantity">Quantity: 01</span>
                  </li>

                  <li className="clearfix">
                    <img src="https://www.qispackaging.com.au/getmetafile/306f6d39-792f-4c8c-b101-9c6aef675758/XMWHREIN.aspx" alt="item1" />
                    <span className="item-name">XMWHREIN</span>
                    <span className="item-detail">Pack 100</span>
                    <span className="item-price">10€</span>
                    <span className="item-quantity">Quantity: 10</span>
                  </li>

                  <li className="clearfix">
                    <img src="https://www.qispackaging.com.au/getmetafile/b2f41988-a7b4-432c-b9c2-25bcb9afbcc3/XMJBRR.aspx" alt="item1" />
                    <span className="item-name">XMJBRR</span>
                    <span className="item-detail">Pack 25</span>
                    <span className="item-price">15€</span>
                    <span className="item-quantity">Quantity: 5</span>
                  </li>
                </ul>

                <a href="#" className="button">Checkout <i className="fa fa-chevron-right"></i></a>
              </div> {/* end shopping-cart*/}
            {/*</div> {/* end navbar-right */}
            <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><i className="fa-solid fa-cart-shopping"></i></li>
            
            {isHovering && (
              <div className='cart text-center px-3 py-4'>
                <h2 className='mb-3'>Your cart is empty</h2>
                <p>Looks like you have not added anything to your Cart. Go ahead and explore top category.</p>
                <img src={carImg}/>
              </div>
            )}


          </ul>
        </div>

        </div>
      </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-white nav_bar_bottom">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='all_cat'>
          <i className='fa-solid fa-bars'></i>&nbsp;&nbsp;All Category
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* className="navbar-nav me-auto mb-2 mb-lg-0" */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='#'>Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Bulk Auction</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Buy Now</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Tablet</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Unit Auction</a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                {/* <li><hr className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
        </div>
        <div className='grading_system'>
          <a href="#">Grading System</a>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Header
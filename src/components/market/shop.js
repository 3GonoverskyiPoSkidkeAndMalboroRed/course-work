import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
// стили из орига
import Navbar from './Navbar.js';
import ProductList from './Product_List.js'
import Details from './Details.js';
import Cart from './Cart';
import Default from './Default.js';
import Modal from './Modal.js';


export default () => {
    // render() {
        return (
            <React.Fragment>
            <Navbar />
            <Routes>
                <Route exact path="/" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={Default} />
            </Routes>
            <Modal />
        </React.Fragment>
        );
// }
}
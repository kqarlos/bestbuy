import React from "react"
import { Link } from "react-router-dom";

import "./style.css"

function Item() {
    return (

        <div className="container mt-5 bg-light p-5">

            <div className="card">
                <img className="card-img-top" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6326/6326270_sd.jpg;maxHeight=1000;maxWidth=1000" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Description</p>
                    <Link className="btn btn-dark" to="/Cart">
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Item;
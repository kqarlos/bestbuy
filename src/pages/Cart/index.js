import React from "react";
import { Link } from "react-router-dom";

function Cart() {

    return (

        <div className="container mt-5 bg-light p-5">
            <h2 className="text-center"><i class="fas fa-shopping-cart"></i> Shopping Cart</h2>

            <Link to="/Payment" className="btn btn-dark btn-lg" role="button">
                Checkout
            </Link>

        </div>
    );
}

export default Cart;
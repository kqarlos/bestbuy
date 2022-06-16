import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
// import { useStoreContext } from "../../utils/GlobalState";
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
    // const [state, dispatch] = useStoreContext();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    return (

        <div className="container mt-5 bg-light p-5">
            <h2 className="text-center"><i className="fas fa-shopping-cart"></i> Shopping Cart</h2>

            <div className="row mt-4">

                <div className="col-2">
                    Product
                </div>
                <div className="col-4">
                </div>
                <div className="col-2">
                    Price
                </div>
                <div className="col-2">
                    Quantity
                </div>
                <div className="col-2">
                </div>

            </div>

            {state.cart.map((i, index) => (
                <CartItem key={index} item={i} />
            ))}

            <div className="mt-5 row">

                <div className="col-3">
                    <Link to="/" className="btn btn-dark btn-lg" role="button">
                        Continue Shopping
                    </Link>
                </div>
                <div className="col-3">
                </div>
                <div className="col-2">
                    Total:
                </div>
                <div className="col-4">
                    <Link to="/Payment" className="btn btn-dark btn-lg" role="button">
                        Checkout
                    </Link>
                </div>

            </div>


        </div>
    );
}

export default Cart;
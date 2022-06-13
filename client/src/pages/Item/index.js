import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css"
import { ADD_CART_ITEM } from "../../utils/actions";

function Item() {
    const [state, dispatch] = useStoreContext();

    const addToCartHandler = (e) => {
        dispatch({
            type: ADD_CART_ITEM,
            item: state.currentItem
        });
    }

    function getItemButton() {
        if (state.loggedin) {
            return (
                <Link className="btn btn-dark" onClick={() => addToCartHandler()} to="/Cart">
                    <i className="fas fa-shopping-cart"></i> Add to Cart
                </Link>
            );
        } else {
            return (
                <Link to="/" className="btn btn-dark">
                    Continue Shopping
                </Link>
            );
        }
    }

    return (

        <div className="container mt-5 bg-light p-5">

            <div className="card" id="itemCard">
                <img className="card-img-top" src={state.currentItem.image} alt={state.currentItem.name} />
                <div className="card-body">
                    <h5 className="card-title">{state.currentItem.name}</h5>
                    <p className="card-text">${state.currentItem.salePrice}</p>
                    <p className="card-text">{state.currentItem.shortDescription}</p>
                    {getItemButton()}
                </div>
            </div>


        </div>
    )
}

export default Item;
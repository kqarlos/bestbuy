import React from "react"
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css"

function Item() {
    const [state, dispatch] = useStoreContext();


    return (

        <div className="container mt-5 bg-light p-5">

            <div className="card" id="itemCard">
                <img className="card-img-top" src={state.currentItem.image} alt={state.currentItem.name} />
                <div className="card-body">
                    <h5 className="card-title">{state.currentItem.name}</h5>
                    <p className="card-text">${state.currentItem.salePrice}</p>
                    <p className="card-text">{state.currentItem.shortDescription}</p>
                    <Link className="btn btn-dark" to="/Cart">
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Item;
import React from "react";
import "../ItemCard/style.css"

function ItemCard(props) {

    return (

        <div className="col-sm-4 my-3">
            <div className="card">
                <img className="card-img-top " src={props.item.image} alt={props.item.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}</h5>
                    <p className="card-text">{props.item.salePrice}</p>
                    <p className="card-text">{props.item.shortDescription}</p>
                </div>
            </div>
        </div>

    )
}
export default ItemCard

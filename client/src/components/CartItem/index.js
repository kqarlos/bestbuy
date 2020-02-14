import React from "react"

function CartItem(props) {

    return (

        <div className="row mt-4">

            <div className="col-2">
                <img className="card-img-top" src={props.item.image} alt={props.item.name} />
            </div>
            <div className="col-4">
                {props.item.shortDescription}
            </div>
            <div className="col-2">
                {props.item.salePrice}
            </div>
            <div className="col-2">
                <input className="form-control" type="text" placeholder="" />
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger">X</button>
            </div>

        </div>

    )
}

export default CartItem
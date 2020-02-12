import React from "react"

function CartItem() {

    return (

        <div className="row mt-4">

            <div className="col-2">
                Photo
        </div>
            <div className="col-4">
                Description
        </div>
            <div className="col-2">
                Price
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
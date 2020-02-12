import React from "react"

function ItemCard() {

    return (

        <div className="col-sm-4">
            <div className="card">
                <img className="card-img-top" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6326/6326270_sd.jpg;maxHeight=1000;maxWidth=1000" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Item Name</h5>
                    <p className="card-text">Item Price</p>
                    <p className="card-text">Item Description</p>
                </div>
            </div>
        </div>

    )
}
export default ItemCard

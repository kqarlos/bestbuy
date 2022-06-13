import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";
import "../ItemCard/style.css"
import { SET_CURRENT_ITEM } from "../../utils/actions";

function ItemCard({ item }) {
    const [state, dispatch] = useStoreContext();

    function setCurrentItem() {
        dispatch({
            type: SET_CURRENT_ITEM,
            item: item
        });
    }

    return (

        <div className="col-sm-4 my-3">
            <div className="card">
                <img className="card-img-top " src={item.image} alt={item.name} />
                <div className="card-body">
                    <Link className="card-title" onClick={setCurrentItem} to="/Item">
                        {item.name}
                    </Link>
                    <p className="card-text">${item.salePrice}</p>
                    <p className="card-text">{item.shortDescription}</p>
                </div>
            </div>
        </div>

    )
}
export default ItemCard

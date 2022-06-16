import React from "react"
// import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_CART_ITEM } from "../../utils/actions";
import { useDispatch, useSelector } from 'react-redux';

function CartItem({ item }) {

    // const [state, dispatch] = useStoreContext();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    function removeFromCart() {
        dispatch({
            type: REMOVE_CART_ITEM,
            name: item.name
        });
    }

    return (

        <div className="row mt-4">

            <div className="col-2">
                <img className="card-img-top" src={item.image} alt={item.name} />
            </div>
            <div className="col-4">
                {item.shortDescription}
            </div>
            <div className="col-2">
                {item.salePrice}
            </div>
            <div className="col-2">
                <input className="form-control" type="text" placeholder={state.cartCount[item.name]} />
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger" onClick={removeFromCart}>X</button>
            </div>

        </div>

    )
}

export default CartItem
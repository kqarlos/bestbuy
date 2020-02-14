import React, { createContext, useReducer, useContext } from "react";
import {
    UPDATE_ITEMS,
    REMOVE_CART_ITEM,
    ADD_CART_ITEM,
    SET_CURRENT_ITEM,
    LOGIN,
    LOGOUT
} from "./actions"

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_ITEMS:
            return {
                ...state,
                searchItems: [...action.searchItems],
            };
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.filter((cart) => {
                    return cart._id !== action._id;
                })
            };
        case ADD_CART_ITEM:
            return {
                ...state,
                cart: [action.item, ...state.cart]
            };
        case SET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.item,
            };
        case LOGIN:
            return {
                ...state,
                loggedin: true,
                user: action._id
            };
        case LOGOUT:
            return {
                ...state,
                loggedin: true,
                user: ""
            };
        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        searchItems: [],
        currentItem: {
            // _id: 0,
            // title: "",
            // price: "",
            // description: ""
        },
        cart: [],
        loggedin: false,
        userId: ""
    });
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

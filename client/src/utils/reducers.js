import {
    UPDATE_ITEMS,
    REMOVE_CART_ITEM,
    ADD_CART_ITEM,
    SET_CURRENT_ITEM,
    LOGIN,
    LOGOUT,
    CLEAR_CART,
    UPDATE_CATEGORIES
} from "./actions";

const initialState = {
    searchItems: [],
    currentItem: {
        // _id: 0,
        // title: "",
        // price: "",
        // description: ""
    },
    categories: [],
    cart: [],
    //key: itemName, value: itemQty
    cartCount: {},
    loggedin: false,
    userId: ""
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ITEMS:
            return {
                ...state,
                searchItems: [...action.searchItems],
            };
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };
        case REMOVE_CART_ITEM:
            var count = state.cartCount;
            delete count[action.name];
            return {
                ...state,
                cart: state.cart.filter((item) => {
                    return item.name !== action.name;
                }),
                cartCount: count
            };
        case ADD_CART_ITEM:
            var count = state.cartCount;
            if (count[action.item.name]) {
                count[action.item.name]++;
                return {
                    ...state,
                    cartCount: count
                };
            } else {
                count[action.item.name] = 1;
                return {
                    ...state,
                    cart: [...state.cart, action.item],
                    cartCount: count
                };
            }

        case CLEAR_CART:
            return {
                ...state,
                cart: [],
                cartCount: {}
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
                loggedin: false,
                user: ""
            };
        default:
            return state;
    }
};


export default reducers;

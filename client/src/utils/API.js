import axios from "axios";

export default {

    login: function (userData) {
        return axios.post("api/users/login", userData);
    },
    signup: function (userData) {
        return axios.post("api/users/signup", userData);
    },
    isAuth: function (_id) {
        return axios.get("api/users/" + _id);
    },
    findAll: function () {
        return axios.get("api/products");
    },
    getItem: function (_id) {
        return axios.get("api/products/" + _id);
    },
    getProductsByCategory: function () {
        return axios.get("api/products/category");
    }
}
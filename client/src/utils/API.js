import axios from "axios";

export default {

    login: function (userData) {
        return axios.post("/users/login", userData);
    },
    signup: function (userData) {
        return axios.post("/users/signup", userData);
    },
    isAuth: function (_id) {
        return axios.get("/users/" + id);
    },
    findAll: function () {
        return axios.get("/products/");
    },
    getItem: function (_id) {
        return axios.get("/products/" + id);
    },
    getProductsByCategory: function () {
        return axions.get("/products/category");
    }
}
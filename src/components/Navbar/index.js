import React from "react";
import { Link } from "react-router-dom";
// import "./style.css"


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/"> <span role="img" aria-label="laptop">💻</span> BestBuy</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">

                    <Link class="nav-item nav-link active" to="/">
                        Home <span class="sr-only">(current)</span>
                    </Link>
                    <Link class="nav-item nav-link" to="/Login">
                        Login
                    </Link>
                    <Link class="nav-item nav-link" to="/Login">
                        Signup
                    </Link>
                    <Link class="nav-item nav-link" to="/Login">
                        Logout
                    </Link>
                    <Link class="nav-item nav-link" to="/Login">
                        Cart
                    </Link>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGOUT } from "../../utils/actions";
import { useDispatch, useSelector } from 'react-redux';

function Navbar() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    function handleLogout() {
        dispatch({
            type: LOGOUT
        })
    }

    function getNav(loggedin) {
        if (loggedin) {
            return (
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">
                        Home <span className="sr-only">(current)</span>
                    </Link>
                    <Link className="nav-item nav-link" to="/Cart">
                        Cart
                    </Link>
                    <Link className="nav-item nav-link" onClick={handleLogout} to="/">
                        Logout
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/">
                        Home <span className="sr-only">(current)</span>
                    </Link>
                    <Link className="nav-item nav-link" to="/Login">
                        Login
                    </Link>
                    <Link className="nav-item nav-link" to="/Signup">
                        Signup
                    </Link>
                </div>
            );
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/"> <span className="display-4" role="img" aria-label="laptop">💻 BestBuy</span> </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ fontSize: 20 }}>
                {getNav(state.loggedin)}
            </div>
        </nav>

    );
}

export default Navbar;

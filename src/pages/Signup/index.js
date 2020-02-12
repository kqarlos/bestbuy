import React from "react";
import { Link, useHistory } from "react-router-dom";

function Signup() {
    const history = useHistory();
    const handleClick = () => {
        history.push("/");
    }

    return (

        <div className="container mt-5 bg-light p-5">
            <h2 className="text-center">SignUp</h2>
            <form className="mt-4 col-6">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>


                <button type="button" className="btn btn-dark btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Submit</button>

                <div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">SigUp Succesfull!!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Go back home and start shopping
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={handleClick}>Close</button>
                            </div>

                        </div>
                    </div>
                </div>


            </form>
        </div>
    );
}

export default Signup;
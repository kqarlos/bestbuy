import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_CART } from "../../utils/actions";

function Payment() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const navigate = useNavigate();
    const handlePaymentSubmit = () => {
        navigate("/");
        dispatch({
            type: CLEAR_CART
        })
    }

    return (

        <div className="container my-5 bg-light p-5">
            <h2 className="text-center">Enter Payment Information</h2>
            <form className="mt-4">

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label><i className="fas fa-user"></i> Name</label>
                        <input type="email" className="form-control" placeholder="First Last" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Accepted Cards</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label> <i className="fas fa-envelope"></i> Email</label>
                        <input type="text" className="form-control" placeholder="email@example.com" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Name on card</label>
                        <input type="text" className="form-control" placeholder="First Last" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label><i className="far fa-address-card"></i> Address</label>
                        <input type="text" className="form-control" placeholder="123 Main Street" />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Credit Card Number</label>
                        <input type="text" className="form-control" placeholder="1234 5678 1234 5678" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label><i className="fas fa-city"></i> City</label>
                        <input type="text" className="form-control" placeholder="Oakland" />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Expiration Month</label>
                        <input type="text" className="form-control" placeholder="12" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label><i className="fas fa-university"></i> State</label>
                        <input type="text" className="form-control" placeholder="CA" />
                    </div>
                    <div className="form-group col-md-3">
                        <label>Zip</label>
                        <input type="text" className="form-control" placeholder="94601" />
                    </div>

                    <div className="form-group col-md-3">
                        <label>Expiration Year</label>
                        <input type="text" className="form-control" placeholder="2025" />
                    </div>
                    <div className="form-group col-md-3">
                        <label>CVV</label>
                        <input type="text" className="form-control" placeholder="123" />
                    </div>
                </div>


                <button type="button" className="btn btn-dark btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Process Payment</button>

                <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Order Succesfull!!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Go back home
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={handlePaymentSubmit}>Close</button>
                            </div>

                        </div>
                    </div>
                </div>





            </form>


        </div>
    );
}

export default Payment;
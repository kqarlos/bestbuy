import React from "react";
import { Link, useHistory } from "react-router-dom";

function Payment() {
    const history = useHistory();
    const handleClick = () => {
        history.push("/");
    }

    return (

        <div className="container mt-5 bg-light p-5">
            <h2 className="text-center">Enter Payment Information</h2>
            <form className="mt-4">

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4"><i class="fas fa-user"></i> Name</label>
                        <input type="email" className="form-control" id="inputName" placeholder="First Last" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Accepted Cards</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputAddress"> <i class="fas fa-envelope"></i> Email</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="email@example.com" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputAddress2">Name on card</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="First Last" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity"><i class="far fa-address-card"></i> Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="123 Main Street" />
                    </div>

                    <div className="form-group col-md-6">
                        <label for="inputZip">Credit Card Number</label>
                        <input type="text" className="form-control" id="inputZip" placeholder="1234 5678 1234 5678" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity"><i class="fas fa-city"></i> City</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Oakland" />
                    </div>

                    <div className="form-group col-md-6">
                        <label for="inputZip">Expiration Month</label>
                        <input type="text" className="form-control" id="inputZip" placeholder="12" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="inputCity"><i class="fas fa-university"></i> State</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="CA" />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputCity">Zip</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="94601" />
                    </div>

                    <div className="form-group col-md-3">
                        <label for="inputCity">Expiration Year</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="2025" />
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputCity">CVV</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="123" />
                    </div>
                </div>



                <button type="button" className="btn btn-dark btn-lg" data-toggle="modal" data-target=".bd-example-modal-sm">Process Payment</button>

                <div className="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
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
                                <button type="button" className="btn btn-dark" data-dismiss="modal" onClick={handleClick}>Close</button>
                            </div>

                        </div>
                    </div>
                </div>





            </form>


        </div>
    );
}

export default Payment;
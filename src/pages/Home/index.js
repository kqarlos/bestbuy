import React from "react";
import ItemCard from "../../components/ItemCard"
function Home() {

    return (

        <div className="container mt-5 bg-light p-5">

            <div class="input-group md-form form-sm form-2 pl-0">
                <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" />
                <div class="input-group-append">
                    <span class="input-group-text red lighten-3" id="basic-text1"><i class="fas fa-search text-grey"
                        aria-hidden="true"></i></span>
                </div>
            </div>

            <div class="row justify-content-around mt-4">
                <div class="col-2">
                    Pick a category
                </div>
                <div class="col-1">
                    <button type="button" class="btn btn-dark">Dark</button>
                </div>
                <div class="col-1">
                    <button type="button" class="btn btn-dark">Dark</button>
                </div>
                <div class="col-1">
                    <button type="button" class="btn btn-dark">Dark</button>
                </div>
                <div class="col-1">
                    <button type="button" class="btn btn-dark">Dark</button>
                </div>
            </div>

            <div className=" mt-5 container">
                <div className="row">

                    <ItemCard />
                    <ItemCard />
                    <ItemCard />

                </div>
            </div>

        </div>
    );
}

export default Home;
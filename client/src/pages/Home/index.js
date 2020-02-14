import React, { useEffect } from "react";
import ItemCard from "../../components/ItemCard";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_ITEMS } from "../../utils/actions"

function Home() {


    const [state, dispatch] = useStoreContext();

    const getItems = () => {
        API.findAll()
            .then(results => {
                dispatch({
                    type: UPDATE_ITEMS,
                    searchItems: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getItems();
    }, []);


    return (

        <div className="container mt-5 bg-light p-5">

            <div className="input-group md-form form-sm form-2 pl-0">
                <input className="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                    <span className="input-group-text red lighten-3" id="basic-text1"><i className="fas fa-search text-grey"
                        aria-hidden="true"></i></span>
                </div>
            </div>

            <div className="row justify-content-around mt-4">
                <div className="col-2">
                    Pick a category
                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-dark">Dark</button>
                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-dark">Dark</button>
                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-dark">Dark</button>
                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-dark">Dark</button>
                </div>
            </div>

            <div className=" mt-5 container">
                <div className="row">

                    {state.searchItems.map((i, index) => (
                        <ItemCard key={index} item={i}/>
                    ))}

                </div>
            </div>

        </div>
    );
}

export default Home;
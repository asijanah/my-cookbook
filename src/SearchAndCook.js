import React from 'react';

import CookBook from './CookBook';

function SearchAndCook() {
    return (
        <div className="main-search">
            <div className="big-header">
                <h1>Recipes</h1>
            </div>
            <div className="row littel-header">
                <div className="col-lg-3 col-6">
                    <h2>Show My Recipes</h2>
                </div>
                <div className="form-group firstCheckBtn">
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" name="orderProp" className="form-check-input" value="" />Most Popular
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" name="orderProp" className="form-check-input" value="" />Newest
                        </label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                        <input type="text" className="form-control" placeholder="Search recipe" aria-label="Search" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                        <input type="text" className="form-control" placeholder="Search by ingredient" aria-label="Search" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" name="orderProp" className="form-check-input" value="" />Most Popular
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" name="orderProp" className="form-check-input" value="" />Newest
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <CookBook/>
            </div>
        </div>
    )
};

export default SearchAndCook;
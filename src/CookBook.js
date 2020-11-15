import React from 'react';

function CookBook() {
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
            <div className="row flex-grow-1">
                <div className="col-xl-3 col-md-4 col-sm-6 my-2 cards">
                    <div className="card h-100 vh">
                        <img src="./chocolate_cake.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Chocolate Cake</a></h5>
                            <p className="card-text">Viewers:</p>
                            <p className="card-text">Last Update:</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                        </div>
                    </div>
                </div>

                <div className=" col-xl-3 col-md-4 col-sm-6 my-2">
                    <div className="card h-100 vh">
                        <img src="./pizza.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Pizza Margherita</a></h5>
                            <p className="card-text">Viewes:</p>
                            <p className="card-text">Last Update:</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-outline-secondary btnUp btnUp">Update</a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6 my-2">
                    <div className="card h-100 vh">
                        <img src="./applepie.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Apple Pie</a></h5>
                            <p className="card-text">Viewes:</p>
                            <p className="card-text">Last Update:</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6 my-2">
                    <div className="card h-100 vh">
                        <img src="./Omlet.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Omlet</a></h5>
                            <p className="card-text">Viewes:</p>
                            <p className="card-text">Last Update:</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row flex-grow-1">
                <div className="col-xl-3 col-md-4 col-sm-6 my-2">
                    <div className="card h-100 vh">
                        <img src="./Pancakes.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Pancakes</a></h5>
                            <p className="card-text">Viewes:</p>
                            <p className="card-text">Last Update:</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6 my-2">
                    <div className="card h-100 vh">
                        <img src="./recipe-imge.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Shakshuka</a></h5>
                            <p className="card-text">Viewes:</p>
                            <p className="card-text">Last Update:</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6 my-2">
                    <div className="card h-100 vh">
                        <img src="./lemonpie.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Lemon Pie</a></h5>
                            <p className="card-text">Viewes:</p>
                            <p className="card-text">Last Update:</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-4 col-sm-6 my-2">
                    <div className="card h-100 vh">
                        <img src="./mafrum.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="">Mafrum</a></h5>
                            <p className="card-text">Viewes:</p>
                            <p className="card-text">Last Update:</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CookBook
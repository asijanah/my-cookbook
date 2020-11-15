import React from 'react';

function RecipePage() {



    return (
        <div id="jambo" className="container mt-3">
            <div className="jumbotron">
                <h1>Fluid jumbotron</h1>
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <p>Source:</p>
                        </div>
                        <div className="row">
                            <p>Ingredients:</p>
                        </div>
                        <div className="row">
                            <p>Recipe Type:</p>
                        </div>
                        <div className="row">
                            <p>Suitable for:</p>
                        </div>
                        <textarea rows="3" className="w-75">Free explanation of how to prepare the recipe</textarea>

                    </div>
                    <div className="col-md-5">
                        <img src="pizza.jpg"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default RecipePage
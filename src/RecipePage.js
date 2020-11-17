import React from 'react';import { Link, useParams } from 'react-router-dom';

import cardsData from './cardsData';

function RecipePage() {

    const params = useParams();
    console.log(params);
    const recipe = cardsData.find(item => item.id == params.id);
    console.log(recipe);

    return (
        <div id="jambo" className="container mt-3">
            <div className="jumbotron">
                <h1>{recipe.name}</h1>
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <p>Source:<Link>{recipe.source}</Link></p>
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
                        <img src={recipe.img}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default RecipePage
import React from 'react'; import { Link, useParams } from 'react-router-dom';

import cardsData from './cardsData';

function RecipePage() {

    const params = useParams();
    console.log("param is: ",params);
    const recipe = cardsData.find(item => item.id == params.id);
    console.log(recipe);

    return (
        <div id="jambo" className="container mt-3">
            <div className="jumbotron bg-light">
                <h1 className="pb-4" >{recipe.name}</h1>
                <div className="row">

                    <div className="col-md-7 font-weight-bold">

                        <div className="row mb-1">
                            <p>Source:<Link>{recipe.source}</Link></p>
                        </div>
                        <div className="row mb-1">
                            <p>Ingredients: {recipe.ingredients.join(" ,")}</p>
                        </div>
                        <div className="row mb-1">
                            <p>Recipe Type: {recipe.type}</p>
                        </div>
                        <div className="row mb-1">
                            <p>Suitable for:</p>
                        </div>
                        <textarea rows="3" className="w-75 font-weight-light text-muted">Free explanation of how to prepare the recipe</textarea>
                    </div>
                    <div className="col-md-5">
                        <img src={recipe.img} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default RecipePage
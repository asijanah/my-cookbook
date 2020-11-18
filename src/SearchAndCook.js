import React, { useState } from 'react';

import cardsData from './cardsData';
import CookBook from './CookBook';

function SearchAndCook() {

    const [recipes, setRecipes] = useState(cardsData);

    function updateItem(id) {
        let data = [...cardsData];
        const recipe = data.find(item => item.id == id);
        recipe.viewes++;
        recipe.lastupdate = new Date();

        setRecipes(data);
    };

    const sortByDate = () => {
        const newest = [...cardsData];
        newest.sort((a, b) => b.lastupdate - a.lastupdate);
        setRecipes(newest);
    };

    const sortByViewes = () => {
        const populars = cardsData.slice(0);
        populars.sort((a, b) => b.viewes - a.viewes);
        setRecipes(populars);
    };

    const filterRecipe = (el) => {
        const newData = [...cardsData]
        const recipeList=newData.map(item => item.name)
        const result=recipeList.filter(recipe => recipe.toLowerCase().includes(el.target.value))
        console.log(` you look for ${result}`);
    }

    return (
        <div className="main-search">
            <div className="big-header mb-4">
                <h1>Recipes</h1>
            </div>
            <div className="row littel-header align-middle mb-2">
                <div className="col-lg-3 col-6">
                    <h4>Show My Recipes</h4>
                </div>
                <div className="form-group mt-2 ">
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" name="orderProp" className="form-check-input" value="" onChange={sortByViewes} />Most Popular
                        </label>
                    </div>
                    <div className="form-check-inline">
                        <label className="form-check-label">
                            <input type="radio" name="orderProp" className="form-check-input" value="" onChange={sortByDate} />Newest
                        </label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                        <input type="text" className="form-control" placeholder="Search recipe" name="search" aria-label="Search"
                            onBlur={filterRecipe}
                        />
                        
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
                                <input type="radio" name="orderProp" className="form-check-input" value="" />All
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input type="radio" name="orderProp" className="form-check-input" value="" />At Least one
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <CookBook recipes={recipes} updateItem={updateItem} />
            </div>
        </div>
    )
};

export default SearchAndCook;
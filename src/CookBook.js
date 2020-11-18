import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CookBook from './CookBook'
import cardsData from './cardsData';



function CookBook({ recipes, updateItem }) {

    return (
        recipes.map((item, index) =>

            <div className="col-xl-3 col-md-4 col-sm-6 my-2">
                <div className="card h-100 w-75  border-dark">
                    <img src={item.img} className="card-img-top h-50" alt="..." />
                    <div className="card-body text-center">
                        <div className="">
                        <Link className="card-title text-dark font-weight-bold" to={`/recipe/${item.id}`} onClick={() => updateItem(item.id)}>{item.name}</Link>
                        </div>
                        <div className="mt-4 align-middle">
                            <p className="card-text">Viewers: {item.viewes}</p>
                            <p className="card-text">Last Update: {item.lastupdate.toLocaleDateString("he-IL")}</p>
                        </div>
                    </div>
                    <div className="card-footer block p-1">
                        <a href="#" className="btn btn-outline-secondary d-block">Edit Recipe</a>
                    </div>
                </div>
            </div>
        ));
};
export default CookBook
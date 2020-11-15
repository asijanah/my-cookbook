import React, { useState } from 'react';
import cardsData from './cardsData';



function CookBook() {

    const [displayCards, setDisplayCards] = useState(cardsData);

    function upDateItem(item) {
        let newDisplayCards = [...displayCards];
        newDisplayCards[item].viewes++;
        newDisplayCards[item].lastupdate = new Date();
        setDisplayCards(newDisplayCards)
    }
    return (
        displayCards.map((item, index) =>
            // <div className="main-search">
            //     <div className="row">
            <div className="col-xl-3 col-md-4 col-sm-6 my-2 cards">
                <div className="card h-100 vh">
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => upDateItem(index)}>{item.name}</h5>
                        <p className="card-text">Viewers:{item.viewes}</p>
                        <p className="card-text">Last Update:{item.lastUpdate}</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                    </div>
                </div>
            </div>
            //     </div>
            // </div>
        ))
}

export default CookBook
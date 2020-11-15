import React, { useState } from 'react';
import cardsData from './cardsData';



function CookBook() {

    const [displayCards, setDisplayCards] = useState(cardsData);

    // function upDateItem(item) {
    //     let newDisplayCards = [...displayCards];
    //     newDisplayCards[item].viewes++;
    //     newDisplayCards[item].lastupdate=new Date();
    //     setDisplayCards(newDisplayCards)
    // }
    return (
        displayCards.map(item =>
            <div className="main-search">
                <div className="row flex-grow-1">

                    <div className="col-xl-3 col-md-4 col-sm-6 my-2 cards">
                        <div className="card h-100 vh">
                            <img src={item.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"><a href="">{item.name}</a></h5>
                                <p className="card-text">Viewers:{item.viewes}</p>
                                <p className="card-text">Last Update:</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
}





{/* <div className=" col-xl-3 col-md-4 col-sm-6 my-2">
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
                </div> */}

export default CookBook
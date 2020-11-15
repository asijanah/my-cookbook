import React from 'react';

function  CardComponent(){

    const displyFood=(props)=>{
        return props.cardsData.map((el)=>{
            return(
                <div className="col-xl-3 col-md-4 col-sm-6 my-2 cards">
                <div className="card h-100 vh">
                    <img src={el.img}className="card-img-top" alt="..." />
                    <div className="card-body">
            <h5 className="card-title"><a href="">Chocolate Cake{el.name}</a></h5>
            <p className="card-text">Viewers:{el.viewes}</p>
            <p className="card-text">Last Update:{el.lastupdate}</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-outline-secondary btnUp">Update</a>
                    </div>
                </div>
            </div>
            )
        })
    }
}
export default CardComponent
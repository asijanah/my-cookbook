import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-md navbar-dark bg-info mb-4 ">
                <div className="container">
                    <Link to='/'>
                        <a className="navbar-brand">My CookBook</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <Link to='/registration'>
                                <li className="nav-item active mx-4">
                                    <a className="nav-link">My profile<span className="sr-only">(current)</span></a>
                                </li>
                            </Link>
                            <Link to='/newrecipe'>
                                <li className="nav-item active mx-4">
                                    <p className="nav-link ">New Recipe</p>
                                </li>
                            </Link>
                            <Link to='/login'>
                                <li className="nav-item active mx-4 ">
                                    <a className="nav-link " href="" tabIndex="-1" aria-disabled="true">Log In</a>
                                </li>
                            </Link>
                            <li className="nav-item active mx-4 ">
                                <a className="nav-link" href="" tabIndex="-1" aria-disabled="true">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header
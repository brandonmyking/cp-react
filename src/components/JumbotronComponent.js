import React from 'react';

export const Jumbotron = () => {
    return(
        <header className="jumbotron">
            <div className="row">
                <div className="col-1 col-sm-2 col-md-3 coordinates">
                </div>
                <div className="col-10 col-sm-8 col-md-6 hero-logo">
                    <img className="img-fluid" src="https://www.cutterspoint.com/media/static/images/CP-Logo-Large.png" />
                </div>
                <div className="col-1 col-sm-2 col-md-3"></div>
            </div>
        </header>
    );
}
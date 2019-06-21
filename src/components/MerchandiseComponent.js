import React from 'react';

export const Merchandise = () => {
    return(
        <div className="merch">
            <div className="container">
                <div className="row">
                    <div className="b-bottom mb-5 mb-md-0 col-12 col-md-4 b-right d-flex align-items-center">
                        <a href="#" className="overlay">
                            <img className="img-fluid" src="https://www.cutterspoint.com/media/static/images/cp-coffee-merch.png" />
                        </a>
                    </div>
                    <div className="col col-md-8">
                        <div className="row">
                            <div className="b-bottom mb-5 mb-md-0 col-12 col-md-6 d-flex justify-content-center">
                                <a href="#" className="overlay">
                                    <img className="max-500 mb-3 img-fluid" src="https://www.cutterspoint.com/media/dynamic/images/143_BestOfSouthSound.jpg" />
                                    <h4 className="mb-5 white-link">Best of South Sound&nbsp;<span className="white-link small-span">(read more)</span></h4>
                                </a>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-center">
                                <a className="overlay" href="#">
                                    <img className="max-500 mb-3 img-fluid" src="https://www.cutterspoint.com/media/dynamic/images/142_IMG_0078.JPG" />
                                    <h4 className="white-link">Remodeled Flagship Store&nbsp;<span className="white-link small-span">(read more)</span></h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
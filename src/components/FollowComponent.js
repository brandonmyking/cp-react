import React from 'react';

export const Follow = () => {
    return(
        <div className="follow row ml-0 mr-0">
            <div className="col-12 d-flex p-0 justify-content-center">
                <h3 className="white-link location-text align-self-center">Follow, Friend, Fan</h3>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <a className="btn-white btn btn-social-icon mr-3" href="http://facebook.com/cutterspointcoffeeroaster">
                    <i className="fa fa-facebook d-flex align-items-center justify-content-center"></i>
                </a>
                <a className="btn-white btn btn-social-icon ml-3" href="#">
                    <i className="fa fa-instagram d-flex align-items-center justify-content-center"></i>
                </a>
            </div>
        </div>
    );
}
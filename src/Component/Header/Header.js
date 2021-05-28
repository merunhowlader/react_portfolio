import React from 'react';
import './Header.css';
import pic3 from './../../images/pic6.png';
const Header = () => {
    return (
        <div >

            <div>

                <div className="row">
                    <div className="col-md-6 header-text-div ">
                       <div>
                       <h3>Hey_________</h3>
                        <h1 class="header-title">I AM <span>MERUN</span><br/>KANTI HOWLADER</h1>
                        <h3 class=" m-5 my-5">mern stack and laravel <br/> WEB DEVELOPER</h3>
                        <div class="d-flex flex-row flex-wrap justify-content-center">
                                <button type="button" class="btn button primary-button mr-4 text-uppercase">hire me</button>
                                <button type="button" class="btn button secondary-button text-uppercase ">Get cv</button>
                        </div>
                       </div>
                    </div>
                    <div className="col-md-6 header-img-div ">
                        <div className="w-75 img-bg ">
                            <img src={pic3}  alt="" />
                        </div>

                    </div>


                </div>
            </div>
            
        </div>
    );
};

export default Header;
import React from "react";
import './Brand.css'

import b1 from "./../../images/b1.png";
import b2 from "./../../images/b2.png";
import b3 from "./../../images/b3.png";
import b4 from "./../../images/b4.png";
import b5 from "./../../images/b5.png";
import b6 from "./../../images/b6.png";
import b7 from "./../../images/b7.png";
import b8 from "./../../images/b8.png";
import b9 from "./../../images/b9.png";
import pic1 from "./../../images/merunpic1.png";
const Brand = () => {
  return (
    <div class="brand-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-6 com-lg-12 col-md-12">
            <div class="fast-row row ok">
                <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand">
                  <img src={b1} alt="brand1" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand ">
                  <img src={b2} alt="brand2" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand ">
                  <img src={b3} alt="brand3" />
                </div>
                </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand">
                  <img src={b1} alt="brand1" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand ">
                  <img src={b2} alt="brand2" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand ">
                  <img src={b3} alt="brand3" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand">
                  <img src={b4} alt="brand4" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand">
                  <img src={b5} alt="brand5" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand">
                  <img src={b6} alt="brand6" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand">
                  <img src={b7} alt="brand7" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand">
                  <img src={b8} alt="brand8" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-brand">
                  <img src={b9} alt="brand9" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 com-lg-12 col-md-12">
            <div class="brand-img">
            <img src={pic1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;

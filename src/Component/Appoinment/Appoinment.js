import React from "react";
import pic7 from "./../../images/pic2.png";
import "./Appoinment.css";

const Appoinment = () => {
  return (
    <section className=" appoinment-container ">
      <div className="mkcontainer ">
        <div className="row d-flex justify-content-end w-75 ">
        
          <div className="col-md-5 d-none d-md-block">
            <img src={pic7} alt="" />
          </div>
          <div className="col-md-7  text-white py-5 abc">
                   
                    
                    <h2  className="text-uppercase my-4" >
                   LET ME INTRODUCE MYSELF
                    </h2>
                                <p >
                                    I'm a web developer ,I work on backend and front end of web application,mostly of the time i work with node js ,laravel .i also have experience in python .
                                </p>
                                <p>
                                    I complete my study from AIUB in computer science & software engineering . I have work experience in work space info tech limited as an intern. I work on ai base blood finding messaging chat boot with was build with python. in academic year i done several project on laravel and node js also.like tour planning system which was build with the help of google map api .micro blog system ,tour posting system etc. i know wordpress shopify cms. i have on hand experience on seo.
                                </p>
                            

                    
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Appoinment;

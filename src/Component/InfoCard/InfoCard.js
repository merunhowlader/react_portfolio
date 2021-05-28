import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './InfoCard.css'
const InfoCard = ({ info }) => {
 const handleGithub=(data)=>{
    if(data.title==="GitHub"){

      window.open('https://github.com/merunhowlader', '_blank');
       
      
    }

  }
  return (
    <div className="col-md-4 text-white info-card">
      <div className={`d-flex justify-content-center info-container info-${info.background} `} onClick={()=>handleGithub(info)}>
        <div className="me-3">
          <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
        </div>
        <div>
          <h6>{info.title}</h6>
          <small> {info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

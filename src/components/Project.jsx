// ImageComponent.js
import React from 'react';
import diagonalArrow from "./../assets/diagonalArrow.png";

const ImageComponent = ({ src,projectTitle,projectdesc,techused, url}) => {
  
  return (
    <div>
      <div className="container " style={{borderRadius:"10px",backgroundColor:"white"}}>
        <div className="row">
          <div className="col-md-3 col-sm-1 p-4">
            <div className="text-center" >
              <img src={src}  height={"100%"} width={"70%"} style={{borderRadius:"50%"}}></img>
            </div>
          </div>
          <div className="col-md-6 col-sm-1 p-4 px-5">
            <div className="text-left">
              <h1 style={{fontWeight:900}} >{projectTitle}</h1>
              <p>{projectdesc}</p>
              Technologies Used:     <b style={{fontSize:"25px"}}>{" "}{techused}</b><br />
              <a href={url} target='_blank' style={{textDecoration:"none"}}>Live Demo{"   "}<img src={diagonalArrow} width={"15px"} height={"15px"} alt="" /></a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ImageComponent;

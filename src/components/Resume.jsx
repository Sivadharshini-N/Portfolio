import React from 'react';
import file from "./../assets/file.gif"
import "./../App.css"

function Resume() {
    
  return (
    <div>
        <div className="container-fluid slide-right" style={{backgroundColor:"white"}}>
            <div className="row">
                <div className="col-md-6 col-sm-1">
                    <div className="text-center">
                        <img src={file} width={"100%"} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-1 d-flex justify-content-center align-items-center">
                    <div className="text-dark ">
                    <h1 style={{fontSize:"40px"}}>Download My Resume with a <a href="/Sivadharshini N Resume.pdf" download="SivadharshiniN Resume.pdf" style={{color:"#33CCCC",fontWeight:900,fontSize:"120px",textDecoration:"none"}} className="text-center d-flex justify-content-center align-items-center">Click!</a></h1>
                    <p  className="text-center d-flex justify-content-center align-items-center">Check Out My Resume to See How I Can Add Value!</p>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Resume;

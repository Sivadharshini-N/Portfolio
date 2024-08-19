import React from 'react';
import me from "./../assets/images/me.png"
import linklogo from "./../assets/images/linklogo.png"
import github from "./../assets/images/github.png"
import medium from "./../assets/images/medium.png"
import gmail from "./../assets/images/gmail.png"


const Intro = () => {
    return (
        <div id="intro">
            <div className="container-fluid intro slide-down" >
                <div className="row text-light">
                    <div className="col-md-7 column-content col-sm-12 d-flex n align-items-center justify-content-center">
                        <div className="text-center mb-4">
                            <p>Once upon a time, there lived a <h1>FrontEnd dev</h1>known as</p>
                            <h2>Sivadharshini Nagarajan</h2>
                            <br />
                            <div className="text-center ">
                                <div className="row text-center d-flex justify-content-center align-items-center" style={{ height: "1vh" }}>
                                    <div className="col-2 col-md-1 ">
                                       <a href="https://www.linkedin.com/in/sivadharshini-nagarajan/" target='_blank'> <img src={linklogo} alt="" /></a>
                                    </div>
                                    <div className="col-2 col-md-1 ">
                                       <a href="https://github.com/Sivadharshini-N"  target='_blank'><img src={github} alt="" /></a> 
                                        
                                    </div>
                                    <div className="col-2 col-md-1">
                                       <a href="https://medium.com/@nsivadharshini1"  target='_blank'><img src={medium} alt="" /></a> 
                                        
                                    </div>
                                    <div className="col-2 col-md-1">
                                       <a href="mailto:nsivadharshini1@gmail.com" target='_blank'><img src={gmail} alt="" /></a> 
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-5 col-sm-12 column-content d-flex justify-content-center align-items-end">
                        <img src={me} width={"100%"} alt="" />

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Intro;

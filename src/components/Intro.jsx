import React from 'react';
import me from './../assets/me.jpg';
import "./../App.css" 

const Intro = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center slide-down" style={{ color: "#bbff33", height:"500px"}}>
                <div className="row">
                    <div className="col-md-4 col-sm-1">
                        <img src={me} alt="Sivadharshini" width={"100%"} style={{borderRadius: "50%" }} />
                    </div>
                    <div className="col-md-7 col-sm-1 pt-5">
                        <h1 style={{ letterSpacing: "3px", fontSize: "20px", color: "#bbff33",textShadow:"3px -5px 10px #bbff33" }}>Hello World!</h1>
                        <h2 style={{ color: "#bbff33",letterSpacing:"4px",textShadow:"3px -5px 10px #bbff33",lineHeight:"30px"}}>I'm Sivadharshini</h2><br/>
                        <p style={{color:"white"}}>
                            I’m a passionate Front-End Developer with a love for creating interactive and visually appealing web experiences. 
                            With a strong foundation in HTML, CSS, JavaScript, I enjoy building responsive websites and applications that provide seamless user experiences.
                        </p>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;

import React from 'react'
import about from "./../assets/images/about.png"

const About = () => {
    return (
        <div id="about">
            <div className="container-fluid about">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="text-center">
                                <img src={about} width={"100%"} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="text-center">
                                <h1>
                                    Who Am I ?
                                </h1><br />
                            </div>
                            <div className="container text-light ">
                                <p className='d-flex justify-content-around'> I’m a frontend developer with a passion for creating seamless, visually appealing web experiences. With a strong background in HTML, CSS, JavaScript, and React, I specialize in building responsive and interactive web applications. My work focuses on blending functionality with aesthetics to deliver intuitive user experiences.</p>
                            </div>
                            <div className="container p-3">
                                <div className="text-center">
                                <a href="/Sivadharshini N Resume.pdf" className='resumetag' download={"Sivadharshini N Resume.pdf"}>Want to know more? Download my resume here!</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

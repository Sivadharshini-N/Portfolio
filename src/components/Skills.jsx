import React from 'react'
import ht from "./../assets/images/html-5.png"
import bslogo from "./../assets/images/bootstrap.png"
import csslogo from "./../assets/images/css-3.png"
import jslogo from "./../assets/images/java-script.png"
import reactlogo from "./../assets/images/physics.png"
import clogo from "./../assets/images/c.png"
import git from "./../assets/images/social.png"
import figma from "./../assets/images/figma.png"
import java from "./../assets/images/java.png"
import typing from "./../assets/images/typing.png"


import Skillframe from './Skillframe'

const Skills = () => {
  return (
    <div id='skills'>
      <div className="container text-center">
        <h1>SuperPowers</h1><br /><br />
        <h2>Superpowers that drive my coding journey.</h2><br />  <br /><br />
        <div className="container"><div className="text-center">

        </div>
          <div className="row  d-flex justify-content-center align-items-center">
            <div className=" col-auto p-4">
            <Skillframe src={ht} style={{width:"50%"}}></Skillframe>{" "}
            </div>
            <div className=" col-auto p-4">
            <Skillframe src={csslogo} style={{width:"50%"}}></Skillframe>
            </div>
            <div className=" col-auto p-4">
            <Skillframe src={bslogo} style={{width:"50%"}}></Skillframe>
            </div>
            <div className=" col-auto p-4">
            <Skillframe src={jslogo} style={{width:"50%"}}></Skillframe>
            </div>
            <div className=" col-auto p-4">
            <Skillframe style={{width:"50%"}} src={reactlogo}></Skillframe>
            </div>
            <div className=" col-auto p-4">
            <Skillframe style={{width:"50%"}} src={clogo}></Skillframe>
            </div>


          </div>


          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-auto p-4">
             <Skillframe src={git}  style={{width:"50%"}}></Skillframe>
            </div>
            <div className="col-auto p-4">
             <Skillframe src={figma}  style={{width:"50%"}}></Skillframe>
            </div>
            <div className="col-auto p-4">
             <Skillframe src={typing}  style={{width:"50%"}}></Skillframe>
            </div>
            <div className="col-auto p-4">
             <Skillframe src={java}  style={{width:"50%"}}></Skillframe>
            </div>
            


          </div>
        </div><br />
          <h2>More on the way..</h2>      
      </div>      
    </div>
  )
}

export default Skills

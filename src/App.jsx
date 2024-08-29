import React from "react";
import Navbar from "./components/Navbar"
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App()
{
    return (
        <div>
          <Navbar>  </Navbar><br /><br/>
          <Intro></Intro><hr /><br />
          <About></About><br /><br /><br /> 
          <hr />
          <Project></Project><br /><br /><br />
          <div className="d-flex align-items-center justify-content-center">
          <Skills></Skills>     

          </div>
          <br /><br />
          <Contact></Contact>
          <br /><br />



        </div>
       
    );
    
}

export default App;




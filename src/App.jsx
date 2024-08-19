import React from "react";
import Navbar from "./components/Navbar"
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";

function App()
{
    return (
        <div>
          <Navbar>  </Navbar>
          <Intro></Intro><br /><br />
          <About></About>
          <Project></Project>


        </div>
       
    );
    
}

export default App;




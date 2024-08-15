import React from "react";
import Nav from "./components/Nav"
import Intro from "./components/Intro";
import "./../src/App.css"
import Resume from "./components/Resume";
import Project from "./components/Project";
import me from "./assets/me.jpg";
import appleout from "./assets/appleout.jpg"
import invoiceout from "./assets/invoiceout.png"
function App()
{
    return (
        <div className="App">
        <Nav />
        <Intro /><br/>
        <Resume/>
        <div className="container-fluid justify-content-center align-items-center " style={{backgroundColor:"white"}}>
          <br /><br />
          
        <Project src={appleout} projectTitle={"Apple(India) Clone"} projectdesc={"Developed a fully responsive website of Apple (India), significantly enhancing the user experience across all devices. "} techused={"HTML5, CSS3, BOOTSTRAP"} url={"https://cozy-sunburst-6a058b.netlify.app"}/>
        <br /><br />
        <Project src={invoiceout} projectTitle={"Invoice Maker"} projectdesc={"Developed a comprehensive invoice generation tool that allows users to create, customize and download with ease."} techused={"HTML5, CSS3, BOOTSTRAP, JAVASCRIPT"} url={"https://invoicelyedge.netlify.app"}/>
        </div>

      </div>
       
    );
    
}

export default App;




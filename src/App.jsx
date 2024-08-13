import React from "react";
import Nav from "./components/Nav"
import Intro from "./components/Intro";
import me from "./assets/me.jpg"
import "./../src/App.css"
import Resume from "./components/Resume";
function App()
{
    return (
        <div className="App">
        <Nav />
        <Intro /><br/>
        <Resume/>
        
      </div>
       
    );
    
}

export default App;




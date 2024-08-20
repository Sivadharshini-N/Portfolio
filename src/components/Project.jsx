import React from 'react'
import LeftContainer from './LeftContainer'
import apple from "./../assets/images/apple.png"
import RightContainer from './RightContainer'
import bill from "./../assets/images/bill.png"
const Project = () => {
  return (
    <div id='project'><br /><br />
      <div className="container-fluid">
        <div className="text-center">
          <h1>Hall of Code{"</>"}</h1><br />
        </div>
      <LeftContainer src={apple} desc={"Developed a fully responsive website of Apple (India), significantly enhancing the user experience across all devices." } title={"Apple (India) clone website"} tech={"HTML, CSS, BOOTSTRAP"} url={"https://cozy-sunburst-6a058b.netlify.app"} git={"https://github.com/Sivadharshini-N/Apple-clone"}></LeftContainer><br /><br />
      <RightContainer src={bill} desc={"Developed a comprehensive invoice generation tool that allows users to create, customize and download with ease."} title={"Invoice Maker"}  tech={"HTML, CSS, BOOTSTRAP, JAVASCRIPT"} url={"https://invoicelyedge.netlify.app/"} git={"https://github.com/Sivadharshini-N/Invoice-maker"}></RightContainer>
      </div>
    </div>
  )
}

export default Project

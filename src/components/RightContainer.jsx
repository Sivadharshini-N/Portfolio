import React from 'react'
import demo from "./../assets/images/demo.png"


const RightContainer = ({src,desc,title,tech,url}) => {
  return (
    <div>
        <div className="container">
            <div className="row justify-content-end d-flex justify-content-center align-items-center">
                <div className="col-md-8 text-end p-3 ">
                  <h2>{title}</h2>
                  <p className='text-white'>{desc}</p>
                  <h6>{tech}</h6><br />
                    <button className='btn btn-green'><a href={url}></a>Demo</button> 
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-3 bg-green">
                <img src={src} width={"100%"} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default RightContainer

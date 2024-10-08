import React from 'react'


const LeftContainer = ({src,title,desc,tech,url,git}) => {
  return (
    <div>
        <div className="container ">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-3">
                    <div className="text-center circle-frame bg-green">
                        <img src={src} width={"100%"} className="p-4" height={"100%"}  alt="" />
                    </div>
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-8">
                    <div className="container text-light">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <h6>{tech}</h6><br />
                        <a href={url} target='_blank'><button className='btn btn-green' >Demo</button></a> {" "}{" "}
                        <a href={git} target='_blank'><button className='btn btn-green' >Code</button></a>



                    </div>

                </div>
            </div>
        </div>      
    </div>
  )
}

export default LeftContainer

import React from 'react'

const Skillframe = ({src,style}) => {
  return (
    <div className="text-center col-2 skill-frame d-flex justify-content-center align-items-center">
              <img  src={src} width={"80%"} style={style} alt="" />
    </div>
  )
}

export default Skillframe

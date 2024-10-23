import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <>
       {/* <div className="er-img img-fluid">
        <div className="d-flex justify-content-center align-items-center w-100 h-100 er-er">
          <Link className="btn btn-primary" to={"/"}>
            <button className="btn btn-primary" >
              Back To Home
            </button>{" "}
          </Link>
        
        </div>
      </div> */}
    
<div className='d-flex justify-content-center align-items-center align-content-center w-100 vh-100'>
<div className='text-center fw-bold'>
<div><img src={require("../assets/images/image.png")} alt="" className='img-fluid image404'/></div>
<Link className="text-decoration-none my-3 fs-3" to={"/"}>
            <button className="btn btn-primary fw-bold fs-3 border-0" >
              Back To Home
            </button>{" "}
          </Link>
</div>
</div>

    </>
  )
}

export default Error404
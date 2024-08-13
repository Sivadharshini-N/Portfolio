const Nav = () => {
    return (
      <div>
        <div className="container-fluid  text-light"  style={{backgroundColor:"#000"}}>
        <nav className="navbar navbar-expand-lg ">
    <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbart">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbart">
            <ul className="navbar-nav nav-fill w-100 p-1 d-flex justify-content-center align-items-center text-light" style={{color:"#bbff33"}}>
            <li className="navbar-brand" style={{fontWeight:900}}>
                    <a className="navbar-brand" style={{fontSize:"40px",fontWeight:900,color:"#bbff33"}} href="#">Siv..</a>
                </li>
                <li className="nav-item t">
                    <a className="nav-link text-light" style={{fontWeight:700}} href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" style={{fontWeight:700}} href="#">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" style={{fontWeight:700}} href="#">Profiles</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

        </div>
      </div>
    );
  };



  export default Nav;
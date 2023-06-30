import React from 'react'
// import Contact from './contact';
import { Link } from "react-router-dom";

function Nav(props){
 
  return(
    <>
   <nav className="navbar navbar-expand-lg bg-">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">BRAND NAME</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/About">About</Link>
        </li>
      </ul>
      <div className='button_btn'>
      <button className="btn btn-success" onClick={props.colorRight}>Success</button>
<button type="button" class="btn btn-danger" onClick={props.toggle}>Danger</button>
<button type="button" class="btn btn-warning" onClick={props.Prett}>Warning</button>
      </div>
    </div>
  </div>
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.ToggleChange} />
  <label class="form-check-label" for="flexSwitchCheckChecked"></label>
  {/* <div className='container-fluid' style={{color:props.mode==='dark'?'white':"black"}}></div> */}
</div>
</nav>

    </>
  )  
}
export default Nav;
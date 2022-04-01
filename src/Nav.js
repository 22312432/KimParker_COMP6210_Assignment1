import { Link } from "react-router-dom";
import React from "react";

function Nav() {
  return (

    

    <div className='container'style={{width:"82%"}}>
    <nav className="nav bg-dark" >
      
      <ul className="navbar navbar-dark nav bg-dark">
      <div className="container-card"></div>
      <img src="/images/SCP-Logo.png" alt="" style={{marginLeft: "20px"}} width="240" height="80"/>
      <Link to="/Home" className="nav-item">
          <li className="nav-link text-white" style={{color: "GrayText", textAlign: "center", fontSize: "28px", fontFamily: "monospace", paddingTop: "15px"}}><h5 >Home</h5></li>
        </Link>
        <Link to="/SCPs" className="nav-item">
          <li className="nav-link text-white" style={{color: "GrayText", textAlign: "center", fontSize: "28px", fontFamily: "monospace", paddingTop: "15px"}}><strong><h5>SCP</h5></strong></li>
        </Link>
      </ul>
      <div class="container card">
    <h5 class="card-centre" style={{color: "GrayText", textAlign: "center", fontSize: "28px", fontFamily: "-moz-initial", paddingTop: "5px"}} >SECURE. CONTAIN. PROTECT.</h5>
    <p class="card-text"></p>
  </div>
    </nav>
    </div>
    
  );
}

export default Nav;
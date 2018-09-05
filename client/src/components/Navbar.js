import React from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import {
    Link
} from 'react-router-dom';
const Navbar =(props)=>{

    return(

    <nav className="navbar navbar-default navbar-doublerow navbar-trans navbar-fixed-top">
    <nav className="navbar navbar-down" style={{backgroundColor: 'white'}}>
      <div className="container">
        <div className="flex-container">
          <div className="navbar-header flex-item">
          <Link to ="/">
              <div className="navbar-brand-logo">
                <img src="img/hommore-logo3.svg" alt="hommore logo"/>
              </div>
          </Link>
          </div>
          <ul className="nav navbar-nav links flex-item hidden-xs">
            <li>
              <Link to="/Resources" style={{paddingLeft: '0px', marginRight: '15px'}}>Resources</Link>
            </li>
            <li>
              <Link to="/Report" style={{paddingLeft: '0px', marginRight: '15px'}}>Report</Link>
            </li>
            <li>
              <Link to="/Donate" style={{ paddingLeft: '0px', marginRight: '15px' }}>Donate</Link>
            </li>
            <li>
              <Link to="/About" style={{ paddingLeft: '0px', marginRight: '15px' }}>About</Link>
            </li>
            <li>
              <Link to="/Contact" style={{ paddingLeft: '0px', marginRight: '15px' }}>Contact</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-item hidden-xs pull-right">
            {(isLoggedIn()) ?
                    (<span>
                      <li className="login-button" style={{ float: 'left' }}><Link to="/Profile" >View Profile</Link></li>
                      <li className="signup-button" style={{ float: 'left' }} onClick={() => logout()}>Signout</li>
                    </span>)
                    : (<span><li className="login-button" style={{ float: 'left' }} onClick={() => login()}>Login</li>
                      <li className="signup-button" style={{ float: 'left' }} onClick={() => login()}>Signup</li>
                    </span>)
            }
          </ul>

          {/* <!-- dropdown only moblie --> */}
          <div className="dropdown visible-xs pull-right">
            <button className="btn btn-default dropdown-toggle " type="button" id="dropdownmenu" data-toggle="dropdown">
              <span className="glyphicon glyphicon-align-justify"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to ="/Resources">Resources</Link>
              </li>
              <li>
                <Link to ="/Report">Report</Link>
              </li>
              <li>
                <Link to ="/Donate">Donate</Link>
              </li>
              <li>
                <Link to ="/About">About</Link>
              </li>
              <li>
                <Link to ="/Contact">Contact</Link>
              </li>
              <li role="separator" className="divider"></li>
              <li>
                <Link to="/Profile" >View Profile</Link>
              </li>
              <li>
                {/* <a href="signup.html" className="">Signup</a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </nav>

 
    )
}
export default Navbar;


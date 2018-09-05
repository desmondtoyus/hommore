import React from 'react';
import {Link} from 'react-router-dom';
const Subscribe = () => {

    return (
        <div>
    {/* <!-- SUBSCRIBE AREA --> */}
    <div style= {{width: '100%',  backgroundColor: '#2F313D', position: 'absolute'}} >
      <div className="container subscribe-container" style={{marginTop: '40px', height: '350px', position: 'relative', zIndex: '2'}}>
        <div className="row">
          <div className="col-sm-12">
            <div className="cta-desc">

              <h1 className="subscribe-card-title">Subscribe for new updates</h1>
              <div className="subscribe-line"></div>
              <div className="subscribe-card-subtitle">So strongly and metaphys.</div>

            </div>

            <br/>
            <br/>

            <div className="single">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="mail@company.com"/>
                <div className="input-group-btn">
                  <button className="btn" type="submit">Subscribe</button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>


      {/* <!-- FOOTER --> */}
      <footer style={{height:'100%', width: '100%', backgroundColor: '#2F313D'}}>
          <div className="container">
            <div className="row">
  
              <div className="col-md-3 col-sm-6 col-xs-12">
                <span className="logo">
                  <img src="img/hommore-wordmark.svg" alt="hommore wordmark"/>
                </span>
              </div>
  
              <div className="col-md-3 col-sm-6 col-xs-12">
                <ul className="menu-address">
                  <Link to="mailto:info@hommore.com">
                  <span>info@hommore.com</span>
                  </Link>
                  <li>
                    <span className="menu-address">878 Schoen Road</span>
                  </li>
  
                  <li>
                    <span className="menu-address">United States</span>
                  </li>
  
                  <li>
                    <span className="menu-address">866 hommore</span>
                  </li>
                </ul>
              </div>
  
              <div className="col-md-3 col-sm-6 col-xs-12">
                <ul className="menu">
                  <span className="menu-h1">Menu</span>
                  <div className="menu-line"></div>
                  <li>
                    <Link to ="/"  className="menu" >Home</Link>
                  </li>
  
                  <li>
                    <Link to ="/Resources"  className="menu" >Resources</Link>
                  </li>
  
                  <li>
                    <Link to ="/Report"  className="menu" >Report</Link>
                  </li>
  
                  <li>
                    <Link to ="/Donate" className="menu" >Donate</Link>
                  </li>
                </ul>
              </div>
  
              <div className="col-md-3 col-sm-6 col-xs-12">
                <ul className="menu">
                  <span className="menu-h1">Support</span>
                  <div className="menu-line"></div>
                  <li>
                    <Link to ="/About" className="menu" >About</Link>
                  </li>
  
                  <li>
                    <Link to ="/Contact" className="menu" >Contact</Link>
                  </li>
  
                  <li>
                     <Link to ="/" className="menu" >Terms & Conditions</Link>
                  </li>
  
                </ul>
              </div>
  
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <div style={{height: '50px', width: '100%', borderTop: '1px solid #414354', backgroundColor: '#2F313D'}}>
            <p className="copyright">Copyright © 2017 </p>
            <span style={{float: 'left', paddingTop: '10px'}}>
              <img src="img/heart-icon.svg" alt="heart icon" />
            </span>
            <span className="copyright">hommore <span style={{color: 'transparent'}}> | </span> <span> | </span> <span style={{color: 'transparent'}}> | </span> hommore.com</span>
            <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </span>
            <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </span>
            <span style={{float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493'}}>
              <i className="fa fa-google-plus" aria-hidden="true"></i>
            </span>
            <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </span>
            <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </span>
          </div>
        </footer>
      </div>
      <div style={{height: '275px', width: '100%', backgroundColor: '#F7F6F0', position: 'relative'}}>
      </div>
                                </div>
                     
                            )
}

export default Subscribe;
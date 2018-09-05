import React from 'react';
import {Link} from 'react-router-dom';
const Contact = (props)=>{

    return(

<div>

{/* <!-- CONTAINER AREA --> */}

    <div className="resources-area">
      <div className="container">

        {/* <!-- ROW --> */}
        <div className="row">


          {/* <!-- ABOUT US CARD --> */}
          <div className="col-md-12 higlights" style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="highlights-card">
              <br/>
              <br/>
              <span className="about-title">Contact Us</span>
              <span className="about-subhead">Get in touch with any questions.</span>
              <span className="user-location-country">878 Schoen Road  <span style={{color: 'transparent'}}> 10 </span> <span style={{color: 'transparent'}}> 10 </span> <span> | </span> <span style={{color: 'transparent'}}> 10 </span> <span style={{color: 'transparent'}}> 10 </span> United States <span style={{color: 'transparent'}}> 10 </span> <span style={{color: 'transparent'}}> 10 </span> <span> | </span> <span style={{color: 'transparent'}}> 10 </span> <span style={{color: 'transparent'}}> 10 </span> 866 hommore</span>

              <div className="highlights-card-content" style={{paddingTop:'25px'}}>

                <div className="col-md-8" style={{display: 'inline'}}>
                  <br/>
                  <br/>
                  <p>Questions? Concerns? Suggestions? We want to hear them! Fill out the form below and we will do our best to answer as quickly and thoroughly as possible. </p>
                  <br/>
                  <br/>



                  {/* <!-- Report Field 2 --> */}
                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <input type="email" className="form-control" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Your Phone Number"/>
                    </div>
                    <br/>

                  </div>

                  {/* <!-- Report Field 2 --> */}
                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <input type="email" className="form-control" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Your Email Address"/>
                    </div>
                    <br/>

                  </div>

                  {/* <!-- Report Comment Area --> */}
                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <textarea className="form-control" rows="8" id="desciption" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Please write a comment here"></textarea>

                    </div>
                    <br/>
                    <br/>

                  </div>

                  {/* <!-- Submit Report Button --> */}
                  <div className="report-input-fields">
                    <div className="input-group">
                      <a href="submit-report.html">
                        <div className="input-group-btn" style={{textAlign: 'left'}}>
                          <button className="btn btn-submit" type="submit" style={{marginLeft: '3px'}}>Submit</button>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
              </div>

              <br/>
              <br/>

            </div>
          </div>
        </div>

      </div>
    </div>


</div>
    )
}

export default Contact;


    
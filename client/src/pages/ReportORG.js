import React from 'react';
import {Link} from 'react-router-dom';


const Report = (props)=>{

    return(

    // <!-- CONTAINER -->
    <div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">

          <div className="col-md-9">

            {/* <!-- PAGE TITLE & ARROW --> */}
            <Link to="/Resources" >
              <div className="button__holder" href="resources.html" style={{ marginRight: '20px' }} >
                <button className="arrow-left">
                  <img src="img/arrow_left.svg"/>
                </button>
              </div>
              </Link>
            <h2 className="resources-title">Report an event or alert an unsafe location.</h2>

          </div>

        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">

          <div className="col-md-9">
            <br/>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. </p>
            <br/>
            <br/>

            {/* <!-- Report Field 1 --> */}
            <div className="report-input-fields">
              <div className="input-group" style={{ maxWidth: '650px', width: '100%' }}>
                <input type="email" className="form-control" style={{ borderRadius: '30px', maxWidth: '650px', width: '100%' }} placeholder="Enter Location or Approximate Address"/>
              </div>
              <br/>

            </div>

            {/* <!-- Report Category Selection --> */}
            <form>
              <div className="">
                <div className="form-group" style={{marginBottom: '0px'}}>
                  <select className="form-control" style={{maxWidth: '650px', minHeight: '50px', fontSize: '15px', border: '1px solid #FF6B6B', paddingLeft: '30px', paddingRight: '30px', borderRadius: '30px', height: '50px', color: '#949494'}}>
                    <option>Click to Select a Category</option>
                    <option>All Categories</option>
                    <option>Addiction Recovery</option>
                    <option>Domestic Violence</option>
                    <option>Food Resources</option>
                    <option>Medical Care</option>
                    <option>Ministries & Churches</option>
                    <option>Resources</option>
                    <option>Shelter</option>
                    <option>Services</option>
                  </select>
                  <br/>

                </div>
              </div>
            </form>

            {/* <!-- Report Field 2 --> */}
            <div className="report-input-fields">
              <div className="input-group" style={{maxWidth: '650px', width: '100%'}}>
                <input type="email" className="form-control" style={{borderRadius: '30px', maxWidth: '650px', width: '100%'}} placeholder="Your Phone Number"/>
              </div>
              <br/>

            </div>

            {/* <!-- Report Field 3 --> */}
            <div className="report-input-fields">
              <div className="input-group" style={{maxWidth: '650px', width: '100%'}}>
                <input type="email" className="form-control" style={{borderRadius: '30px', maxWidth: '650px', width: '100%'}} placeholder="Your Email Address"/>
              </div>
              <br/>

            </div>

            {/* <!-- Report Comment Area --> */}
            <div className="report-input-fields">
              <div className="input-group" style={{maxWidth: '650px', width: '100%'}}>
                <textarea className="form-control" rows="8" id="desciption" style={{borderRadius: '30px', maxWidth: '650px', width: '100%'}} placeholder="Please write a detailed description of the event or the area and what you have seen"></textarea>
               
              </div>
              <br/>
              <br/>

            </div>

            {/* <!-- Submit Report Button --> */}
            <div className="report-input-fields">
              <div className="input-group">
                <Link to="submit-report.html">
                  <div className="input-group-btn" style={{textAlign: 'left'}}>
                    <button className="btn btn-submit" type="submit" style={{marginLeft: '3px'}}>Submit</button>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
    )
}

export default Report;


    
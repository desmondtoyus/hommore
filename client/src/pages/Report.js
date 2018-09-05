import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import API from "../utils/API";

class Report extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    reportSaved2: [],
    location:'',
    category:'',
    phone:'',
    email:'',
    description:''
}
  }
  componentDidMount(){
    console.log("1 ", this.state.reportSaved2.length );
  }
 

postReport = (data) => {
let self = this;
  API.saveReport(data)
    .then(res =>{
      this.setState({reportSaved2:res.data})
  console.log("Saved", res)
  console.log("3 ", this.state.reportSaved2);
  console.log("3 lenght ", this.state.reportSaved2.length);
    
    }
    )
    .catch(err => console.log(err));
};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log('done');
  };


  handleSubmit =(event)=>{
event.preventDefault();
if (!this.state.location || !this.state.category || !this.state.description)
{
  return;
}


let location = this.state.location;
let category = this.state.category;
let phone = this.state.phone;
let email = this.state.email;
let description = this.state.description;

let data ={
  location:location,
  category:category,
  phone:phone,
  email:email,
  description:description
}
this.setState({reportSaved2:data})
console.log(data);


console.log('2', this.state.reportSaved2.length );

}
  
  //post report to db
//   postReport= () => {
//     API.saveReport()
//       .then(res =>
//         this.setState({ articleSaved: res.data })
//       )
//       .catch(err => console.log(err));
//   };
//   let data ={ }
//   saveReport =(data) =>{
// API.saveReport(data).then(res=>console.log(res)).catch(err=>console.log(err));

//   }
   // Deletes a report from the database with a given id, then reloads reports from the db
  // deleteReport = id => {
  // API.deleteReport(id)
  //   .then(res => this.loadReport())
  //   .catch(err => console.log(err));
  // };
      // constructor() {
      //     super()
      // }
      render() {

    return(

    // <!-- CONTAINER -->
    <div>
      {!this.state.reportSaved2.category ?
    (<div className="container">
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
            <p>Think of this page as a neighborhood watch, but online. If you see have something to report, whether it be an unsafe sleeping location, or you’ve found a clean bathroom you want to share, please describe the scene and location. </p>
            <br/>
            <br/>

            {/* <!-- Report Field 1 --> */}
            <div className="report-input-fields">
              <div className="input-group" style={{ maxWidth: '650px', width: '100%' }}>
                <input type="text" name="location" className="form-control" style={{ borderRadius: '30px', maxWidth: '650px', width: '100%' }} placeholder="Enter Location or Approximate Address"
                onChange={this.handleInputChange}/>
              </div>
              <br/>

            </div>

            {/* <!-- Report Category Selection --> */}
            <form>
              <div className="">
                <div className="form-group" style={{marginBottom: '0px'}}>
                  <select name="category" className="form-control" style={{maxWidth: '650px', minHeight: '50px', fontSize: '15px', border: '1px solid #FF6B6B', paddingLeft: '30px', paddingRight: '30px', borderRadius: '30px', height: '50px', color: '#949494'}} onChange={this.handleInputChange}>
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
                <input type="text" name="phone" className="form-control" style={{borderRadius: '30px', maxWidth: '650px', width: '100%'}} placeholder="Your Phone Number"  onChange={this.handleInputChange}/>
              </div>
              <br/>

            </div>

            {/* <!-- Report Field 3 --> */}
            <div className="report-input-fields">
              <div className="input-group" style={{maxWidth: '650px', width: '100%'}}>
                <input type="email" name="email" className="form-control" style={{borderRadius: '30px', maxWidth: '650px', width: '100%'}} placeholder="Your Email Address"  onChange={this.handleInputChange}/>
              </div>
              <br/>

            </div>

            {/* <!-- Report Comment Area --> */}
            <div className="report-input-fields">
              <div className="input-group" style={{maxWidth: '650px', width: '100%'}}>
                <textarea name="description" className="form-control" rows="8" id="desciption" style={{borderRadius: '30px', maxWidth: '650px', width: '100%'}} placeholder="Please write a detailed description of the event or the area and what you have seen"  onChange={this.handleInputChange}></textarea>
               
              </div>
              <br/>
              <br/>

            </div>

            {/* <!-- Submit Report Button --> */}
            <div className="report-input-fields">
              <div className="input-group">
                
                  <div className="input-group-btn" style={{textAlign: 'left'}}>
                    <button className="btn btn-submit" type="submit" style={{marginLeft: '3px'}}  onClick={this.handleSubmit}>Submit</button>
                  </div>
                
              </div>
            </div>
            <br/>
            <br/>
            <br/>
          </div>
        </div>

      </div>

    </div>)
    :(
      <div>
      <div> 
      
      {/* <!-- CONTAINER --> */}
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="col-md-9">

            {/* <!-- PAGE TITLE & ARROW --> */}
            <Link to="/Report">
              <div className="button__holder" style={{marginRight: '20px'}}>
                <button className="arrow-left">
                  <img src="img/arrow_left.svg"/>
                </button>
              </div>
            </Link>
            <h2 className="resources-title">Thank you for submitting a report.</h2>

          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">

          <div className="col-md-9">
            <br/>
            <br/>
            <h3>GPS location of event or alert:</h3>
            <br/>
            <h5>Longitude: -117.6.09304</h5>
            <h5>Latitude: 33.625444</h5>
            <h5>Date: {this.state.date}</h5>
            <h5>Time: 4:05 PM</h5>
            <br/>
            <br/>
            <p>Your report has been added to the
              <span style={{color: '#FF6B6B'}}> {this.state.category}</span> category. </p>
            <br/>
            <br/>

            {/* <!-- Submit Report Button --> */}
            <div className="report-input-fields">
              <div className="input-group">
                <Link to="/Resources">
                  <div className="input-group-btn" style={{textAlign: 'left'}}>
                    <button className="btn btn-submit" type="submit" style={{marginLeft: '3px'}}>View on Map</button>
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
      </div> )}
</div>
    )
}
}

export default Report;


    
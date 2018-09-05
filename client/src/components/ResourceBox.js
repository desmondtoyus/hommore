import React from 'react';
import {Link} from 'react-router-dom';
import MapComponent from './Map';
import Welcome from '../components/Welcome';
import Modal from './Modal';


class  ResourceBox extends React.Component{
  
    constructor(props){
      super(props)

      this.state={
      search:false
      }
    }

  getSearch = (val) => {
   this.setState({search:true});
    localStorage.search=val;
    console.log(localStorage.search);
  }
  handleReset = ()=>{
    this.setState({ search: false });
    localStorage.search = 'Homeless';

  }
  // componentDidMount(){
  //   console.log(' Herwe ',this.state.search);
  // }
   
  render() {
  
return(

  
  
  (this.state.search) ? 
    (// <!--Map Card -- >
      <div className="row">

        {/* <!-- MAP CONTAINER --> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              <div className="col-md-9">

                {/* <!-- PAGE TITLE & ARROW --> */}
                <div
                onClick={this.handleReset}>
                  <div className="bu=tton__holder" style={{ marginRight: '20px' }}>
                    <button className="arrow-left">
                      <img src="img/arrow_left.svg" />
                    </button>
                  </div>
                </div>
                <h2 className="resources-title">All Categories</h2>

              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="col-md-9">

                {/* <!-- MAP vs. LIST --> */}
                <div className="onoffswitch3">
                  <input type="checkbox" name="onoffswitch3" className="onoffswitch3-checkbox" id="myonoffswitch3" checked />
                  <label className="onoffswitch3-label" for="myonoffswitch3">
                    <span className="onoffswitch3-inner">
                      <span className="onoffswitch3-map">
                        <span className="onoffswitch3-switch">Map</span>
                      </span>
                      <span className="onoffswitch3-list">
                        <span className="onoffswitch3-switch">List</span>
                      </span>
                    </span>
                  </label>
                </div>
                <div>
                  <p>Hover over a drop pin for more information.</p>
                  <br />
                  <br />
                </div>

              </div>
            </div>

          </div>

        </div>


        {/* <!-- DROP PIN MODAL AREA --> */}

        <div className="resources-area">
          <div className="container">

            {/* <!-- ROW ONE --> */}
            <div className="row">


              {/* <!-- Map Card  --> */}
              <div className="col-md-12" style={{ height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2' }}>
                <MapComponent {...this.state}>

                
                  

</MapComponent>
               
              </div>


            </div>


          </div>
        </div>
      </div>) :
          (<div>
      
        <div className="row">
        <Welcome/>
        <MapComponent {...this.state} />

          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
            <div className="resources-card">

              <Link to="/Map">

                <div className="highlights-card-content">
                  <img src="img/search-icon.svg" alt="source" />
                </div>
              </Link>

              <span className="highlights-card-title">All Categories</span>
              <div className="line"></div>

              <p className="highlights-copy">
              A master list of all known resources in Los Angeles County, from food aid to job resources.
              </p>
            </div>
          </div>
          {/* <!-- Highlights Card 1 --> */}
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
            <div className="resources-card">

              <div
                onClick={() => this.getSearch('Addiction Recovery')}>

                <div className="highlights-card-content">
                  <img src="img/addiction-recovery-icon.svg" alt="source" />
                </div>
              </div>

              <span className="highlights-card-title">Addiction Recovery</span>
              <div className="line"></div>

              <p className="highlights-copy">
              Resources for those fighting through substance abuse recovery.
              </p>
            </div>
          </div>


          {/* <!-- Highlights Card 2 --> */}
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
            <div className="resources-card">



              <div className="highlights-card-content"
                onClick={() => this.getSearch('Domestic Violence')}>
                <img src="img/domestic-violence-icon.svg" alt="domestic violence" />
              </div>


              <span className="highlights-card-title">Domestic Violence</span>
              <div className="line"></div>

              <p className="highlights-copy">
              Resources for victims of domestic abuse in your area.
              </p>
            </div>
          </div>

          {/* <!-- Highlights Card 3 --> */}
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
            <div className="resources-card">



              <div className="highlights-card-content"
                onClick={() => this.getSearch('Food Resources')}>
                <img src="img/food-resources-icon.svg" alt="food resources" />
              </div>


              <span className="highlights-card-title">Food Resources</span>
              <div className="line"></div>

              <p className="highlights-copy">
              A directory of food banks and pantries throughout Los Angeles County.
              </p>
            </div>
          </div>


        </div>

        {/* <!-- ROW THREE --> */ }
    <div className="row">

      {/* <!-- Highlights Card 1 --> */}
      <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
        <div className="resources-card"
          onClick={() => this.getSearch('Medical Care')}>



          <div className="highlights-card-content">
            <img src="img/medical-care-icon.svg" alt="medical care" />
          </div>


          <span className="highlights-card-title">Medical Care</span>
          <div className="line"></div>

          <p className="highlights-copy">
          A master list of free and low-cost medical facilities near you
              </p>
        </div>
      </div>


      {/* <!-- Highlights Card 2 --> */}
      <div className="col-md-4 " style={{ height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2' }}>
        <div className="resources-card"
          onClick={() => this.getSearch('Ministries and Churches')}>



          <div className="highlights-card-content">
            <img src="img/ministries-churches-icon.svg" alt="ministries churches icon" />
          </div>


          <span className="highlights-card-title">Ministries & Churches</span>
          <div className="line"></div>

          <p className="highlights-copy">
          Religion and spiritual guidance and healing wherever you may be.
              </p>
        </div>
      </div>

      {/* <!-- Highlights Card 3 --> */}
      <div className="col-md-4 " style={{ height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2' }}>
        <div className="resources-card"
          onClick={() => this.getSearch('Resources')}>



          <div className="highlights-card-content">
            <img src="img/transportation-icon.svg" alt="transportation" />
          </div>


          <span className="highlights-card-title">Transportation</span>
          <div className="line"></div>

          <p className="highlights-copy">
          A scheduled list of public transportation located near you.
              </p>
        </div>
      </div>
    </div>


    {/* <!-- ROW FOUR --> */ }
    <div className="row">

      {/* <!-- Highlights Card 1 --> */}
      <div className="col-md-4 " style={{ height: '100%', paddingleft: '25px', position: 'relative', zindex: '2' }}>
        <div className="resources-card"
          onClick={() => this.getSearch('Shelter')}>



          <div className="highlights-card-content">
            <img src="img/shelter-icon.svg" alt="shelter" />
          </div>


          <span className="highlights-card-title">Shelter</span>
          <div className="line"></div>

          <p className="highlights-copy">
          A master list of shelters located near you to help you.
              </p>
        </div>
      </div>


      {/* <!-- Highlights Card 2 --> */}
      <div className="col-md-4 " style={{ height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2' }}>
        <div className="resources-card"
          onClick={() => this.getSearch('Services')}>



          <div className="highlights-card-content">
            <img src="img/services-icon.svg" alt="services" />
          </div>


          <span className="highlights-card-title">Services</span>
          <div className="line"></div>

          <p className="highlights-copy">
          A master list of free or low-cost educational resources and locations.
              </p>
        </div>
      </div>

      {/* <!-- Highlights Card 3 --> */}
      <div className="col-md-4 " style={{ height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2' }}>
        <div className="resources-card-submit">


          <Link to="/Report">

            <div className="highlights-card-content">
              <img src="img/submit-resource-icon.svg" alt="submit resource" />
            </div>
          </Link>

          <span className="highlights-card-title">Submit a New Resource</span>
          <div className="line"></div>

          <p className="highlights-copy">
          See something unusual, unsafe or helpful? Let us know here!
              </p>
        </div>
      </div>


    </div>
    </div >))
  
  }



  
}
export default ResourceBox;


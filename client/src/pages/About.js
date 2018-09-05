import React from 'react';
import {Link} from 'react-router-dom';
const About = (props)=>{

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
              <span className="about-title">About Us</span>
              <span className="about-subhead">An overview of our organization.</span>
              <span className="user-location-country">United States</span>

              <div className="highlights-card-content" style={{paddingTop:'25px'}}>
                <div className="col-md-8" style={{paddingRight: '0px', marginBottom: '20px', position: 'relative', zIndex: '2'}}>
                  <div className="" style={{display:'inline'}}>
                    <img className="profile-icon" style={{width:'300px'}} src="img/about-hommore-icon.png" alt = "source" />
                  </div>
                  <br/>
                  <h2 style={{fontWeight:'200', fontSize: '28px', fontFamily: 'Mandali, sans-serif', lineHeight: '35px', textAlign: 'center'}}>More than a nonprofit serving the homeless,
                    <span style={{color: '#FF6B6B'}}> hommore</span> is a movement.</h2>
                  <hr/>
                  <br/>
                  <br/>

                  <p className="overview-copy" style={{textAlign: 'center'}}>
                  Hommore is the first mobile-optimized website in Los Angeles that connects homeless and low-income residents with critical and life-saving resources nearby. Focusing on basic services such as food, shelter, medical care, and technology access, Hommore utilizes cutting-edge technology to stream the most updated information to the people who need it most. Hommore was designed with three user groups in mind: 
                    <br/> 1) A growing population of low-income Angelenos who rely on mobile technology to meet their basic needs, 2) Service providers who can use real-time data to direct clients in need, and 3) Everyday people who can use this information as a way to help refer Los Angeles’ homeless population to a social service agency nearby.
                  </p>
                </div>
              </div>

              <br/>
              <br/>

              <p className="highlights-copy">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
              <br/>
              <br/>
            </div>
            <br/>
            <br/>
          </div>
        </div>

      </div>
    </div>

</div>
    )
}

export default About;


    
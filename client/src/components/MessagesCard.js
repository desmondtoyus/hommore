import React from 'react';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'
import PlacesAutocomplete from 'react-places-autocomplete'
import { Link } from 'react-router-dom';
import API from "../utils/API";

const MessagesCard = (props)=>{

        return (

        <div>
            {/* <!-- FIND HELPER CARD --> */}
          <div className="col-md-8 higlights" style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="highlights-card">
              <div>
                <span className="dashboard-titles">Messages</span>
                <Link to="#">
                  <img id="toggle" src="img/toggle-on.svg" alt="toggle" />
                  <span className="span-right">Visibility to other users is on.</span>
                </Link>
                <br/>
                <br/>
                <br/>
                <br/>
                <hr/>
              </div>
              <br/>

              <Link to="">
                <div className="helper-image">
                  <img className="helper-icon" src="img/profile-icon.svg" alt="helper" />
                </div>
              </Link>
              <h3 style={{marginLeft: '30px'}}>Helen Smith</h3>
              <h4 style={{marginLeft: '30px'}}>Hollywood, CA</h4>

              <br/>
              <br/>
              <p style={{marginLeft: '30px', marginRight: '30px'}}>Hello John, I noticed you are in need of some clothes and first aid items. Where are you located? I can hove
                someone deliver a care box to you.</p>
              <br/>
              <hr style={{clear: 'both'}}/>
              <br/>
              <Link to="">
                <img className="message-icon" src="img/message-icon.svg" alt="helper-message-icon" />
              </Link>
              <p>Comment</p>
              <br/>
              <Link to="">
                <div className="undeserved-image">
                  <img className="undeserved-icon" src="img/profile-icon.svg" alt="homeless" />
                </div>
              </Link>
              <br/>
              <Link to="">
                <div className="undeserved-image-post" style={{float: 'left'}}>
                  <img className="undeserved-icon-post" src="img/profile-icon.svg" alt="homeless-message-icon" />
                </div>
              </Link>

              <div className="post-comment-input" style={{marginLeft: '30px', marginRight: '30px', maxWidth: '100%'}}>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Write a Comment"/>
                  <div className="input-group-btn">
                    <a className="btn btn-search" type="submit" style={{paddingTop: '15px', textTransform: 'none'}} href="#">Post a Comment</a>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
              <hr style={{clear: 'both'}}/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

            </div>
          </div>

        </div>

        )

    }
export default MessagesCard;

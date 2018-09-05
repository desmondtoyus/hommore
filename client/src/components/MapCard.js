import React from "react";
import {Link} from "react-router-dom";
const MapCard =(props)=>{
    return(
                            // <!--Map Card -- >
        <div className="row">

                {/* <!-- Resource --> */}
                <div className="col-md-4 hidden-card" style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2', top: '350px', left:'150px'}}>
                  <div className="resources-card">

                    <Link to ="">

                      <div className="highlights-card-content">
                        <img src="img/drop-pin-icon.svg"/>
                      </div>
                    </Link>

                    <span className="highlights-card-title" style={{textTransform: 'none'}}>St John’s Episcopal Church</span>
                    <p style={{textAlign: 'center'}}>Ministries & Churches</p>
                    <div className="walking-icon">
                      <img src="img/walking-icon.svg"/>
                    </div>
                    <p style={{textAlign: 'center', color: '#FF6B6B'}}>1 min</p>
                    <br/>
                    <p className="highlights-copy">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
                    </p>
                  </div>
                </div>
        </div>
    )
}

export default MapCard;
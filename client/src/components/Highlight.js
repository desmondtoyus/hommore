
import React from 'react';
import {Link} from 'react-router-dom';
const Highlight = () => {

    return (
        <header style={{ width: '100%', margin: '0px' }}>
<div className="highlights-area">
    <div className="container">
        <div className="row">

            {/* <!-- Highlights Card 1 --> */}
            <div className="col-md-4 higlights" style={{height: '420px', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
                <div className="home-highlights-card">
                <Link to="/Resources">
                    <div className="highlights-card-content">
                                    <img src="img/resources-icon.svg" alt="resources icon"/>
                    </div>
                </Link>
                        <span className="highlights-card-title">Resources</span>
                        <div className="line"></div>
                        <p className="highlights-copy">
                        A master list of all known resources in Los Angeles County.
                        </p>
                 </div>
            </div>


                {/* <!-- Highlights Card 2 --> */}
                <div className="col-md-4 higlights" style={{height: '420px', paddingLeft: '25px', paddingRight: '15px', position: 'relative', zIndex: '2'}}>
                    <div className="home-highlights-card">
                    <Link to="/Report">
                        <div className="highlights-card-content">
                                    <img src="img/report-icon.svg" alt="report icon"/>
                        </div>
                    </Link>
                            <span className="highlights-card-title">Report</span>
                            <div className="line"></div>

                            <p className="highlights-copy">
                            See something unusual, unsafe or helpful? Let us know here!
                            </p>
                    </div>
                </div>

                {/* <!-- Highlights Card 3 --> */}
                <div className="col-md-4 higlights" style={{height: '420px', paddingLeft: '25px', paddingRight: '15px', position: 'relative', zIndex: '2'}}>
                        <div className="home-highlights-card">
                        <Link to="/Donate">
                            <div className="highlights-card-content">
                                    <img src="img/donate-icon.svg" alt="donate icon" />
                            </div>
                        </Link>
                                <span className="highlights-card-title">Donate</span>
                                <div className="line"></div>
                                <p className="highlights-copy">
                                Feeling generous? Consider helping out a neighbor in need.
                                </p>
                        </div>
                </div>

                    </div>
                </div>
            </div>
                                    </header>
        )
}

export default Highlight ;
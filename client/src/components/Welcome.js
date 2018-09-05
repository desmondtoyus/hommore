import React from "react";
const Welcome = () => {
    return (
<div className="container">
    <div className="row">
        <div className="col-sm-12">

            <div className="col-md-9">

                {/* <!-- HEADLINE --> */}
                        <h2 className="cta-title">Hello John,</h2>
               {/* SUB_HEADELINE  */}
                        <div className="cta-desc">
                    <h1 className="h1-headline">Search resources available in your local area.</h1>

                    <br/>
                        <br/>
                            <br/>
                                <div className="single-city-input">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Enter City, ST"/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-search" type="submit">Search</button>
                                            </div>
                                </div>

                                    </div>
                                    <br/>
                                        <br/>
                                            <br/>
                                                <br/>

                        </div>
                    </div>

                </div>
            </div>
                                </div>
    )

}
export default Welcome;
import React from 'react';

const Headline = (props) => {

    return (
        <header style={{ width: '100%', margin: '0px' }}>
        <div className="container" >
            <div className="row">
                <div className="col-sm-12">

                    <div className="col-md-9">

                      
            <h2 className="cta-title">Hello there,</h2>

                       
            <div className="cta-desc">
                            <h1>Hommore is your Community. Online.</h1>

                            <br/>
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

        <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="col-md-9">
                                                            <button className="download-button" style={{position: 'relative', zIndex: '3'}}>
                                                                <i className="fa fa-apple" style={{paddingRight: '10px'}}></i>DOWNLOAD</button>

                                                            <br/>
                                                                <br/>
                                                                    <br/>
                                                                        <br/>
                                                                            <br/>
                                                                                <br/>
                                                                                    <br/>
                                                                                        <br/>


            </div>

            <div className="col-md-6" style={{ paddingLeft: '25px', paddingRight: '15px', position: 'relative', zIndex: '2'}}>
                                                                                            <div className="card">

                                                                                                <br/>
                                                                                                    <br/>
                                                                                                        <br/>
                                                                                                            <br/>

                                                                                                                <span className="card-title">Overview</span>
                                                                                                                <div className="card-content">
                                                                                                                    <h2 style={{fontWeight:'200', fontSize: '28px', fontFamily: 'Mandali', lineHeight: '35px'}}>More than a nonprofit serving the homeless,
                    <span style={{color:'#FF6B6B'}}> hommore</span> is a movement.</h2>
                    <br/>
                                                                                                                    <div style={{width:'35px', height: '3px', backgroundColor: '#FF6B6B', margin: '0px'}}></div>
                                                                                                                </div>
              </div>
            </div>

                                 

            <div className="col-sm-12" style={{position: 'absolute', zIndex: '1'}}>
                                <img src="img/iPhone-X-hommore-mockup.png" alt="iPhone Xnhommore mockup" style={{ width: '75%', display: 'block', marginLeft: '25%' }}/>
            </div>

                                                                                                        </div>
        </div>
      </div>
                                                                                            </div>
        </header>
    )
}

export default  Headline;
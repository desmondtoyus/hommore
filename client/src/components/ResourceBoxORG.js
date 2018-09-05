import React from 'react';
import {Link} from 'react-router-dom';


const  ResourceBox = (props)=>{
return(
    <div>
    <div className="col-md-4 " style={{height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2'}}>
        <div className="resources-card">

            <Link to="">

                <div className="highlights-card-content">
                    <img src="img/search-icon.svg"  alt = "source" />
                </div>
            </Link>

                <span className="highlights-card-title">All Categories</span>
                <div className="line"></div>

                <p className="highlights-copy">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>

        </div>
    <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
        <div class="resources-card">

            <Link to =" ">

                <div class="highlights-card-content">
                    <img src="img/search-icon.svg"  alt = "source" />
                </div>
             </Link>

                <span class="highlights-card-title">Addiction Recovery</span>
                <div class="line"></div>

                <p class="highlights-copy">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
        </div>
        {/* <!-- Highlights Card 2 --> */}
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
            <div class="resources-card">

                <Link to =" ">

                    <div class="highlights-card-content">
                        <img src="img/search-icon.svg"  alt = "source" />
                </div>
             </Link>

                    <span class="highlights-card-title">Domestic Violence</span>
                    <div class="line"></div>

                    <p class="highlights-copy">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
            </div>

          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
                <div class="resources-card">

                    <Link to =" ">

                        <div class="highlights-card-content">
                            <img src="img/search-icon.svg"  alt = "source" />
                </div>
             </Link>

                        <span class="highlights-card-title">Food Resources</span>
                        <div class="line"></div>

                        <p class="highlights-copy">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
                </div>

  
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
                    <div class="resources-card">

                        <Link to =" ">

                            <div class="highlights-card-content">
                                <img src="img/search-icon.svg"  alt = "source" />
                </div>
             </Link>

                            <span class="highlights-card-title">Medical Care</span>
                            <div class="line"></div>

                            <p class="highlights-copy">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
                    </div>


                    {/* <!-- Highlights Card 2 --> */}
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
                        <div class="resources-card">

                            <Link to =" ">

                                <div class="highlights-card-content">
                                    <img src="img/search-icon.svg"  alt = "source" />
                </div>
             </Link>

                                <span class="highlights-card-title">Ministries & Churches</span>
                                <div class="line"></div>

                                <p class="highlights-copy">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
                        </div>

                        {/* <!-- Highlights Card 3 --> */}
          <div className="col-md-4 " style={{ height: '100%', 'paddingLeft': '25px', position: 'relative', zIndex: '2' }}>
                            <div class="resources-card">

                                <Link to =" ">

                                    <div class="highlights-card-content">
                                        <img src="img/search-icon.svg"  alt = "source" />
                </div>
             </Link>

                                    <span class="highlights-card-title">Resources</span>
                                    <div class="line"></div>

                                    <p class="highlights-copy">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
              </p>
            </div>
                           
                        </div>

    </div>

)


}
export default ResourceBox;


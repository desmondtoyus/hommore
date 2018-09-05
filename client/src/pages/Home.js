import React from 'react'
import Headline from '../components/Headline';
import Highlight from '../components/Highlight';
import Overview from '../components/Overview';
// import ImageUpload from '../components/Image';
import UploadImage from '../components/UploadImage';
// import SimpleForm from './SimpleForm';

// import Watermark from '../components/Watermark';
// import Map from '../components/Map'; 
class Home extends React.Component{
constructor(){
    super();
    this.state={

    }
}
componentDidMount(){
    localStorage.search = 'Homeless Care';
}
render(){


    return(
        <div>
           
            <Headline/>
            {/* <UploadImage /> */}
            {/* <ImageUpload /> */}
            <Overview />
            <Highlight />
            </div>
    )
}
}
export default Home;
import React from 'react'
import Welcome from '../components/Welcome';
import ResourcesArea from '../components/ResourcesArea';
import Container from '../components/Container';
import Row from '../components/Row';
import Map from '../components/Map';
import {FormBtn} from '../components/Form/FormBtn';
import ResourceBox from '../components/ResourceBox';
import API from "../utils/API";
class Resources extends React.Component{
    handleAPISearch = () => {
        
        API.saveArticle()
        }
    componentDidMount() {
        localStorage.search = 'Homeless Care';
    }

    // }
    render(){
    return (
        <div>
            {/* <Welcome/> */}
          {/* <ResourcesArea>  */}
          <Container>
                   <Row> 
 {/* <Map/> */}
                        <ResourceBox/>
                      
                      </Row>
                    <Row>
                        {/* <FormBtn
                            
                            onClick={() => this.handleAPISearch()} >
                            Submit
                            </FormBtn> */}
                    </Row>
            </Container>
            {/* </ResourcesArea> */}
           

        </div>
    )
}
}
export default Resources;
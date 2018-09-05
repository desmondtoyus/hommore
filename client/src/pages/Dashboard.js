import React, {Component} from 'react';
import ProfileCards from '../components/ProfileCards'
import SettingCard from '../components/SettingCard'
import API from "../utils/API";  
import Container from '../components/Container';
import Auth0Lock from 'auth0-lock'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'
import PlacesAutocomplete from 'react-places-autocomplete'
//importing jquery into React
const ACCESS_TOKEN_KEY = 'access_token';
const CLIENT_ID = 'VvSoOpf5AAZoZ2HtvPhe0CuMCHInBXWN';
const CLIENT_DOMAIN = 'desmondtoye.auth0.com';

var $ = require("jquery");
var lock = new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN);

class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state={
            profile:[],
            userData:[],
            firstName:'',
            lastName:'',
            location:'',
            phone:'',
            allset:false,
        }
        this.handleInput = this.handleInput.bind(this);
    }


handleInput = (e)=>{
const {name, value} = e.target;
this.setState({[name]:value});
console.log(this.state.location);
}
handleSubmit =(e)=>{
    $('#usr-first-name').val('');
    $('#usr-last-name').val('');
    $('#usr-email').val('');
    $('#usr-location').val('');

    e.preventDefault();
   let firstName = this.state.firstName.trim();
   let lastName = this.state.lastName.trim();
    let email = this.state.profile.name;
    let location = this.state.location.trim();
    let phone = this.state.phone.trim();
    let z1 = /^[0-9]*$/;

     
    let re = new RegExp("^([a-z0-9]{5,})$");
    if (re.test(firstName) || re.test(lastName) || re.test(location) || z1.test(phone)) {
       let userInfo = {
            firstName:firstName,
            lastName:lastName,
            location:location,
            phone:phone
        }
 
        console.log(userInfo);
       
        API.updateUser(email, userInfo).then(res => {
            this.loadUserSettings(email);
            console.log(email);
        })
        .catch(err => console.log(err));

    } else {
        alert("Invalid Input");
    }
}
  
loadUserSettings = (email) => {
       console.log(email);
    API.getUserId(email)
        .then(res =>{
            this.setState({ userData: res.data})
            console.log(res)
        }
        )
        .catch(err => console.log(err));
};


//detail from auth0
       getUserDetails = () => {
             let accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
              var self =this;
               lock.getUserInfo(accessToken, function (error, profile) {
                   if (!error) {
                     self.setState({profile:profile})
                     console.log(profile.name);
                       let email = profile.name;
                       self.loadUserSettings(email);
                       API.saveUser({
                           email: self.state.profile.name
                       })
                      
                   }
                   else{
                       console.log(error);
                   }
                 
               })
           }
    handleAddress =(address)=>{
        this.setState({location:address})
    }
    

    componentDidMount() {
        this.getUserDetails();
       
        
    }

    render(){
        const inputProps = {
            value: this.state.location,
            onChange: this.onChange
        }
return(
<div>
<Container>
<ProfileCards {...this.state}/>
<SettingCard {...this.state} handleInput={this.handleInput} handleSubmit={this.handleSubmit} inputProps={this.inputProps} handleAddress={this.handleAddress}/>
</Container>
</div>

)

    }
}

export default Dashboard;
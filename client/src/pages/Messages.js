import React, {Component} from 'react';
import ProfileCards from '../components/ProfileCards';
import MessagesCard from '../components/MessagesCard';
import API from "../utils/API";  
import Container from '../components/Container';
import Auth0Lock from 'auth0-lock';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'
import PlacesAutocomplete from 'react-places-autocomplete'

const Messages = (props)=>{

return(
<div>
<Container>
<ProfileCards {...this.state}/>
<MessagesCard/>
</Container>
</div>

)

}

export default Messages;
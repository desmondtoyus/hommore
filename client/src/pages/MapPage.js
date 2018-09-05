



import React from 'react';
import MapCard from '../components/MapCard';
import { Link } from 'react-router-dom';
const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");
var google = window.google;
var map;
var infowindow;
// var searchAType
var pos;
var marker;
// 'use strict'

var searchType = 'Food Bank';
var pos;
let infoWindow = new google.maps.InfoWindow();
class MapPage extends React.Component {
    componentDidMount() {


        this.initMap()
    }


    shouldComponentUpdate() {
        return false
    }
    initMap = () => {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                const map = new google.maps.Map(document.getElementById('map'), {
                    center: pos,
                    zoom: 12
                });
                infoWindow.setPosition(pos);
                infoWindow.setContent('Location found');
                infoWindow.open(map);
                map.setCenter(pos);

                let infowindow2 = new google.maps.InfoWindow();
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch({
                    location: pos,
                    radius: 5000,
                    type: [searchType], //this is where the type of place to search comes in
                    keyword: "homeless"
                }, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {

                        for (let i = 0; i < results.length; i++) {
                            console.log('Find', results[i])
                            var placeLoc = results[i].geometry.location;
                            marker = new google.maps.Marker({
                                map: map,
                                position: results[i].geometry.location,
                                // icon: "/imgs/marker.png"
                                // draggable: true,

                            });

                            google.maps.event.addListener(marker, 'click', (function (g) {
                                // this.getModal();

                                // console.log(this.position);
                                console.log(results[i]);
                                infowindow2.open(map, this);

                            }).bind(this));

                        }
                    }
                });
            })
        }
    }


    render() {
        return <div id='map' className="col-md-12" style={{ height: '370px', position: 'relative', zIndex: '2' }}> </div>
    }
}

export default MapPage;


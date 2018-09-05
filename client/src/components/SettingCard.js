import React from 'react';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'
import PlacesAutocomplete from 'react-places-autocomplete'
import { Link } from 'react-router-dom';
import API from "../utils/API";



class SettingCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: '' }
        this.onChange = (address) =>{
            this.setState({ address })
            // let myAddress = this.state.address;
            this.props.handleAddress(address);
    }

    }
    componentWillReceiveProps(newProps) {
        this.setState({ location: this.state.address });
    }
    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }

        let parentState = this.props.userData;


        return (


            <div className="col-md-8 higlights" style={{ height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2' }}>
                <div className="highlights-card">
                    <div>
                        <span className="user-greeting">Hi, {(parentState.firstName ? (parentState.firstName) : null) } </span>
                        <Link to="">
                            <img id="toggle" src="img/toggle-on.svg" alt="toggle" />
                            <span className="span-right">Visibility to other users is on.</span>
                        </Link>
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr />
                    </div>
                    {/* 
                                    <!-- User Info --> */}
                    <form className="user-settings">
                        <div className="form-group">
                            <label className="user-field-labels" >First Name</label>
                            <input type="text" className="user-fields form-control" name="firstName" id="usr-first-name" placeholder={(parentState.firstName ? (parentState.firstName) : ("First Name"))}
                                onChange={this.props.handleInput} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label className="user-field-labels">Last Name</label>
                            <input type="text" className="user-fields form-control" id="usr-last-name" name="lastName" placeholder={(parentState.firstName ? (parentState.lastName) : ("Last Name"))}
                                onChange={this.props.handleInput} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label className="user-field-labels" >Phone Number</label>
                            <input type="text" className="user-fields form-control" name="phone" id="usr-email" placeholder={(parentState.phone ? (parentState.phone) : ("Phone Number"))}
                                onChange={this.props.handleInput} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label className="user-field-labels" >Location: {(parentState.firstName ? (parentState.location):"Enter Location")}</label>
                            <PlacesAutocomplete inputProps={inputProps} name="location" id="usr-location" placeholder={(parentState.firstName ? (parentState.location) : ("Your Location"))}
                                onblur={this.props.handleInput}

                            />
                        </div>
                        <br />

                        <br />

                        <br />

                        {/* <!-- Basic Needs Options --> */}
                        <div className="form-group">
                            <label className="user-field-labels" >Basic Needs</label>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />  Clothes
                          </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option2" />  Food
                          </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option3" />  Water
                          </label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />  Blankets
                          </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option2" />  First Aid
                          </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-check form-check-inline">
                                                <label className="form-check-label">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option3" />  Money
                          </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            <a href="map.html">
                                <button className="save-button" type="submit"
                                    onClick={this.props.handleSubmit}
                                    disabled={(!this.props.lastName || !this.props.phone || !this.props.firstName)}

                                > {(this.props.lastName || this.props.phone || this.props.firstName ? ('Submit') : ('Complete and Submit'))} </button>
                            </a>
                        </div>
                        <br />
                    </form>
                    <br />
                    <br />
                </div>
            </div>




        )

    }
}
export default SettingCard;

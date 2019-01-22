import React, { Component } from 'react'

export default class LocationDetail extends Component {
    render() {

        const location = this.props.locations.find(location => location.id === parseInt(this.props.match.params.locationId)) || {}

        return (
            <section className="location">
                <div key={location.id}>
                    <h1>{location.name}</h1>
                    <br />
                    {location.address}
                    <br /><br />
                    <a href="#" onClick={() => this.props.history.push("/")} className="card-link">Go Back</a>
                </div>
            </section>
        );
    }
}
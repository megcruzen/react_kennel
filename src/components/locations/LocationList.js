import React, { Component } from 'react'

export default class LocationList extends Component {
    render() {
        return (
            <article>
                <h1>Locations</h1>
                <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            {location.name}
                            <br />
                            {location.address}
                            <br /><br />
                        </div>
                    )
                }
                </section>
            </article>
        );
    }
}
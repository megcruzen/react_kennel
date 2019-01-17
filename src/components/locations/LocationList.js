import React, { Component } from 'react'

export default class LocationList extends Component {
    render() {
        return (
            <article>
                <h1>Locations</h1>
                <section>
                    <h3>Nashville North</h3>
                    <div>500 Puppy Way</div>
                </section>
                <section>
                    <h3>Nashville South</h3>
                    <div>123 Caterwaul Way</div>
                </section>
            </article>
        );
    }
}
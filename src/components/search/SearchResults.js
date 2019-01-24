import React, { Component } from "react"

export default class SearchResults extends Component {
    render () {
        return (
            <React.Fragment>
                <section className="research-results">
                        {/* loop through array of results and render the name */}

                        <h3>Animals</h3>
                        {this.props.animals.map(result => (
                            <p>{result.name}</p>
                        ))}

                        <h3>Employees</h3>
                        {this.props.employees.map(result => (
                            <p>{result.name}</p>
                        ))}

                        <h3>Locations</h3>
                        {this.props.locations.map(result => (
                            <p>{result.name}</p>
                        ))}

                </section>
            </React.Fragment>
        )
    }
}
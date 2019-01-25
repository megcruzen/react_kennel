import React, { Component } from 'react'
import "./Location.css"
import EmployeeCard from "../employee/EmployeeCard"

export default class LocationDetail extends Component {
    render() {

        const location = this.props.locations.find(location => location.id === parseInt(this.props.match.params.locationId)) || {}

        return (
            <section className="location">
                <div key={location.id}>
                    <h1>{location.name}</h1>
                    {location.address}
                    <br /><br />
                    <h3>Employees</h3>
                    <div>
                        {
                            this.props.employees
                                .filter(employee => employee.locationId === location.id)
                                .map(employee => <EmployeeCard key={employee.id} employee={employee} {...this.props} />)
                        }
                        </div>
                    <a href="#" onClick={() => this.props.history.push("/")} className="card-link">Go Back</a>
                </div>
            </section>
        );
    }
}
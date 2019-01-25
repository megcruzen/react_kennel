import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Location.css"
import EmployeeCard from "../employee/EmployeeCard"

export default class LocationList extends Component {
    render() {
        return (
            <section>
                <h1>Locations</h1>
                <div className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            {location.name}
                            <br />
                            {location.address}
                            <br />
                            <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                            <br /><br />
                            <h6 class="card-subtitle mb-2 text-muted">Employees</h6>
                            <div>
                            {
                                this.props.employees
                                    .filter(employee => employee.locationId === location.id)
                                    .map(employee => <EmployeeCard key={employee.id} employee={employee} {...this.props} />)
                            }
                            </div>
                        </div>
                    )
                }
                </div>
            </section>
        );
    }
}
import React, { Component } from 'react'
// import { Link } from "react-router-dom"
import person from "./person.png"
import "./Employee.css"
import AnimalCard from "../animal/AnimalCard"

export default class EmployeeCard extends Component {
    render() {
        // console.log(this.props.employees);
        return (
            <div key={this.props.employee.id} className="card card--employee">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={person} className="icon--employee" />
                        {this.props.employee.name}
                        <br /><br />
                        <span className="location">Location:<br />{this.props.employee.location.name}</span>
                        <br />
                        <a href="#"
                        onClick={() => this.props.deleteEmployee(this.props.employee.id)}
                        className="delete">Delete</a>
                    </h5>

                    <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                    <div className="animals--caretaker">
                    {
                        // grab array of animals
                        this.props.animals
                            // filter and return an array of all items where this condition is true
                            // where for each item animal.employeeId = employee.id
                            .filter(animal => animal.employeeId === this.props.employee.id)
                            // .map loops through array and creates card for each item (animal)
                            .map(animal => <AnimalCard key={animal.id} animal={animal} {...this.props} />)
                    }
                    </div>

                </div>
            </div>
        )
    }
}
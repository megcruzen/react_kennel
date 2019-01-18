import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'

export default class ApplicationViews extends Component {

    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: [],
        ownersPets: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animalData => newState.animals = animalData)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employeeData => newState.employees = employeeData)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locationData => newState.locations = locationData)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(ownerData => newState.owners = ownerData)
            .then(() => this.setState(newState))
            // .then (animalData => this.setState({animals: animalData})) - use if only using one fetch call
    }


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} ownerspets={this.state.ownerspets} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}
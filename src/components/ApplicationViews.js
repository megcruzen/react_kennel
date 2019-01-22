// Contains all the data/fetches and renders children components

import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalManager from "../modules/AnimalManager"
import LocationManager from "../modules/LocationManager"
import EmployeeManager from "../modules/EmployeeManager"
import OwnerManager from "../modules/OwnerManager"
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

        AnimalManager.getAll()
        .then(allAnimals => {
            this.setState({ animals: allAnimals })
        })

        LocationManager.getAll()
        .then(allLocations => {
            this.setState({ locations: allLocations })
        })

        EmployeeManager.getAll()
        .then(allEmployees => {
            this.setState({ employees: allEmployees })
        })

        OwnerManager.getAll()
        .then(allOwners => {
            this.setState({ owners: allOwners })
        })
    }

    deleteAnimal = (id) => {
        return AnimalManager.removeAndList(id)
        .then(animals => this.setState({ animals: animals }))
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(r => r.json())
        .then(employeeData => this.setState({employees: employeeData})
      )
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(r => r.json())
        .then(ownerData => this.setState({owners: ownerData})
      )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} ownerspets={this.state.ownerspets} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }

}
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
import AnimalDetail from './animal/AnimalDetail'

export default class ApplicationViews extends Component {

    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: [],
        ownersPets: []
    }

    componentDidMount() {

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
        // .then(() => AnimalManager.getAll())
        .then(animals =>
            this.setState({ animals: animals })
        )
    }

    deleteEmployee = (id) => {
        return EmployeeManager.removeAndList(id)
        .then(() => EmployeeManager.getAll())
        .then(employees =>
            this.setState({ employees: employees })
        )
    }

    deleteOwner = (id) => {
        return OwnerManager.removeAndList(id)
        .then(() => OwnerManager.getAll())
        .then(owners =>
            this.setState({ owners: owners })
        )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} />
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
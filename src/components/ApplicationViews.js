// Contains all the data/fetches and renders children components

import { Route } from 'react-router-dom'
import React, { Component } from "react"

import AnimalManager from "../modules/AnimalManager"
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'

import LocationManager from "../modules/LocationManager"
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'

import EmployeeManager from "../modules/EmployeeManager"
import EmployeeList from './employee/EmployeeList'
// import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'

import OwnerManager from "../modules/OwnerManager"
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'


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
        .then(allAnimals =>
            this.setState({ animals: allAnimals })
        )
    }

    addAnimal = (animal) => AnimalManager.post(animal)
    .then(() => AnimalManager.getAll())
    .then(allAnimals => this.setState({
        animals: allAnimals
        })
    )

    deleteEmployee = (id) => {
        return EmployeeManager.removeAndList(id)
        .then(() => EmployeeManager.getAll())
        .then(allEmployees =>
            this.setState({ employees: allEmployees })
        )
    }

    addEmployee = (employee) => EmployeeManager.post(employee)
    .then(() => EmployeeManager.getAll())
    .then(allEmployees => this.setState({
        employees: allEmployees
        })
    )

    deleteOwner = (id) => {
        return OwnerManager.removeAndList(id)
        .then(() => OwnerManager.getAll())
        .then(allOwners =>
            this.setState({ owners: allOwners })
        )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList
                                locations={this.state.locations} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props}
                                locations={this.state.locations} />
                }} />

                {/* <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} /> */}

                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                                deleteAnimal={this.deleteAnimal}
                                animals={this.state.animals} />
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props}
                                deleteAnimal={this.deleteAnimal}
                                animals={this.state.animals}
                                owners={this.state.owners} />
                }} />

                {/* Our shiny new route. We pass employees to the AnimalForm so a dropdown can be populated */}
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                                addAnimal={this.addAnimal}
                                employees={this.state.employees} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props}
                                deleteEmployee={this.deleteEmployee}
                                employees={this.state.employees} />
                }} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                                addEmployee={this.addEmployee} />
                }} />

                <Route exact path="/owners" render={(props) => {
                    return <OwnerList
                                deleteOwner={this.deleteOwner}
                                owners={this.state.owners} />
                }} />

                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props}
                                deleteOwner={this.deleteOwner}
                                owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }

}
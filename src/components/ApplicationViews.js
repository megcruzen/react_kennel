// Contains all the data/fetches and renders children components
import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import Login from './authentication/Login'

import AnimalManager from "../modules/AnimalManager"
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'

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
import OwnerForm from "./owner/OwnerForm"

export default class ApplicationViews extends Component {

    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: [],
        ownersPets: []
    }

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

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

    editAnimal = (animalId) => AnimalManager.edit(animalId)
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

    addOwner = (owner) => OwnerManager.post(owner)
    .then(() => OwnerManager.getAll())
    .then(allOwners => this.setState({
        owners: allOwners
        })
    )

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />

                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props}
                                locations={this.state.locations} />
                }} />

                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props}
                                    locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props}
                                    deleteAnimal={this.deleteAnimal}
                                    animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props}
                                deleteAnimal={this.deleteAnimal}
                                editAnimal={this.editAnimal}
                                animals={this.state.animals}
                                employees={this.state.employees}
                                owners={this.state.owners} />
                }} />

                {/* We pass employees to the AnimalForm so a dropdown can be populated */}
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                                addAnimal={this.addAnimal}
                                employees={this.state.employees} />
                }} />

                <Route path="/animals/edit" render={(props) => {
                    return <AnimalEditForm {...props}
                                animals={this.state.animals}
                                editAnimal={this.editAnimal}
                                employees={this.state.employees} />
                }} />

                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props}
                                    deleteEmployee={this.deleteEmployee}
                                    employees={this.state.employees}
                                    locations={this.state.locations} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                                addEmployee={this.addEmployee}
                                locations={this.state.locations} />
                }} />

                <Route exact path="/owners" render={props => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props}
                                    deleteOwner={this.deleteOwner}
                                    owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                                addOwner={this.addOwner} />
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
import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Spike", species: "Dog", breed: "Yorkie" },
        { id: 2, name: "Arthur", species: "Cat", breed: "Maine Coon" },
        { id: 3, name: "Mahoney", species: "Cat", breed: "Tortie" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phone: "555-555-5555" },
        { id: 2, name: "Emma Beaton", phone: "421-123-4567" },
        { id: 3, name: "Dani Adkins", phone: "555-222-3434" },
        { id: 4, name: "Adam Oswalt", phone: "615-599-5544" },
        { id: 5, name: "Fletcher Bangs", phone: "505-505-5050" },
        { id: 6, name: "Angela Lee", phone: "555-777-9999" }
    ]

    ownersAndPets = [
        { id: 1, ownerId: 1, animalId: 1 },
        { id: 2, ownerId: 4, animalId: 2 },
        { id: 3, ownerId: 6, animalId: 3 }
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} ownerspets={this.state.ownerspets} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews
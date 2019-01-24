import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import SearchManager from "../modules/SearchMananger"
import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {

    // initial state needs to live here for the search, since the search input happens in NavBar and the results happen in AppViews
    state = {
        animals: [],
        employees: [],
        locations: []
    }

    // searchAllData = (searchQuery) => {
    //     return SearchManager.searchAll(searchQuery)
    //     // .then(responses => console.log(responses))
    //     .then(responses => this.setState({animalResults: responses}))
    // }

    searchAllData = (searchQuery) => {
        const newSearchResults = {}
        return SearchManager.searchAnimals(searchQuery)
        .then(response => newSearchResults.animals = response)
        .then(() => SearchManager.searchEmployees(searchQuery))
        .then(response => newSearchResults.employees = response)
        .then(() => SearchManager.searchLocations(searchQuery))
        .then(response => newSearchResults.locations = response)
        .then(() => this.setState(newSearchResults))
        }

    render() {
        return (
            <React.Fragment>
                <NavBar searchAllData={this.searchAllData} />
                <ApplicationViews animals={this.state.animals} employees={this.state.employees} locations={this.state.locations} />
            </React.Fragment>
        )
    }
}

export default Kennel
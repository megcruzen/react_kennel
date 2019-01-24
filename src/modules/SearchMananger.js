const remoteURL = "http://localhost:5002"

export default {

    searchAnimals(query) {
        return fetch(`${remoteURL}/animals/?q=${query}`).then(response => response.json())
    },

    searchEmployees(query) {
        return fetch(`${remoteURL}/employees/?q=${query}`).then(response => response.json())
    },

    searchLocations(query) {
        return fetch(`${remoteURL}/locations/?q=${query}`).then(response => response.json())
    }

    // searchAll(query) {
    //     Promise.all([this.searchAnimals(query), this.searchEmployees(query), this.searchLocations(query)]);
    // }

}
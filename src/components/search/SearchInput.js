import React, { Component } from "react"
import { withRouter } from 'react-router-dom'

class SearchInput extends Component {

    // Set initial state
    state = {
        searchQuery: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        console.log(evt.target.id, evt.target.value);
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleSearch = evt => {
        evt.preventDefault()
        // console.log("enter key pressed")
        this.props.searchAllData(this.state.searchQuery)
        .then(() => this.props.history.push("/search"));
    }

    render() {
        return (
            <React.Fragment>
                <form className="searchForm" onSubmit={this.handleSearch}>
                {/* The input field id must match the key of the property that reflects the user input in state */}
                    <input type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="searchQuery"
                            placeholder="Search..." />
                </form>
            </React.Fragment>
        )
    }
}

export default withRouter(SearchInput);
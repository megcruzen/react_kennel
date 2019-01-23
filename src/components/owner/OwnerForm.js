import React, { Component } from "react"
import "./Owner.css"

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        name: "",
        phone: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        console.log(evt.target.id, evt.target.value);
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewOwner = evt => {
        evt.preventDefault()
        if (this.state.name === "") {
            window.alert("Please enter a name.")
        }
        if (this.state.phone === "") {
            window.alert("Please enter a phone number.")
        } else {
            const owner = {
                name: this.state.name,
                phone: this.state.phone,
            }

            // Create the owner and then redirect user to owner list
            this.props.addOwner(owner)
            .then(() => this.props.history.push("/owners"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Owner Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone" placeholder="Phone Number" />
                    </div>
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
                <div><a href="#" onClick={() => this.props.history.push("/owners")} className="card-link">Go Back</a></div>
            </React.Fragment>
        )
    }
}
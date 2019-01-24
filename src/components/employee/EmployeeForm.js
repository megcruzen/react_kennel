import React, { Component } from "react"
// import "./Employee.css"

export default class EmployeeForm extends Component {

    // Set initial state
    state = {
        employee: ""
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
    constructNewEmployee = evt => {
        evt.preventDefault();

        const employee = {
            name: this.state.employee,
            locationId: this.props.locations.find(location =>  // find location name and grab its ID
                location.name === this.state.location).id
        }

        // Create the employee and then redirect user to employee list
        this.props.addEmployee(employee)
        .then(() => this.props.history.push("/employees"))
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="employee"
                               placeholder="Employee name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Assign to caretaker</label>
                        <select defaultValue="" name="location" id="location"
                                onChange={this.handleFieldChange}>
                            <option value="">Select a location</option>
                        {
                            this.props.locations.map(location => <option key={location.id} id={location.id}>{location.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
                <div><a href="#" onClick={() => this.props.history.push("/animals")} className="card-link">Go Back</a></div>
            </React.Fragment>
        )
    }
}
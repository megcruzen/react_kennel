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
            name: this.state.employee
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
                    <button type="submit" onClick={this.constructNewEmployee} className="btn btn-primary">Submit</button>
                </form>
                <div><a href="#" onClick={() => this.props.history.push("/animals")} className="card-link">Go Back</a></div>
            </React.Fragment>
        )
    }
}
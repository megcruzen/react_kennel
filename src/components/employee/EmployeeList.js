import React, { Component } from 'react'

// import "./Employee.css"
export default class EmployeeList extends Component {
    render() {
        // console.log(this.props.employees);
        return (
            <section className="employees">
                <h1>Employees</h1>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Add Employee
                    </button>
                </div>
                <div>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name} (<a href="#" onClick={() => this.props.deleteEmployee(employee.id)}>Delete</a>)
                            <br />
                            Location: {employee.location.name}
                            <br /><br />
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}
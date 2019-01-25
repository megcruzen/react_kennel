import React, { Component } from 'react'
import "./Employee.css"
import EmployeeCard from "../employee/EmployeeCard"
export default class EmployeeList extends Component {
    render() {
        // console.log(this.props.employees);
        return (
            <section>
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
                <div className="employees">
                {
                    this.props.employees.map(employee =>
                        <EmployeeCard key={employee.id} employee={employee} {...this.props} />
                    )
                }
                </div>
            </section>
        )
    }
}
import React, { Component } from 'react'
export default class EmployeeList extends Component {
    render() {
        // console.log(this.props.employees);
        return (
            <section className="employees">
                <h1>Employees</h1>
                <div>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name} (<a href="#" onClick={() => this.props.deleteEmployee(employee.id)}>Delete</a>)
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}
import React, { Component } from 'react'
export default class EmployeeList extends Component {
    render() {
        // console.log(this.props.employees);
        return (
            <article>
                <h1>Employees</h1>
                <section className="employees">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            {employee.name}
                        </div>
                    )
                }
                </section>
            </article>
        )
    }
}
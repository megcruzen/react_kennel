import React, { Component } from "react"

export default class AnimalEditForm extends Component {

    // Set initial state
    state = {
        id: this.props.location.state.id,
        animalName: this.props.location.state.name,
        species: this.props.location.state.species,
        breed: this.props.location.state.breed,
        employee: this.props.location.state.employee
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
    reconstructAnimal = evt => {
        evt.preventDefault()
        if (this.state.animalName === "") {
            window.alert("Please enter an animal name.")
        }
        if (this.state.species === "") {
            window.alert("Please enter a species.")
        }
        if (this.state.breed === "") {
            window.alert("Please enter a breed.")
        }
        if (this.state.employee === "") {      // if employee is empty, alert to select
            window.alert("Please select a caretaker.")
        } else {
            const animalId = this.state.id;
            const editedAnimal = {
                name: `${this.state.animalName}`,
                species: `${this.state.species}`,
                breed: `${this.state.breed}`,
                employeeId: this.props.employees.find(employee => employee.name === this.state.employee).id
            }

            // Create the animal and then redirect user to animal list
            this.props.editAnimal(animalId, editedAnimal)
            .then(() => this.props.history.push("/animals"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal Name</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="animalName"
                               placeholder={`${this.state.animalName}`} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="species">Species</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="species" placeholder={`${this.state.species}`} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="breed" placeholder={`${this.state.breed}`} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">{`${this.state.employee.name}`}</option>
                        {
                            this.props.employees.map(employee => <option key={employee.id} id={employee.id}>{employee.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.resconstructAnimal} className="btn btn-primary">Update</button>
                </form>
                <div><a href="#" onClick={() => this.props.history.push("/animals")} className="card-link">Go Back</a></div>
            </React.Fragment>
        )
    }

}
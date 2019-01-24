import React, { Component } from "react"
import { Link } from 'react-router-dom'
import "./Animal.css"
import dog from "./DogIcon.png"
export default class AnimalDetail extends Component {
    render() {
        // console.log(this.props);
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        const employeeName = animal.employee ? animal.employee.name : ""
        // console.log(animal);

        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={dog} className="icon--dog" alt="" />
                            {animal.name}
                            <br />
                            <span className="breed">{animal.breed}</span>
                            <br />
                            <span className="owner">Caretaker:<br />{employeeName}</span>
                            <br />
                            {/* <span className="owner">Owner:<br />{ownerName}</span> */}
                            <div className="animalEditButton">
                            <Link to={{pathname:"/animals/edit/", state:{id: animal.id, name: animal.name, breed: animal.breed, employee: animal.employeeId}}}>
                                <button type="button"
                                        className="btn btn-success">
                                    Edit Animal
                                </button>
                                </Link>
                            </div>
                            {/* <div className="animalEditButton">
                                <button type="button"
                                        className="btn btn-success"
                                        onClick={() => { this.props.editAnimal(animal.id) }
                                        // this.props.history.push(`/animals/edit/${animal.id}`)}
                                        }>
                                    Edit
                                </button>
                            </div> */}
                            <a href="#"
                                onClick={() => this.props.deleteAnimal(animal.id)
                                .then(() => this.props.history.push("/animals"))
                            }
                                className="card-link">Delete</a>
                        </h5>
                    </div>
                </div>
                <div><a href="#" onClick={() => this.props.history.push("/animals")} className="card-link">Go Back</a></div>
            </section>
        )
    }
}
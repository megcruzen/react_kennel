import React, { Component } from 'react'
import { Link } from "react-router-dom";
import dog from "./DogIcon.png"
import "./Animal.css"

export default class AnimalCard extends Component {
    render () {
        return (
            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <img src={dog} className="icon--dog" alt="" />
                        {this.props.animal.name}
                        <br />
                        <span className="breed">{this.props.animal.breed}</span>
                        <br />
                        <span className="owner">Owner:<br />{this.props.animal.owner.name}</span>
                        <br />
                        <span className="caretaker">Caretaker:<br />{this.props.animal.employee.name}</span>
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="delete">Discharge</a>
                    </h5>
                </div>
            </div>
        )
    }
}
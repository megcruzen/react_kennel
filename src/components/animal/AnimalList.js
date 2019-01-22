import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"
// import OwnerList from '../owner/OwnerList';

export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" alt="" />
                                {animal.name}
                                <br />
                                <span className="breed">{animal.breed}</span>
                                <br />
                                <span className="owner">Owner:<br />{animal.owner.name}</span>
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}
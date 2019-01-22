import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
    render() {
        console.log(this.props);
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        const ownerName = animal.owner ? animal.owner.name : ""
        console.log(animal);

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
                            <span className="owner">Owner:<br />{ownerName}</span>
                            <a href="#"
                                onClick={() => this.props.deleteAnimal(animal.id)
                                .then(() => this.props.history.push("/animals"))
                            }
                                className="card-link">Delete</a>
                        </h5>
                    </div>
                </div>
            </section>
        )
    }
}
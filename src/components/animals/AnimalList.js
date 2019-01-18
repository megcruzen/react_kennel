import React, { Component } from 'react'

export default class AnimalList extends Component {
    render() {

        let ownerName = "";
        this.props.animals.forEach(animal =>
            this.props.ownerspets.map(petsOwner => {
                if (animal.id === petsOwner.animalId) {
                    this.props.owners.forEach(owner => {
                        if (petsOwner.ownerId === owner.id) {
                            ownerName = owner.name;
                            console.log(animal.name, ":", ownerName)
                        }
                    })
                }
                console.log("Name:", ownerName)
                return ownerName;
            })
        )

        return (
            <section className="animals">
                <h1>Animals</h1>
                <div>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            {animal.name}
                            <br />
                            {animal.breed}
                            <br />
                            Owner: {ownerName}
                            <br /><br />
                        </div>
                    )
                }
                </div>
            </section>
        );
    }
}
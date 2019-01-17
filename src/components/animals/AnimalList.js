import React, { Component } from 'react'

export default class AnimalList extends Component {
    render() {
        return (
            <article>
                <h1>Animals</h1>
                <section className="animals">
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            {animal.name}
                            <br />
                            {animal.breed}
                            <br /><br />
                        </div>
                    )
                }
                </section>
            </article>
        );
    }
}
import React, { Component } from 'react'
export default class OwnerDetail extends Component  {
    render() {

        const owner = this.props.owners.find(owner => owner.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owners">
                <h1>Owners</h1>
                <div key={owner.id}>
                    {owner.name}
                    <br />
                    {owner.phone}
                    <br />
                    <a href="#" onClick={() => this.props.deleteOwner(owner.id)
                    .then(() => this.props.history.push("/owners"))}>Delete</a>
                    <br />
                </div>
                <div><a href="#" onClick={() => this.props.history.push("/owners")} className="card-link">Go Back</a></div>
            </section>
        )
    }
}
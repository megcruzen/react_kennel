import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                <h1>Owners</h1>
                <div>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name}
                            <br />
                            {owner.phone}
                            <br />
                            <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                            <a href="#" onClick={() => this.props.deleteOwner(owner.id)}>Delete</a>
                            <br /><br />
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}
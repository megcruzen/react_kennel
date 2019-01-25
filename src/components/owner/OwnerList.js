import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class OwnerList extends Component {
    render() {
        return (
            <section>
                <h1>Owners</h1>
                <div className="ownerButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/owners/new")}
                            }>
                        Add New Client
                    </button>
                </div>
                <div className="owners">
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                {owner.name}
                                <br />
                                <span className="phone">{owner.phone}</span>
                                <br />
                                <span className="pets"><strong>Pets:</strong></span>
                                {owner.animals.map(animal =>
                                    <span className="pets">{animal.name}<br /></span>
                                    )}
                                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                <a href="#" className="delete" onClick={() => this.props.deleteOwner(owner.id)}>Delete</a>
                                <br /><br />
                                </h5>
                            </div>
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}
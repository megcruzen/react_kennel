import React, { Component } from 'react'
export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                <h1>Owners</h1>
                <div>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name}<br />
                            {owner.phone}<br /><br />
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
}
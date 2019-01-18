import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                </ul>
                <input type="text" className="searchbox" placeholder="Search..."></input>
            </nav>
        )
    }

    searchInput() {
        // let searchBox = document.querySelector("#search-box");
        // searchBox.addEventListener("click", () => {
        //     searchBox.value = "";
        // });
        // searchBox.addEventListener("keyup", () => {

        // });
    }
}

export default NavBar
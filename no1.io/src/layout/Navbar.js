import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-md  navbar-light">
                    <Link to="/" className="navbar-brand">
                            <img className="logo" src="../images/logo.png"  alt="Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-links" to="/all-io-domains/">View All .io Domains</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" to="/">Why .io Domains</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" to="/">How to Buy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" to="/">Buyers Protection</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" to="/">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col">
                        <div className="row footer-ul">
                            <div className="col mr-5">
                                <h3>Quick Navigation</h3>
                                <ul>
                                    <li><Link to="#"><span className="fas fa-check"></span> No1 .io Home Page</Link></li>
                                    <li><Link to="#"><span className="fas fa-check"></span> View All Domains</Link></li>
                                    <li><Link to="#"><span className="fas fa-check"></span> Whi .io Domains</Link></li>
                                    <li><Link to="#"><span className="fas fa-check"></span> How To Buy</Link></li>
                                    <li><Link to="#"><span className="fas fa-check"></span> Buyers Protection</Link></li>
                                </ul>
                            </div>
                            <div className="col ml-5">
                                <h3>Legal</h3>
                                <ul>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Privacy</Link></li>
                                    <li><Link to="#">Terms Of Use</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                    <li><Link to="#">Site Map</Link></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col ijtimoiylar">
                        <h3>Follow Us</h3>
                        <div className=" ijtimoiy">
                            <Link className="m-2"><span className="fab fa-facebook-f pl-3 pr-3"></span></Link>
                            <Link className="m-2"><span className="fab fa-linkedin-in"></span></Link>
                            <Link className="m-2"><span className="fab fa-twitter"></span></Link>
                            <Link className="m-2"><span className="fab fa-instagram"></span></Link>
                        </div>
                    </div>
                </div>
                <hr  />
                <div className="row">
                    <div className="col">
                        <p>Copyright © 2021 No1.io</p>
                    </div>
                    <div className="col zynotek">
                        <p>Powered by: ZYNOTEK</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer'
import Main from '../layout/Main'
import Navbar from '../layout/Navbar'
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <img src="./images/download.jpg" alt="download" />
                    <div className='opacity'></div>
                    <Navbar />
                    <div className="Premium">
                        <h1 className="text-light">Premium .io Domain Names</h1>
                        <p className="text-light">Available For Sale!</p>
                        <button className="btn"> View Domains</button>
                    </div>
                    <Main />
                    <div className="read-more-background">
                        <div className="read-more-about">
                            <div className="background-overlay"></div>
                            <div className="elementor-widget-container">
                            <h1 className="text-light text-center p-5">Read More About .io Domain Names</h1>
                                <div className="row">
                                    <div className="col">
                                        <img src="./images/image-1.png" alt="cacd" />
                                        <p>What Fuels the Growing Popularity of .IO Domain Names</p>
                                        <Link className="link-read-more" to="#">READ MORE!</Link>
                                    </div>
                                    <div className="col">
                                        <img src="./images/image-2.png" alt="cacd" />
                                        <p>What Does .io Mean and Why .IO Domain Name is the Best Alternative to .COM Domain</p>
                                        <Link className="link-read-more" to="#">READ MORE!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="some-domains mb-5">
                        <h1 className="some-of-our">Some Of Our Domains Are On</h1>
                        <div className="row">
                            <div className="col">
                                <img src="./images/flippa.png" alt="sacac"/>
                            </div>
                            <div className="col">
                                <img src="./images/sedo.png" alt="sacac"/>
                            </div>
                            <div className="col">
                                <img src="./images/4cn.png" alt="sacac"/>
                            </div>
                            <div className="col">
                                <img src="./images/namepros.png" alt="sacac"/>
                            </div>
                            <div className="col">
                                <img src="./images/uniregistry.png" alt="sacac"/>
                            </div>
                        </div>
                    </div>
                    <div className="gateway">
                        <div className="our-payment">
                            <div className="background-overlay"></div>
                            <div className="text-center row">
                                <img src="./images/escrow.png" alt="csdcs" />
                                <p>Our payment gateway is Escrow.com – the world’s most secure payment processor that safeguards both
                                    buyer and seller. All funds transacted using Escrow.com are kept in trust until the domain payment
                                    and transfer is completed.
                                </p>
                                <div className="footer-gateway"></div>
                            </div>
                        </div>
                    </div>
                </header>
                <Footer />
            </div>
        )
    }
}

export default Home

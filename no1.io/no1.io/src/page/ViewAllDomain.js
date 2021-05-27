import React, { Component } from 'react'
import Navbar from '../layout/Navbar'
import './ViewAllDomain.css'

export class ViewAllDoain extends Component {
    render() {
        return (
            <header>
                <img src="../images/download.jpg" alt="download" />
                <div className='opacity'></div>
                <Navbar />
                <div className="Premium">
                    <h1 className="text-light">All Premium .io Domains</h1>
                </div>
            </header>
        )
    }
}

export default ViewAllDoain

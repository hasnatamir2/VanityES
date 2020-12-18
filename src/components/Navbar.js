import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';

function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-item">
                    <FontAwesomeIcon className="nav-icons" icon={['fas', 'home']}/>
                    <a href="/" className="nav-links" >home</a>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon className="nav-icons" icon={['fas', 'gamepad']}/>
                    <a href="#game" className="nav-links" >Game</a>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon className="nav-icons" icon={['fas', 'thumbs-up']}/>
                    <a href="#tournament" className="nav-links" >participate</a>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon className="nav-icons" icon={['fas', 'hands']}/>
                    <a href="#whyUs" className="nav-links" >Why Us?</a>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon className="nav-icons" icon={['fas', 'hashtag']}/>
                    <a href="#contact" className="nav-links" >Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

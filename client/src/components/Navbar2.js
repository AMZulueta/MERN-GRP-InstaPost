import { Component, useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css"

class Navbar2 extends Component{

    state = { clicked: false };
    handleclick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <div className="navbar">
                <nav className="navbaritems">
                    <h1 className="nav__logo"><span className="instalogo">InstaPost</span> </h1>
                    
                    <div className="menu__icons" onClick={this.handleclick}>
                        <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars" }></i>
                    </div>
                    
                    <ul className={this.state.clicked ? "nav__menu active" : "nav__menu"}>
                        <li><Link className="nav__links" to="/Userfeed">Home</Link></li>
                        <li><Link className="nav__links" to="/myprofile">MyProfile</Link></li>
                        <li><Link className="nav__button" to="/Logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar2;
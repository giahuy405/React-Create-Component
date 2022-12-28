import React, { Component } from "react";
import "./Header.css"
class Header extends Component {
    render() {

        return (
            <header>
                <div className="container">
                    <a className="brand">Brand</a>
                    <nav>
                        <a className="active">Home</a>
                        <a>About</a>
                        <a>Contact</a>
                        <a>Service</a>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header;
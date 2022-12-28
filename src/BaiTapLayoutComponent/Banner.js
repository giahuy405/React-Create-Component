import React, { Component } from "react";
import "./Banner.css"
class Banner extends Component {
    render() {

        return (
            <div >
                <div className="container carousel">
                    <h1>A Warm Welcome!</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla autem modi, rerum exercitationem nemo cumque recusandae, voluptates, laborum assumenda vel ut itaque optio nisi! Laudantium natus omnis dolorem expedita at!</p>
                    <button className="btn btn-primary" >Call to action</button>
                </div>
            </div>
        )
    }
}
export default Banner;  
import React from 'react';
import { Link } from 'react-router-dom';
import HomeBack from '../images/homeback.jpg';
import "./Home.css"

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${HomeBack})`}}>
            <div className="Container">
                <p>VUELA</p>
                <h1>"I do believe it's time for 
                    another adenture."
                </h1>
                <Link to="/login">
                    <div className="center">
                    <button>Start Here!</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home

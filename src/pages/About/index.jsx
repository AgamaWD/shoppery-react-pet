import React from "react";
import { Link } from "react-router";

function About() {
    return (
        <div className="p-layout">
            <h1>
                О компании
            </h1>
            <Link to="/">На главную</Link>
        </div>
    )
}

export default About
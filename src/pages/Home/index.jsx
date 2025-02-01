import React from "react";
import { Link } from "react-router";

function Home() {
    return (
        <div className="p-layout">
            <h1>Главная</h1>
            <Link to="/about">О Компании</Link>
        </div>
    )
}

export default Home
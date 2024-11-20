import { Link } from "react-router-dom";
import React from "react";

function AboutPage() {
    return (
        <div>
            <Link to={'../HomePage.jsx'} style={{ paddingRight: '10px' }}>Главная</Link>
            <Link to={'/'}>О нас</Link>
            <h1>О нас</h1>
        </div>
    );
}

export default AboutPage;
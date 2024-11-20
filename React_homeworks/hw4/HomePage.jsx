import { Link } from "react-router-dom";
import React from "react";

function HomePage() {
    return (
        <div>
            <Link to={'/'} style={{ paddingRight: '10px' }}>Главная</Link>
            <Link to={'../AboutPage.jsx'}>О нас</Link>
            <h1>Главная страница</h1>
        </div>
    );
}

export default HomePage;
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsHeaderActive(true);
            } else {
                setIsHeaderActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    return (
        <React.Fragment>
            <header className={isHeaderActive ? "header active" : "header"}>
                <div className="container">

                    <h1>
                        <a href="#" className="logo">PizzaVira<span className="span">.</span></a>
                    </h1>

                    <nav className={isActive ? "navbar active" : "navbar"}>
                        <ul className="navbar-list">

                            <li className="nav-item">
                                <a href="#home" className="navbar-link" onClick={toggleNavbar}>Home</a>
                            </li>

                            <li className="nav-item">
                                <a href="#about" className="navbar-link" onClick={toggleNavbar}>About Us</a>
                            </li>

                            <li className="nav-item">
                                <a href="#food-menu" className="navbar-link" onClick={toggleNavbar}>Shop</a>
                            </li>

                            <li className="nav-item">
                                <a href="#blog" className="navbar-link" onClick={toggleNavbar}>Blog</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="navbar-link" onClick={toggleNavbar}>Contact Us</a>
                            </li>

                        </ul>
                    </nav>

                    <div className="header-btn-group">
                        <button className="search-btn" aria-label="Search" onClick={toggleSearch}>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>

                        <button className="btn btn-hover">Reservation</button>

                        <button className={isActive ? "nav-toggle-btn active" : "nav-toggle-btn"} aria-label="Toggle Menu" onClick={toggleNavbar}>
                            <span className="line top"></span>
                            <span className="line middle"></span>
                            <span className="line bottom"></span>
                        </button>
                    </div>

                </div>
            </header>
            <div className="search-container" data-search-container>

                <div className={ isSearchActive ? "search-box active" : "search-box"}>
                    <input type="search" name="search" aria-label="Search here" placeholder="Type keywords here..."
                        className="search-input" />

                        <button className="search-submit" aria-label="Submit search" data-search-submit-btn>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                </div>

                <button className="search-close-btn" aria-label="Cancel search" onClick={toggleSearch}></button>

            </div>
        </React.Fragment>
    );
}

export default Header;
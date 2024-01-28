import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, addToBasket } from '../reduxStore/basketSlice';

const Header = () => {
    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState(false);
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

    const totalPrice = () => {
        return basket.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <header className={isHeaderActive ? "header active" : "header"}>
            <div className="container">
                <h1>
                    <a href="#" className="logo">
                        Basket Checkout<span className="span">.</span>
                    </a>
                </h1>
                <nav className={isActive ? "navbar active" : "navbar"}>
                    <ul className="navbar-list">
                        {basket.cart.map((item) => (
                            <li className="nav-item" key={item.sku}>
                                <span className='nav-link'>{item.name}</span>
                                <div>
                                    <button onClick={() => dispatch(removeFromBasket(item.sku))}>-</button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => {
                                            if (item.quantity < item.basketLimit) {
                                                dispatch(addToBasket(item.sku));
                                            }
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                        <li className="nav-item">
                            <div className="price">Total: ${totalPrice()}</div>
                            
                                <button className="btn-proceed">Proceed to Checkout</button>
                            
                        </li>
                        <li className='nav-item'>
                          
                                <p className='nav-link'>Continue shopping?</p>
                            
                        </li>
                    </ul>
                </nav>
                <div className="header-btn-group">
                    <button className="search-btn" aria-label="Search" data-search-btn>
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                    <button
                        className={isActive ? "nav-toggle-btn active" : "nav-toggle-btn"}
                        title="cart"
                        onClick={toggleNavbar}
                    >
                        <span className="line top"></span>
                        <span className="line middle"></span>
                        <span className="line bottom"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

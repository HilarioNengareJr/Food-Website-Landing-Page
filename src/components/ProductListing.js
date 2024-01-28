import React from 'react';
import './ProductListing.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../reduxStore/basketSlice';

const Products = () => {
    const products = useSelector(state => state.basket.products);
    const basket = useSelector(state => state.basket);
    const dispatch = useDispatch();

    return (
        <main>
            <article>
                <section className="section product-menu" id="product-menu">
                    <div className="container">
                        <h2 className="h2 section-title">
                            Our Amazing <span className="span">products</span>
                        </h2>
                        <p className="section-text">Product is any substance consumed or used for day to day.</p>

                        <ul className="fiter-list">
                            <li>
                                <button className="filter-btn active">All</button>
                            </li>
                            {products.map((product, index) => (
                                <li key={index}>
                                    <button className="filter-btn btn-hover">{product.name}</button>
                                </li>
                            ))}
                        </ul>

                        <ul className="product-menu-list">
                            {products.map((product, index) => (
                                <li key={index}>
                                    <div className="product-menu-card">
                                        <div className="card-banner">
                                            <img
                                                src={'/images/download.jpeg'}
                                                width="300"
                                                height="300"
                                                loading="lazy"
                                                alt={product.name}
                                                className="w-100"
                                            />

                                            <div className="badge">{product.description}</div>

                                            <button onClick={() => dispatch(addToBasket(product.sku))} className="btn product-menu-btn">
                                                Add to Basket
                                            </button>
                                        </div>

                                        <h3 className="h3 card-title">{product.name}</h3>

                                        <div className="price-wrapper">
                                            <p className="price-text">Price:</p>
                                            <data className="price">${product.price.toFixed(2)}</data>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default Products;

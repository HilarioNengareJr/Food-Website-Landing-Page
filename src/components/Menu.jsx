import React from "react";
import './Menu.css';

const Menu = () => {

    return (
        <section className="section food-menu" id="food-menu">
            <div className="container">

                <p className="section-subtitle">Popular Dishes</p>

                <h2 className="h2 section-title">
                    Our Delicious <span className="span">Foods</span>
                </h2>

                <p className="section-text">
                    Food is any substance consumed to provide nutritional support for an organism.
                </p>

                <ul className="fiter-list">

                    <li>
                        <button className="filter-btn  active">All</button>
                    </li>

                    <li>
                        <button className="filter-btn">Pizza</button>
                    </li>

                    <li>
                        <button className="filter-btn">Burger</button>
                    </li>

                    <li>
                        <button className="filter-btn">Drinks</button>
                    </li>

                    <li>
                        <button className="filter-btn">Sandwich</button>
                    </li>

                </ul>

                <ul className="food-menu-list">

                    <li>
                        <div className="food-menu-card">

                            <div className="card-banner">
                                <img src="/images/food-menu-1.png" width={300} height={300} loading="lazy" alt="Fried Chicken Unlimited" className="w-100" />

                                <div className="badge">-15%</div>

                                <button className="btn food-menu-btn">Order Now</button>
                            </div>

                            <div className="wrapper">
                                <p className="category">Chicken</p>

                                <div className="rating-wrapper">


                                    <div className="wrapper">
                                        
                                        <div className="rating-wrapper">
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <h3 className="h3 card-title">Fried Chicken Unlimited</h3>

                            <div className="price-wrapper">

                                <p className="price-text">Price:</p>

                                <data className="price">$49.00</data>

                                <del className="del" value="69.00">$69.00</del>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="food-menu-card">

                            <div className="card-banner">
                                <img src="/images/food-menu-2.png" width={300} height={300} loading="lazy" alt="Burger King Whopper" className="w-100" />

                                <div className="badge">-10%</div>

                                <button className="btn food-menu-btn">Order Now</button>
                            </div>

                            <div className="wrapper">
                                <p className="category">Noddles</p>

                                <div className="rating-wrapper">

                                    <div className="wrapper">
                                        
                                        <div className="rating-wrapper">
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <h3 className="h3 card-title">Burger King Whopper</h3>

                            <div className="price-wrapper">

                                <p className="price-text">Price:</p>

                                <data className="price" value="29.00">$29.00</data>

                                <del className="del">$39.00</del>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="food-menu-card">

                            <div className="card-banner">
                                <img src="/images/food-menu-3.png" width={300} height={300} loading="lazy" alt="White Castle Pizzas" className="w-100" />

                                <div className="badge">-25%</div>

                                <button className="btn food-menu-btn">Order Now</button>
                            </div>

                            <div className="wrapper">
                                <p className="category">Pizzas</p>

                                <div className="rating-wrapper">

                                    <div className="wrapper">
                                        
                                        <div className="rating-wrapper">
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <h3 className="h3 card-title">White Castle Pizzas</h3>

                            <div className="price-wrapper">

                                <p className="price-text">Price:</p>

                                <data className="price" value="49.00">$49.00</data>

                                <del className="del">$69.00</del>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="food-menu-card">

                            <div className="card-banner">
                                <img src="/images/food-menu-4.png" width={300} height={300} loading="lazy" alt="Bell Burrito Supreme" className="w-100" />

                                <div className="badge">-20%</div>

                                <button className="btn food-menu-btn">Order Now</button>
                            </div>

                            <div className="wrapper">
                                <p className="category">Burrito</p>

                                <div className="rating-wrapper">



                                    <div className="wrapper">
                                        
                                        <div className="rating-wrapper">
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <h3 className="h3 card-title">Bell Burrito Supreme</h3>

                            <div className="price-wrapper">

                                <p className="price-text">Price:</p>

                                <data className="price" value="59.00 ">$59.00</data>

                                <del className="del">$69.00</del>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="food-menu-card">

                            <div className="card-banner">
                                <img src="/images/food-menu-5.png" width={300} height={300} loading="lazy" alt="Kung Pao Chicken BBQ" className="w-100" />

                                <div className="badge">-5%</div>

                                <button className="btn food-menu-btn">Order Now</button>
                            </div>

                            <div className="wrapper">
                                <p className="category">Nuggets</p>

                                <div className="rating-wrapper">

                                    <div className="wrapper">
                                        
                                        <div className="rating-wrapper">
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <h3 className="h3 card-title">Kung Pao Chicken BBQ</h3>

                            <div className="price-wrapper">

                                <p className="price-text">Price:</p>

                                <data className="price" value="49.00">$49.00</data>

                                <del className="del">$69.00</del>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="food-menu-card">

                            <div className="card-banner">
                                <img src="/images/food-menu-6.png" width={300} height={300} loading="lazy" alt="Wendy's Chicken" className="w-100" />

                                <div className="badge">-15%</div>

                                <button className="btn food-menu-btn">Order Now</button>
                            </div>

                            <div className="wrapper">
                                <p className="category">Chicken</p>

                                <div className="rating-wrapper">

                                    <div className="wrapper">
                                        
                                        <div className="rating-wrapper">
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                            <ion-icon name="star" role="img" className="md hydrated" aria-label="star"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="h3 card-title">Wendy's Chicken</h3>

                            <div className="price-wrapper">

                                <p className="price-text">Price:</p>

                                <data className="price" value="49.00">$49.00</data>

                                <del className="del">$69.00</del>

                            </div>

                        </div>
                    </li>

                </ul>


            </div>
        </section>
    );
}

export default Menu;
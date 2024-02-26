import React from "react";
import './Blog.css';


const Blog = () => {
    return (
        <section className="section section-divider white blog" id="blog">
            <div className="container">

                <p className="section-subtitle">Latest Blog Posts</p>

                <h2 className="h2 section-title">
                    This Is All About <span className="span">Foods</span>
                </h2>

                <p className="section-text">
                    Food is any substance consumed to provide nutritional support for an organism.
                </p>

                <ul className="blog-list">

                    <li>
                        <div className="blog-card">

                            <div className="card-banner">
                                <img src="/images/blog-1.jpg" width="600" height="390" loading="lazy" alt="What Do You Think About Cheese Pizza Recipes?" className="w-100" />

                                    <div className="badge">Pizza</div>
                            </div>

                            <div className="card-content">

                                <div className="card-meta-wrapper">

                                    <a href="#" className="card-meta-link">
                                        <ion-icon name="calendar-outline" role="img" className="md hydrated" aria-label="calendar outline"></ion-icon>

                                        <time className="meta-info" datetime="2022-01-01">Jan 01 2022</time>
                                    </a>

                                    <a href="#" className="card-meta-link">
                                        <ion-icon name="person-outline" role="img" className="md hydrated" aria-label="person outline"></ion-icon>

                                        <p className="meta-info">Jonathan Smith</p>
                                    </a>

                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title">What Do You Think About Cheese Pizza Recipes?</a>
                                </h3>

                                <p className="card-text">
                                    Financial experts support or help you to to find out which way you can raise your funds more...
                                </p>

                                <a href="#" className="btn-link">
                                    <span>Read More</span>

                                    <ion-icon name="arrow-forward" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
                                </a>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card">

                            <div className="card-banner">
                                <img src="/images/blog-2.jpg" width="600" height="390" loading="lazy" alt="Making Chicken Strips With New Delicious Ingridents." className="w-100" />

                                    <div className="badge">Burger</div>
                            </div>

                            <div className="card-content">

                                <div className="card-meta-wrapper">

                                    <a href="#" className="card-meta-link">
                                        <ion-icon name="calendar-outline" role="img" className="md hydrated" aria-label="calendar outline"></ion-icon>

                                        <time className="meta-info" datetime="2022-01-01">Jan 01 2022</time>
                                    </a>

                                    <a href="#" className="card-meta-link">
                                        <ion-icon name="person-outline" role="img" className="md hydrated" aria-label="person outline"></ion-icon>

                                        <p className="meta-info">Jonathan Smith</p>
                                    </a>

                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title">Making Chicken Strips With New Delicious Ingridents.</a>
                                </h3>

                                <p className="card-text">
                                    Financial experts support or help you to to find out which way you can raise your funds more...
                                </p>

                                <a href="#" className="btn-link">
                                    <span>Read More</span>

                                    <ion-icon name="arrow-forward" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
                                </a>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card">

                            <div className="card-banner">
                                <img src="/images/blog-3.jpg" width="600" height="390" loading="lazy" alt="Innovative Hot Chessyraw Pasta Make Creator Fact." className="w-100" />

                                    <div className="badge">Chicken</div>
                            </div>

                            <div className="card-content">

                                <div className="card-meta-wrapper">

                                    <a href="#" className="card-meta-link">
                                        <ion-icon name="calendar-outline" role="img" className="md hydrated" aria-label="calendar outline"></ion-icon>

                                        <time className="meta-info" datetime="2022-01-01">Jan 01 2022</time>
                                    </a>

                                    <a href="#" className="card-meta-link">
                                        <ion-icon name="person-outline" role="img" className="md hydrated" aria-label="person outline"></ion-icon>

                                        <p className="meta-info">Jonathan Smith</p>
                                    </a>

                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title">Innovative Hot Chessyraw Pasta Make Creator Fact.</a>
                                </h3>

                                <p className="card-text">
                                    Financial experts support or help you to to find out which way you can raise your funds more...
                                </p>

                                <a href="#" className="btn-link">
                                    <span>Read More</span>

                                    <ion-icon name="arrow-forward" aria-hidden="true" role="img" className="md hydrated"></ion-icon>
                                </a>

                            </div>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
}

export default Blog;
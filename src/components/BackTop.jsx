import React, { useEffect, useState } from 'react';
import './Backtop.css';

const Backtop = () => {
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <a href="#top" className={ isActive ? "back-top-btn active" : "back-top-btn"} aria-label="Back to top" >
            <ion-icon name="chevron-up" role="img" className="md hydrated" aria-label="chevron up"></ion-icon>
        </a>
    );
}

export default Backtop;
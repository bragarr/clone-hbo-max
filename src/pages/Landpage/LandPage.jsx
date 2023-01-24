import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hboLogo from '../../assets/img/hbo-max.png';

import './LandPage.css';

export function LandPage() {

    const api = import.meta.env.VITE_API;
    const apiTv = import.meta.env.VITE_TOP_TV;
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiLang = import.meta.env.VITE_LANG_API;
    const apiImg = import.meta.env.VITE_API_IMG;
    const apiSize = import.meta.env.VITE_API_IMG_WIDTH;

    const [topTv, setTopTv] = useState([]);

    const getTopTv = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setTopTv(data.results);
        
    };

    useEffect(() => {
        getTopTv(api+apiTv+apiKey+apiLang)
    }, []);

    return (
        <div >
            <header className="clone__header">
                <nav className="navigation__bar">
                    <Link to={"/"}>
                        <img src={hboLogo} className="site__logo" alt="HBO MAX" />
                    </Link>
                    <div>
                        <Link to={"signIn"} className="link__subscription">SING IN</Link>
                        <Link to={"signUp"} className="link__subscription link__subscription--special ">SING UP NOW</Link>
                    </div>
                </nav>
            </header>
            <article>
                <p>Now streaming blockbuster movies, epic originals, and addictive series.  </p>
                <p>Plans start at $9.99/month.</p>
                <button>SIGN UP NOW</button>
            </article>
        </div>
    );
};
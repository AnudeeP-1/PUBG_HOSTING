import React from 'react';

import './nav.css';

const nav = () => {
    return(
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="nav-tog" />

            <label for="nav-tog" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>home</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>rules</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>find</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>about</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>login/sign up</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default nav;
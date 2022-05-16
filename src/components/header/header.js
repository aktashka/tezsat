import React from "react";

import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-inner">
                <div className="header-logo">
                    <img className="logo-img" src={require('./header-img/header-logo.png')} alt="header-logo"/>
                </div>
                <div className="header-nav">
                    <ul className="nav-ul">
                        <li><a href="#"></a>Для бизнеса</li>
                        <li><a href="#"></a>Блог</li>
                        <li><a href="#"></a>О нас</li>
                        <select className="li-select">
                            <option value='/'>Помощь</option>
                        </select>
                    </ul>
                </div>
                <div className="header-lang">
                <select className="header-select" name="lang" id="lang">
                    <option value="/">RU</option>
                </select>
                </div>
                <button className="header-log">
                    Войти
                </button>
                <button className="header-reg">
                    Регистрация
                </button>
            </div>
        </div>
    )
}

export default Header;
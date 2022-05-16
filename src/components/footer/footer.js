import React from "react";

import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-text">
                    <h2 className="footer-subtitle">
                    TEZ SAT
                    </h2>
                    <p className="footer-subtext">
                    Tez Sat (Тез Сат) - это сервис бесплатных объявлений Кыргызстана.
                    Сервис позволяет подавать бесплатные объявления о купле, продаже, аренде, обмене как б/у, так и новых товаров и услуг.
                    Продажа авто, домов, квартир, электроники, поиск работы и услуг является неотъемлемой частью повседневного бытия.
                    </p>
                </div>

                <div className="footer-link">
                    <h2 className="footer-subtitle">Узнать больше</h2>
                    <ul className="footer-ul">
                        <li><a className="footer-link-a" href="#">Служба поддержки</a></li>
                        <li><a className="footer-link-a" href="#">Карта сайта</a></li>
                        <li><a className="footer-link-a" href="#">О нас</a></li>
                        <li><a className="footer-link-a" href="#">Помощь</a></li>
                        <li><a className="footer-link-a" href="#">Пользовательское соглашение</a></li>
                    </ul>
                </div>

                <div className="footer-download">
                    <h2 className="footer-subtitle">Скачать приложение</h2>
                    <button className="footer-btn">
                        <i class="fa-brands fa-google-play"></i>
                        <a href='#'>Доступно в <br/><span>Google play</span></a>
                        
                    </button>
                    <button className="footer-btn">
                        <i class="fa-brands fa-apple"></i>
                        <a href='#'>Доступно в <br/><span>App Store</span></a>
                        
                        </button>
                </div>

            </div>
            <hr/>

            <div className="footer-end">
                <div className="footer-logo">
                    <img className="logo-img" src={require('../header/header-img/header-logo.png')} alt="footer-logo"/>
                </div>

                <p className="copyright">© 2021 Все права защищены</p>

                <div className="social">
                    <a className="social-link" href="#"><i class="fa-brands fa-telegram"></i></a>
                    <a className="social-link" href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    <a className="social-link" href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a className="social-link" href="#"><i class="fa-brands fa-youtube"></i></a>
                    <a className="social-link" href="#"><i class="fa-brands fa-vk"></i></a>
                    <a className="social-link" href="#"><i class="fa-brands fa-odnoklassniki"></i></a>
                    <a className="social-link" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a className="social-link" href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>

                
            </div>


        </div>
    )
}

export default Footer
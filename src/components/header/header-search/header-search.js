import React from "react";

import './header-search.css'

const Search = () => {
    return (
        <div className="search">
            <form>
                <input className="search-input" type='search' placeholder="Поиск..."/>
                <input className="search-submit" type='submit' value='Найти'/>

                <input className="search-btn" type='button' value='Подать Объявление'/>
            </form>
        </div>
    )
}

export default Search 
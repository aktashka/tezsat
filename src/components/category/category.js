import React from "react";

import './category.css'

const Category = () => {
    return (
        <div className="category">
            <div className="category-inner">
                <h1 className="category-title">Главные категории</h1>
                <div className="category-main">
                    <div className="category-list">
                        <button className="category-item electronica">Электроника</button>
                    </div> 

                    <div className="category-list">
                        <button className="category-item transport">Транспорт</button>
                    </div> 

                    <div className="category-list">
                        <button className="category-item property">Недвижимость</button>
                    </div>
                    
                    <div  className="category-list">
                        <button className="category-item things">Вещи</button>
                    </div> 
                
                    <div className="category-list">
                        <button className="category-item for-home">Все для дома</button>
                    </div> 
                </div>

                <div className="category-sort">
                    <select className="category-filter" name='Все категории'>
                        <option selected>Все категории</option>
                        <option value='electronic'>Электроника</option>
                        <option value='transport'>Транспорт</option>
                        <option value='property'>Недвижимость</option>
                        <option value='property'>Вещи</option>
                        <option value='property'>Все для дома</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Category;
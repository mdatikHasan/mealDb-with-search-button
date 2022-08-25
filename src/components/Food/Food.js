import React, { useEffect, useState } from 'react';
import FoodDetail, { mealdtl } from '../FoodDetail/FoodDetail';



const Food = (props) => {
    // const [mealDetail, setMealDetail] = useState({})
    // const [detail, setDetail] = useState({})
    const { strMeal, strMealThumb, strCategory, strInstructions, strYoutube } = props.meal;


    // console.log(props.meal);
    // console.log(detail);

    /* useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetail}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.meals))
        // console.log(url);
    }, [mealDetail]) */

     const {foodDetailBtn} = props
    // console.log(mealDetail)
    return (
        <div className="col">
            <div className="card">
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{strMeal}</h3>
                    <h5 className="card-title">{strCategory}</h5>
                    <p className="card-text">{(strInstructions).slice(0, 300)} <a href={strYoutube} target="blank"><span>see more in youtube?</span> click here</a></p>
                    <button>Add to Cart</button>
                    <button onClick={() => foodDetailBtn(props.meal.idMeal)}>See Detail</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Food;
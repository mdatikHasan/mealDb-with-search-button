import React from 'react';

const FoodDetail = (props) => {
    console.log(props.meal);
    return (
        <div>
            <div className="card" >
                <img src={props.meal.strMealThumb} className=" w-25 card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.meal.strMeal}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;
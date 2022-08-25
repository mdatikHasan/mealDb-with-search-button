import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import FoodDetail from '../FoodDetail/FoodDetail';


const Foods = () => {
    let [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchField, setSearchField] = useState('');
    const [mealDetail, setMealDetail] = useState([])

    // console.log(mealDetail)
    // if search text is blank that means when search box are blank then food cant see 
    /*  if all items show when if this code are delete if(searchText === '') {
        meals = []
    }
    code are here below
    */
    if (searchText === '') {
        meals = [];
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
            ;
    }, [searchText, searchField]);


    const foodDetailBtn = mealId => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMealDetail(data.meals))

    }




    const seachInput = e => {
        setSearchField(e.target.value);
    }

    const searchbtn = () => {

        setSearchText(searchField)
    }
    return (
        <div className='foods'>
            <h1>This is Foods</h1>
            <div>
                <div>
                    <input onChange={seachInput} type="text" className='mt-4' placeholder='search foods' />
                    <button onClick={searchbtn}>Search</button>

                    <h5 className='mt-3'>{meals.length ? 'Food item: ' + meals.length : `Please search food by name`}</h5>
                </div>
                {
                    mealDetail.map(meal => <FoodDetail meal={meal}></FoodDetail>)
                    
                }

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
                    {
                        meals.map(meal => <Food foodDetailBtn={foodDetailBtn} key={meal.idMeal} meal={meal}></Food>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;
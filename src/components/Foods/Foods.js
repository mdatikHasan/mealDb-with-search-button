import React, { useEffect, useState } from 'react';

const Foods = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchField, setSearchField] = useState('');


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        ;
    }, [searchText])

    const seachInput = e => {
        setSearchField(e.target.value);
    }

    const searchbtn = () => {
        setSearchText(searchField)
    }
    return (
        <div>
            <h1>This is Foods</h1>
            <div>
                <input onChange={seachInput} type="text" placeholder='search foods' />
                <button onClick={searchbtn}>Search</button>
            </div>
        </div>
    );
};

export default Foods;
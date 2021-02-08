import React, {useEffect, useState} from 'react';

// Components
import Recipe from '../project01/Recipe'

// CSS
import './Project01.css';

// Images
import leftRightArrow from '../project01/images/left-right-arrow.png'

function Project01() {

    const APP_ID = "25fbb60d";
    const APP_KEY = "875753a058beb4a482ef8758f05b4399";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]);

    async function getRecipes() {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();

        setRecipes(data.hits);
    };

    function updateSearch(e) {
        setSearch(e.target.value);
    }

    function getSearch(e) {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className ="project01">
            <form className="search-form" onSubmit={getSearch}>
                <input placeholder="Search Recipes" className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">
                    Go!
                </button>
            </form>
            
            <main className="recipes_container">
                {recipes.map(dish => (
                    <Recipe
                    key={dish.recipe.label}
                    url={dish.recipe.url}
                    image={dish.recipe.image}
                    title={dish.recipe.label}
                    calories={dish.recipe.calories}/>
                ))}

                <div className="last"></div>
            </main>

            <img src={leftRightArrow} id="scroll_guide" alt="horizontal scroll guide"></img>
        </div>
    );
};

export default Project01
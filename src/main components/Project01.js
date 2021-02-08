import React, {useEffect, useState} from 'react';

// Components

// CSS
import './Project01.css';

// Images

function Project01() {

    const [search, setSearch] = useState('');
    function updateSearch(e) {
        setSearch(e.target.value);
    }


    return (
        <div className ="project01">
            <form className="search-form" onSubmit={getSearch}>
                <input placeholder="Search Recipes" className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">
                    Go!
                </button>
            </form>
            
        </div>
    );
};

export default Project01
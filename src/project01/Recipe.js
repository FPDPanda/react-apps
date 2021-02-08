import React, {useState} from 'react'

// CSS
import './Recipe.css'

function Recipe({url, image, title, calories}) {
    return (
        <a className="recipes" href={url} target="_blank">
            <img src={image}></img>
            <h1>{title}</h1>
            <p>{Math.floor(calories)} Calories</p>
        </a>
    )
}

export default Recipe

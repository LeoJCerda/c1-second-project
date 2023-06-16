import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')

    const apiKey = '044e49796e7744febbfae2f8872d03b4'
    const url = `https://api.spoonacular.com/food/search?apiKey=${apiKey}&query=${search}&number=10`;
    // https://api.spoonacular.com/recipes/{id}/information
    useEffect(() => {
        axios(url)
        .then(res => setRecipes(res.data.searchResults[0].results))
    }, [url])
    console.log(recipes)
  return (
    <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
        {recipes.map((recipe) => (
            <div>
                <li>{recipe.name}</li>
            </div>
        ))}
    </div>
  )
}

export default Recipes
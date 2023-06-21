import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'

const Detail = () => {
    const [detail, setDetail] = useState({})
    const params = useParams()
    const {setFavs, favs} = useRecipeStates()

    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`

    useEffect(() => {
        axios(url)
        .then(res => setDetail(res.data))
    }, [])

    console.log(detail)
    console.log(params);
  return (
    <div>
        Detail n° {params.id}
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="" />
        <p>Ingredientes: </p>
        {detail.extendedIngredients?.map((ingredients) => <li key={ingredients.id}>{ingredients.name}</li>)}
        <button
          onClick={() => setFavs((prevFavs) => [...prevFavs ,detail])}
          // onClick={() => setFavs([...favs ,detail])} Lo mismo que la linea de arriba
        >⭐</button>
    </div>
  )
}

export default Detail
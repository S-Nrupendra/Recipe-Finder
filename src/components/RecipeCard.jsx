import React from 'react'
import "./styles/RecipeCard.css"

const RecipeCard = ({recipe}) => {
  return <div className='recipe-card'>
    <img src={recipe.strMealThumb} alt=''/>
    <h3>{recipe.strMeal}</h3>
    <p>{recipe.strCategory}</p>
  </div>
}

export default RecipeCard

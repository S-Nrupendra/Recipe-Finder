import React from 'react'

const RecipeModel = ({recipe, onClose}) => {
  if(!recipe) return null;

  // collect ingredients + measure
  const ingredients = [];

  for(let i = 1;i <= 20;i++){
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if(ingredient && ingredient.trim() !== ""){
      ingredients.push(`${measure ? measure:""} ${ingredient}`.trim());
    }
  }

  // split the instructions into clean bullet points

  const steps = recipe.strInstructions 
    ? recipe.strInstructions
      .split(/[.\n]/)
      .map((step) => step.trim())
      .filter((step)=>step.length > 3)
    : [];
  return (
    <div className='model' onClick={onClose}>
      <div className='model-full' onClick={(e)=>e.stopPropagation()}>
        <button className='close-btn' onClick={onClose}>
          x
        </button>

        <div className='model-body'>
          <div className='model-image'>
            <img src={recipe.strMealThumb}/>
          </div>
          <div className='model-details'>
            <h2>{recipe.strMeal}</h2>
            <p>
              <strong>Category:</strong>{recipe.strCategory}
            </p>
            <p>
              <strong>Area:</strong>{recipe.strArea}
            </p>
            {
              ingredients.length > 0 && (
                <div className='ingredients-section'>
                  <h3>Ingredinets</h3>
                  <ul>
                    {ingredients.map((item,index)=>(
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            }
            {
              steps.length > 0 && (
                <div className='instructions'>
                  <h3>Process:</h3>
                  <ol>
                    {steps.map((step,index)=>(
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )
            }

            {
              recipe.strYoutube && (
                <a href={recipe.strYoutube} target='_blank' className='youtube-link'>
                  Watch on Youtube
                </a>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeModel
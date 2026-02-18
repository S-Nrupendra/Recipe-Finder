import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../utils/api';
import RecipeCard from '../components/RecipeCard';
import "./Home.css"

const Home = () => {
  const [chickenRecipes, setChickenRecipes] = useState([]);
  const [soupRecipes, setSoupRecipes] = useState([]);
  const [exploreAll, setExploreAll] = useState([]);

  useEffect(() => {
    const fetchData = async() =>{
      const chicken = await fetchRecipes("chicken");
      setChickenRecipes(chicken);
      const soup = await fetchRecipes("soup");
      setSoupRecipes(soup);
      const all = await fetchRecipes("a");
      setExploreAll(all);
    };
    fetchData();
  },[])

  return( <div className='home-container'>
      <div className='section'>
        <h2>Chicken Recipes</h2>
        <div className='recipe-grid'>
          {
            chickenRecipes.map((r) => (
              <RecipeCard key={r.idMeal} recipe={r}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Home
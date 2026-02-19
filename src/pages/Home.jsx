import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../utils/api';
import RecipeCard from '../components/RecipeCard';
import "./Home.css"

const Home = () => {
  const [chickenRecipes, setChickenRecipes] = useState([]);
  const [soupRecipes, setSoupRecipes] = useState([]);
  const [exploreAll, setExploreAll] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const fetchData = async() =>{
      const chicken = await fetchRecipes("chicken");
      setChickenRecipes(chicken.slice(0,6));
      const soup = await fetchRecipes("soup");
      setSoupRecipes(soup.slice(0,6));
      const all = await fetchRecipes("a");
      setExploreAll(all);
    };
    fetchData();
  },[])

  const showMore = () => {
    setVisibleCount((prev)=>prev+5);
  }

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

      <div className='section'>
        <h2>Soup Recipes</h2>
        <div className='recipe-grid'>
          {
            soupRecipes.map((r) => (
              <RecipeCard key={r.idMeal} recipe={r}/>
            ))
          }
        </div>
      </div>

      <div className='section'>
        <h2>Explore All Recipes</h2>
        <div className='recipe-grid'>
          {
            exploreAll.slice(0,visibleCount).map((r) => (
              <RecipeCard key={r.idMeal} recipe={r}/>
            ))
          }
        </div>
        {
          visibleCount < exploreAll.length && (
          <button className='load-more' onClick={showMore}>Show More</button>
        )}
      </div>
    </div>
  );
}

export default Home
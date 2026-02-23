import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../utils/api';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';
import "./Home.css"
import RecipeModel from '../components/RecipeModel';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [chickenRecipes, setChickenRecipes] = useState([]);
  const [soupRecipes, setSoupRecipes] = useState([]);
  const [exploreAll, setExploreAll] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const [loading, setLoading] = useState(true);

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async() =>{
      setLoading(true);
      const chicken = await fetchRecipes("chicken");
      setChickenRecipes(chicken.slice(0,6));
      const soup = await fetchRecipes("soup");
      setSoupRecipes(soup.slice(0,6));
      const all = await fetchRecipes("a");
      setExploreAll(all);
      setLoading(false);
    };
    fetchData();
  },[])

  const showMore = () => {
    setVisibleCount((prev)=>prev+5);
  }

  if(loading) return <Loader />;
  return( <div className='home-container'>
      <SearchBar />
      <div className='section'>
        <h2>Chicken Recipes</h2>
        <div className='recipe-grid'>
          {
            chickenRecipes.map((r) => (
              <RecipeCard key={r.idMeal} recipe={r} selected={setSelectedRecipe}/>
            ))
          }
        </div>
      </div>

      <div className='section'>
        <h2>Soup Recipes</h2>
        <div className='recipe-grid'>
          {
            soupRecipes.map((r) => (
              <RecipeCard key={r.idMeal} recipe={r} selected={setSelectedRecipe}/>
            ))
          }
        </div>
      </div>

      <div className='section'>
        <h2>Explore All Recipes</h2>
        <div className='recipe-grid'>
          {
            exploreAll.slice(0,visibleCount).map((r) => (
              <RecipeCard key={r.idMeal} recipe={r} selected={setSelectedRecipe}/>
            ))
          }
        </div>
        {
          visibleCount < exploreAll.length && (
          <button className='load-more' onClick={showMore}>Show More</button>
        )}
      </div>
      {
        selectedRecipe && (
          <RecipeModel recipe={selectedRecipe} onClose={()=>setSelectedRecipe(null)}/>
        )
      }
    </div>
  );
}

export default Home
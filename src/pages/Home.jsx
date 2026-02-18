import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../utils/api';

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

  return (
    <div>
      Home
    </div>
  )
}

export default Home
Home
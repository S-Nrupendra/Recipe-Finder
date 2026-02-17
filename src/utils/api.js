const fetchRecipes = async(query = "") =>{ // Default to empty string if no query provided
    // Loads recipes from the API based on the search query
    try{
        const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await res.json();
        return data.meals || [];
    }catch(err){
        console.log("Error fetching data:", err);
        return [];
    }
};
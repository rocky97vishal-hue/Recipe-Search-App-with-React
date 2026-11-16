import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook - useRecipes, fetching API data from theMealDB API server
function useRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=a').then((response) => {
            setRecipes(response.data.meals);
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    return { recipes, error, loading };
}

export default useRecipes
import React from 'react'
import { useState } from 'react';
import useRecipes from '../hooks/useRecipes';
import Footer from '../components/Footer';

//Recipe component - display the recipe cards
function Recipe({ navigate, favourites, isFav, searchTerm, setSearchTerm, clickedItem, setClickedItem }) {
    //Extracting items from custom hook
    const { recipes, error, loading } = useRecipes();
    //Handling card clicks
    const cardClick = (item) => {
        navigate(`/recipe-info/${item.idMeal}`);
        try {
            setClickedItem(item);
            console.log("success");
        }
        catch (err) {
            console.log("clickedItem error", err);
        }
    };
    const [query, setQuery] = useState(searchTerm || '');
    //Handling search
    const handleClick = (e) => {
        e.preventDefault();
        setSearchTerm(query);
    };

    if (loading) {
        return (
            <div className='d-flex flex-column justify-content-center align-items-center mt-5' >

                <div className='spinner-border text-info' style={{ width: "3rem", height: "3rem", borderWidth: "0.3em" }}></div>
                <p className='fw-bold'>Loading recipes</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='d-flex flex-row justify-content-center align-items-center mt-5 pt-5'>
                <p> Error loading recipes {error}</p>

            </div>
        );
    }
    //Filtering recipes based on searchTerm if exists, or show all recipes 
    const filteredRecipes = recipes.filter((item) => {
        const searchItem = searchTerm.toLowerCase().trim();
        if (!searchItem) return true;

        const meal = item.strMeal?.toLowerCase().includes(searchItem) || false;
        const area = item.strArea?.toLowerCase().includes(searchItem) || false;
        const category = item.strCategory?.toLowerCase().includes(searchItem) || false;
        const ingredient = Object.keys(item).some((k) => {
            return (
                k.startsWith('strIngredient') &&
                item[k] &&
                item[k].toLowerCase().includes(searchItem)
            );
        })

        return meal || area || category || ingredient;

    }
    )

    return (
        <div className=''>

            <div className='container mt-5 mb-5 pb-5'>
                <div className='row g-4'>
                    <div className='col-12 mt-5 mb-5'>
                        <form onSubmit={handleClick}>
                            <div className='input-group'>
                                <input
                                    type='text'
                                    placeholder='Search your favourite recipes here'
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className='form-control shadow-none'
                                />
                                <button type='submit' className='btn btn-danger shadow-sm'>Submit</button>
                            </div>
                        </form>
                    </div>

                    {filteredRecipes.length === 0 ? (

                        <div className='mt-5'>
                            <p className='mt-5 text-muted fs-5'>No recipes found for "{searchTerm}"</p>

                            <p className='mt-5 fs-5 fst-italic'>Try searching for another dish or ingredient.</p>
                        </div>
                    ) :
                        (filteredRecipes.map((item) => {
                            const toggle = favourites.some((m) => m.idMeal === item.idMeal);

                            return (
                                <div key={item.idMeal} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                                    <div className='card h-100 shadow-sm rounded-4 border border-secondary-subtle overflow-hidden' style={{ borderRadius: "1rem", overflow: "hidden", cursor: "pointer" }} onClick={() => cardClick(item)}>
                                        <img src={item.strMealThumb} className='card-img-top rounded-top-4 p-0' style={{ height: "180px", objectFit: "cover", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} />
                                        <div className='card-body d-flex flex-column justify-content-between'>
                                            <div className='d-flex gap-2 mb-3'>
                                                <span className='badge bg-secondary rounded-pill'>{item.strCategory}</span>
                                                <span className='badge bg-secondary rounded-pill'>{item.strArea}</span>
                                            </div>
                                            <p className='fw-bold'>{item.strMeal}</p>
                                            <button className='btn btn-dark w-100 shadow-none' onClick={(e) => isFav(item, e)}>{toggle ? 'Added to favourites ❤️' : 'Add to favourites 🤍'}</button>

                                        </div>
                                    </div>
                                </div>
                            );
                        }))
                    }
                </div>
            </div>
        </div>
    )
}

export default Recipe
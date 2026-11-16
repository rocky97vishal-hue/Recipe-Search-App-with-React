import React from 'react'
import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import RecipeDetail from '../pages/RecipeDetail'
import Favourites from '../pages/Favourites'
import { Link } from 'react-router-dom'

// Navbar with route options for the links
function Navbar() {
    return (
        <div className='mb-5'>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <div className='container'>
                    <div className='navbar-brand fs-6 fw-bold fst-italic'>Crunchy Vibes</div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/recipe">Recipe</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/recipe-info">Recipe Detail</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/favourites">Favourites</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
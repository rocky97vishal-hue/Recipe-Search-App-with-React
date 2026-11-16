import React from 'react'
import Footer from '../components/Footer'

//Home component - Home section
function Home({ navigate }) {
  return (
    <div className='d-flex flex-column' >

      <div className='container mt-5 flex-grow-1 pb-5 mb-5'>
        <div className='row g-4 bg-success rounded'>
          <div className='col-12 pb-4'>
            <div className='' >
              <div className='badge rounded-pill bg-info mb-3 ms-5 mt-1'>
                <span className='fs-6 text-white'>DISCOVER AND COOK</span>
              </div>
              <p className='fw-bold fs-3 ms-5 text-white'>Delicious Recipes for Everyday Meals</p>
              <p className='ms-5 fs-6 text-white'>Search through thousands of recipes from world cuisines, save your personal favourites, and start cooking effortlessly today!</p>
              <button className='btn btn-light text-success mt-2 ms-5 rounded fw-bold shadow-none' onClick={() => navigate('/recipe')}>Explore Recipes</button>
            </div>
          </div>
        </div>
        <div className='fs-5 fw-bold mb-2 pt-5'>
          <p className='fst-italic'>Trending Dishes</p>
          <div className='row g-4'>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <div className='card h-100  shadow-sm border-success'>
                <img></img>
                <div className='card-body'>
                  <p className='text-center fs-1'>🍗</p>
                  <p className='card-title fw-bold fs-6 text-truncate text-center'>Chicken Varieties</p>
                  <p className='card-text text-truncate text-muted text-center fs-6'>Spicy-wicy</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <div className='card h-100  shadow-sm border-success'>
                <img></img>
                <div className='card-body'>
                  <p className='text-center fs-1'>🍝</p>
                  <p className='card-title fw-bold fs-6 text-truncate text-center'>Pasta Varieties</p>
                  <p className='card-text text-truncate text-muted text-center fs-6'>Peppery</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <div className='card h-100  shadow-sm border-success'>
                <img></img>
                <div className='card-body'>
                  <p className='text-center fs-1'>🐟</p>
                  <p className='card-title fw-bold fs-6 text-truncate text-center'>Seafood Varieties</p>
                  <p className='card-text text-truncate text-muted text-center fs-6'>Hot & fiery</p>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
              <div className='card h-100  shadow-sm border-success'>
                <img></img>
                <div className='card-body'>
                  <p className='text-center fs-1 fs-1'>🍰</p>
                  <p className='card-title fw-bold fs-6 text-truncate text-center'>Dessert Varieties</p>
                  <p className='card-text text-truncate text-muted text-center fs-6'>Yummy</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
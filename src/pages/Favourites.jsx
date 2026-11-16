import React from 'react'
import Footer from '../components/Footer';

//Favourites component - contains recipes added to favourites list
function Favourites({ favourites, navigate, setFavourites }) {
  //removeButton function to remove the recipe from the favourites list
  const removeButton = (cardId, e) => {
    e.stopPropagation();
    const removeItem = favourites.filter((s) => s.idMeal !== cardId.idMeal);
    setFavourites(removeItem);
  };
  //favourites section management
  return (
    <div className='d-flex flex-column mb-5 pb-5'>
      <div className='container py-3'>
        <p className='fw-bold fst-italic fs-3 mb-0 pt-5'>Explore your<span className='text-danger'> favourite </span>recipes !</p>

        {favourites.length === 0 ? (

          <div className='d-flex flex-column justify-content-center align-items-center w-100' style={{ height: 'calc(100dvh - 280px)' }} >
            <p className='fs-5 fst-italic text-secondary mt-0 p-0'>Your favourites list is currently empty.</p>
            <p className='fs-5'>Start<span className='text-danger'> exploring</span> and save the recipes you love most!</p>
            <button className='btn btn-danger rounded-pill shadow-none' onClick={() => navigate('/recipe')}>Explore recipes</button>
          </div>

        ) : (
          <div className="row g-4 my-0">
            {
              favourites.map((item) => {
                return (
                  <div key={item.idMeal} className='col-12 col-sm-6 col-md-4 col-lg-3' >
                    <div className='card h-100 shadow-sm rounded-4 border border-secondary-subtle overflow-hidden' style={{ borderRadius: "1rem", overflow: "hidden", cursor: "pointer" }} onClick={() => navigate(`/recipe-info/${item.idMeal}`)}>
                      <img src={item.strMealThumb} className='card-img-top rounded-top-4 p-0 img-fluid' style={{ height: "180px", objectFit: "cover", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} />
                      <div className='card-body d-flex flex-column justify-content-between'>

                        <div className='d-flex gap-2'>
                          <p className='badge badge-sm bg-secondary rounded-pill'>{item.strCategory}</p>
                          <p className='badge badge-sm bg-secondary rounded-pill'>{item.strArea}</p>
                        </div>
                        <p className='fw-bold'>{item.strMeal}</p>
                        <button className='btn btn-dark w-100 shadow-none' onClick={(e) => removeButton(item, e)}>Remove</button>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Favourites
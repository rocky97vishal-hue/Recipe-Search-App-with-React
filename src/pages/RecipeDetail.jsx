import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import useRecipes from '../hooks/useRecipes';
import Footer from '../components/Footer';


function RecipeDetail({ navigate, clickedItem, setClickedItem }) {
  //Custom hook
  const { recipes } = useRecipes();
  //useParams
  const { id } = useParams();

  //Checking if id is present
  if (!id) {
    return (
      <div
        className='w-100 text-center d-flex flex-column justify-content-center align-items-center overflow-hidden'
        style={{ height: 'calc(100dvh - 62px)' }} // Forces exact screen height minus navbar/footer
      >
        <div className='rounded bg-light d-flex flex-column justify-content-center align-items-center p-5 shadow-sm' style={{ maxWidth: "800px", width: "90%" }}>
          <p className='fs-1 fw-bold pt-3'>No Recipe Selected Yet</p>
          <p className='fs-6 text-muted'>Click on any recipe from the list to view its complete details here.</p>
          <button className='btn btn-danger m-3 rounded-pill shadow-sm' onClick={() => navigate('/recipe')}>Explore recipes</button>
        </div>
      </div>
    );
  }


  //Finding recipe
  const findRecipe = recipes?.find((d) => d.idMeal === id);
  // const storedRecipe = JSON.parse(localStorage.getItem('Info'));
  const activeRecipe = findRecipe || clickedItem?.[0];

  if (!activeRecipe) {

    return (
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: 'calc(100dvh - 102px)' }}>
        <div className='spinner-border text-info fw-bold' style={{ width: "3rem", height: "3rem", borderWidth: "5px" }}></div>
        <div className='mt-5 text-muted fs-5'>Loading recipe details!</div>
        <button className='btn btn-dark mt-3 shadow-none' onClick={() => navigate('/recipe')}>Back</button>
      </div>
    );
  }

  //Using the help of array to display the ingredients with quantity
  const rawMaterials = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = activeRecipe[`strIngredient${i}`];
    const measure = activeRecipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== '') {
      rawMaterials.push({
        idMeal: activeRecipe.idMeal,
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : ''
      });
    }

  }

  const instructions = activeRecipe.strInstructions.split(/(?:step\s*\d+|(?<=\.\s*|\n|^)\d+)\.?\s*/i).filter((item) => item.trim() !== '').map((item, i) => {
    return (
      <p key={i}><strong><i>Step {i + 1}.</i> </strong>{item.trim()}</p>
    );

  }
  );


  return (

    <div className='container mb-5 pb-5'>
      <button className='btn btn-danger mt-5 shadow-none' onClick={() => navigate(-1)}>Back</button>
      <div className='w-100 mt-3 d-flex flex-column justify-content-center align-items-center'>
        <p className='fw-bold fs-3'>{activeRecipe.strMeal}</p>
        <div className='d-flex justify-content-around w-75'>
          <img src={activeRecipe.strMealThumb} className='w-50 mt-3' style={{ height: "350px" }} />
          <div>
            <p className='fw-bold w-50 fs-6 text-center pt-5'>Ingredients:</p>
            <div>
              <ul>
                {
                  rawMaterials.map((r, i) => (
                    <li key={i}>{r.measure}, {r.ingredient}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>


        <div className='mb-5'>
          <p className='mt-5 fw-bold fs-6 text-center'>Recipe preparation instructions:</p>
          <div className='container'>
            {instructions}
          </div>
        </div>
      </div>
    </div>


  );











}

export default RecipeDetail
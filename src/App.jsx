import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import RecipeDetail from './pages/RecipeDetail'
import Favourites from './pages/Favourites'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import Footer from './components/Footer'

function App() {
  //useNavigate hook
  const navigate = useNavigate();
  //Setting the states
  const[searchTerm, setSearchTerm] = useState('');
  const[favourites, setFavourites] = useState(()=>{
      try{
        const saved = localStorage.getItem('Favs');
        return saved ? JSON.parse(saved) : [];
      }
      catch(err){
        console.log("Error: ", err);
        return [];
      }
    });
    //Adding data to Favourites array 
    useEffect(()=>{
      try{
        localStorage.setItem('Favs', JSON.stringify(favourites));
      }
      catch(err){
        console.log("Error: useEffect ", err);
      }
    }, [favourites]);
    //Checking is item added to Favourites array
    const isFav = (id, e) =>{
        e.stopPropagation();
        const isAdded = favourites.some((t)=> t.idMeal === id.idMeal);
        if(isAdded){
            const addedAlready = favourites.filter((s)=> s.idMeal !== id.idMeal);
            setFavourites(addedAlready);
        }
        else{
            setFavourites([...favourites, id]);
        }
      };
    //Clicked item to display the recipe informations   
    const[clickedItem, setClickedItem] = useState(()=>{
              try{
                const savedInfo = localStorage.getItem('Info');
                return savedInfo ? JSON.parse(savedInfo) : [];
              }
              catch(err){
                console.log("Error: ", err);
                return [];
              }
            });
        
            useEffect(()=>{
              try{
                localStorage.setItem('Info', JSON.stringify(clickedItem));
              }
              catch(err){
                console.log("Error: useEffect ", err);
              }
        
            }, [clickedItem]);
  return (
    <div className='app-container'>
      <Navbar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />}/>
        <Route path="/recipe" element={<Recipe navigate={navigate} clickedItem={clickedItem} setClickedItem={setClickedItem}
         favourites={favourites} setFavourites={setFavourites} isFav={isFav} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}/>
        <Route path="/recipe-info/:id?" element={<RecipeDetail navigate={navigate} clickedItem={clickedItem} setClickedItem={setClickedItem}/>}/>
        <Route path="/favourites" element={<Favourites isFav={isFav} favourites={favourites} navigate={navigate} setFavourites={setFavourites}/>}/>
      </Routes>
      </main>
    <Footer />
    </div>
      
  )
}

export default App
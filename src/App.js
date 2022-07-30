
import './App.css';
import {useEffect , useState} from 'react'
import React from 'react';
import MoviesCard from './MoviesCard';
import SearchBar from './SearchBar';

function App() {
  const [movies,setMovies]=useState([]);
  const [loading ,setLoading]=useState(true);
  const [userInput , setUserInput]=useState();
  useEffect(()=>{
    getMoviesData();
  } ,[])
  const getMoviesData = async ()=>{
    const apiResponse= await fetch(`http://www.omdbapi.com/?s=${userInput}&apikey=2e93e68c`);
    // console.log(apiResponse);
    const data = await apiResponse.json();
    
    // console.log(data);
    
    setMovies(data.Search);
    // console.log(movies);
    setLoading(false);

  }
  

  return (
    <div className="App ">
      <div className='bg-orange-300 font-bold text-3xl mx-auto'>
            <h1>Movies App</h1>

        </div>

      
      
      <SearchBar userInput={userInput} setUserInput={setUserInput} getMoviesData={getMoviesData}/>
      {/* {movies.map((value,index)=>{
        return(
          <>
         <h3 className='bg-red-200' key={index}> {value.Poster}</h3>
         <a src={value.Poster}/>
         </>
        )

      })} */}
      <div className='flex flex-wrap justify-between'>
      {loading? "Loading data":  movies.map((value,index)=>{
        return(<MoviesCard value={value}/>)})}
        </div>

      {/* <MoviesCard movies={movies}/> */}
    </div>
  );
}

export default App;

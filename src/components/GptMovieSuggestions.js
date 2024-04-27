import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const movies=useSelector((store)=>store.movies);

  //My open ai api key is not working thats why i render the stored movies only
  // future i will update


  // if(!movieNames) return null;

   
  return (
    <div className='md:p-4 md:m-4 bg-black text-white bg-opacity-90'>
      <div>
        
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default GptMovieSuggestions
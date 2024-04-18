import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies=useSelector(state=>state.movies);

  return (
    <div>

      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      {/* 

       MovieList - Popular
       MovieList - Now Playing
       MovieList - Trending
       MovieList - Horror

      
      */}


    </div>
  )
}

export default SecondaryContainer
import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies=useSelector((state)=>state.movies);
  return  (movies.nowPlayingMovies && (
    <div className=" bg-black">
      <div className="-mt-52 relative z-20">

      
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.PopularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
      {/*   

       MovieList - Popular
       MovieList - Now Playing
       MovieList - Trending
       MovieList - Horror

      
      */}


    </div>
  )
)
}

export default SecondaryContainer
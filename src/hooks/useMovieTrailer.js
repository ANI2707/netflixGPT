import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
    const dispatch=useDispatch();

    const  trailerVideo=useSelector((state)=>state.movies.trailerVideo);
  //fetch trailer video and updating the store trailer video data
  
  const getMovieVideo=async()=>{
    const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json=await data.json();
    // console.log(json);

    const filterData=json.results.filter(video=>video.type==="Trailer");
    const trailer=filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));

  }
  useEffect(()=>{
    !trailerVideo &&getMovieVideo();
  },[]);
}
export default useMovieTrailer;
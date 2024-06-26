import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies=useSelector(state=>state.movies?.nowPlayingMovies);

  if(!movies) return;//early return if movie not present

  const mainMovie=movies[0];
  console.log(mainMovie);

  const {original_title,overview,id}=mainMovie;

  return (
    <div className="bg-black pt-[20%] md:pt-[10%]">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
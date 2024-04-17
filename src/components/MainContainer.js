import { useSelector } from "react-redux"

const MainContainer = () => {
    const movies=useSelector(state=>state.movies.length)
  return (
    <div>MainContainer</div>
  )
}

export default MainContainer
import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {BG_IMAGE} from "../utils/constants"
const GptSearch = () => {
  return (
    <div>
      <div className="fixed  -z-10">
        <img
          className="w-screen min-h-screen object-cover"
          
          src={BG_IMAGE}
          alt="backgroundImg"
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
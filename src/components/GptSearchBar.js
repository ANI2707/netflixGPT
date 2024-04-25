import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector((state) => state.config.lang);

  const dispatch=useDispatch();

  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json=await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead.Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya ";

    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!getResults.choices) {
      //TODO :Write Error Handling
    }

    // console.log(getResults.choices?.[0]?.message?.content);

    const gptMovies = getResults.choices?.[0]?.message?.content.split(",");

      //For each movie I will search TMDB API
      const PromiseArray=gptMovies.map(movie=>searchMovieTMDB(movie));
      //[Promise,Promise,Promise,Promise,Promise] we get 5 promises bcoz searchMovieTMDB is the async funnction

      const tmdbResults = await Promise.all(PromiseArray);//it will take array of promises

      // console.log(tmdbResults);

      dispatch(addGptMovieResults({gptMovies,tmdbResults}))


  };
  

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" bg-black w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="outline-none rounded-sm p-4 m-4 col-span-9 "
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 "
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

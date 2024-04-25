import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'



const GptSearchBar = () => {
  const languageKey=useSelector(state=>state.config.lang);

  const searchText=useRef(null);

  const handleGptSearchClick =async()=>{
    console.log(searchText.current.value);
    //make an API call to GPT API and get Movie Results

    const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query"+searchText.current.value+". only give me names of 5 movies, comma seperated like the example result given ahead.Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya ";

    const getResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(getResults.choices);
  }
  return (
    <div className='pt-[10%] flex justify-center'>
        
        <form onSubmit={(e)=>e.preventDefault()} className=' bg-black w-1/2 grid grid-cols-12'>
            <input ref={searchText}  type="text" className='outline-none rounded-sm p-4 m-4 col-span-9 '  placeholder={lang[languageKey].gptSearchPlaceholder}/>
            <button onClick={handleGptSearchClick} className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 '>{lang[languageKey].search}</button>

        </form>
    </div>
  )
}

export default GptSearchBar
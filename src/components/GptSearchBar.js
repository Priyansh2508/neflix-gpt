import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import ai from "../utils/genai";
import { API_OPTIONS } from "../utils/constants";
import { addGenaiMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
const dispatch = useDispatch();
const langKey = useSelector((store) => store.config?.lang || "en");
const searchText = useRef(null);

//search the movie in tmdb
const searchMovieTMDB = async(movie)=>{
const data = await fetch(
  "https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1",
  API_OPTIONS
);
const json = await data.json()

return json.results;
}

const handleGptSearchClick = async () => {
    // Logic to handle GPT search click can be added here
    console.log(searchText.current.value);

    const genaiResults =await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:"Act as a movie recommendation system and suggest some movies for the query :" + searchText.current.value +". Only give me names of 5 movies (no year of movie), comma seperated like the example ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya",
  });
  console.log(genaiResults.text);

  const genaiMovies=genaiResults.text.split(",");//converts 5 movies into an array

  const promiseArray = genaiMovies.map(movie => searchMovieTMDB(movie));//searches for movie through tmdb api

  const tmdbResults = await Promise.all(promiseArray);

  console.log(tmdbResults);

  dispatch(addGenaiMovieResult({movieNames : genaiMovies, movieResults :tmdbResults}));


    {/*const gptResults = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: "Act as a movie recommendation system and suggest some movies for the query :" + searchText.current.value +"Provide only 5 movies in a vertical manner" },
      ],
    });*/}
};



    return (
        <div className="flex justify-center items-center ">
          <form className="p-6 bg-black mt-[10%] w-9/12 rounded-3xl bg-opacity-60 flex justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle search submission logic here
          }}
          >
            <input ref={searchText} type="text" className="border border-gray-300 p-2 rounded w-10/12" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button type="submit" className="bg-red-700 text-white p-2 rounded w-2/12"
            onClick={handleGptSearchClick}
            >{lang[langKey].search}</button>
          </form>
        </div>
    );
}
export default GptSearchBar;

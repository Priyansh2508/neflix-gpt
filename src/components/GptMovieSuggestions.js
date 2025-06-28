import { useSelector } from "react-redux";
import MoviesList from "./MoviesList"

const GptMovieSuggestions = () => {

const {movieResults , movieNames}=useSelector(store => store.gpt);

if(!movieNames) return null;


    return (
        <div className=" text-white z-40 bg-opacity-0">
            <div>
                {movieNames.map((movieName, index) =>  <MoviesList key={movieName} title ={movieName} movies = {movieResults[index]}/>)}
            </div>
         
        </div>
    );
}
export default GptMovieSuggestions;
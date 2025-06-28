import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse=()=>{

const showGptSearch=useSelector((store) => store.gpt.showGptSearch); // Access the GPT search view state from Redux store

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();


    return(
        <div>
           <Header />
           {
            showGptSearch ?
            (<GptSearch /> ):
            (
            <>
            <MainContainer />
            <SecondryContainer />
            </>
            )
           }
       </div>
    )
}
export default Browse;
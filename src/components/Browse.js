import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse=()=>{

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();

    return(
        <div>
           { <Header />}
           { <MainContainer/> }
           {<SecondryContainer />}
        </div>
    )
}
export default Browse;
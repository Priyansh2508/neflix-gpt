
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondryContainer = () => {

  const movies = useSelector((store) => store.movies);
    return (
        <div className="bg-black">
          <div className="-mt-52 relative z-20">
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies } />
          <MoviesList title={"Top Rated"} movies={movies.topRatedMovies } />
          <MoviesList title={"Popular"} movies={movies.popularMovies } />
          <MoviesList title={"Upcoming"} movies={movies.topRatedMovies } />
          </div>
        
        </div>
    );
};



export default SecondryContainer;

import MovieCard from "./MovieCard";

const MoviesList=({title, movies})=>{
console.log(movies);
if(!movies || movies.length === 0) return null;
    return(
        <div>
             <h1 className="text-2xl mx-12 text-white">
                {title}
            </h1>
           <div className="flex overflow-x-scroll mx-10">
           
            <div className="flex">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
           </div>
        </div>
    )
}
export default MoviesList;
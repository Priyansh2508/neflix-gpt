import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard=({posterPath})=>{
    if(!posterPath) return null;
    return(
        <div className="w-48 pb-8 p-2">
           <img alt="movie poster"
           src={IMAGE_CDN_URL + posterPath}
           />
        </div>
    )    

}
export default MovieCard;
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

//fetching trailer video and updating the redux store

const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  
    useMovieTrailer(movieId);

    return (
        <div className="">
        <iframe className="w-screen aspect-video h-screen mx-auto"
         width="560"
          height="315" 
          src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?autoplay=1&mute=1"}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
}
export default VideoBackground;
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse=()=>{

useNowPlayingMovies();

    return(
        <div>
           { <Header />}
           { <MainContainer/> }
           {<SecondryContainer />}
            {/*
            MainContainer
            - Movie Bg (video)
            - Movie Title
            Secondry Container
            - Movie Lists*n
              - cards * n


            */}


        </div>
    )
}
export default Browse;
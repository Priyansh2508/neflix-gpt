import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
    return (
       <><div>
        <img className="fixed w-full -z-10 h-screen object-cover" src={BG_URL} />
      </div>
      <div>
          <GptSearchBar />
          <GptMovieSuggestions />
      </div></>
    );
}
export default GptSearch;
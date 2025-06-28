import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
    return (
        <div>
          <div>
                   <img className="fixed w-full h-auto -z-10" src={BG_URL} />
          </div>
          < GptSearchBar />
          <GptMovieSuggestions />
        </div>
    );
}
export default GptSearch;
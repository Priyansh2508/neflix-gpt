import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged to
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch(); // Import useDispatch from react-redux
  const navigate = useNavigate(); // Get the navigate function
  const user= useSelector((store) => store.user); // Access user data from Redux store
  const showGptSearch=useSelector((store) => store.gpt.showGptSearch); // Access GPT search view state from Redux store

  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
     // Correct usage of navigation
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error"); // Redirect to error page on failure
      });
  };

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user; // ✅ FIXED
          dispatch(addUser({ uid, email, displayName: displayName || "User", photoURL:photoURL })); // Ensure displayName is defined
          navigate("/browse"); // Redirect to browse page if user is authenticated
        } else {
          dispatch(removeUser());
          navigate("/"); // Redirect to login if no user is authenticated
        }
      });
  
      return () => unsubscribe(); // cleanup listener on unmount
    }, [dispatch]);

    const handleGptSearchClick = () => {
      // Navigate to GPT search page
      dispatch(toggleGptSearchView());
    };

  const handleLanguageChange = (event) => {
    console.log("Language changed to:", event.target.value);
    dispatch(changeLanguage(event.target.value));
  }

  return (
    <div className="absolute z-10 w-screen px-4 py-2 flex justify-between items-center flex-col md:flex-row">
      <img
        className="w-36 h-20 z-30"
        src= "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      {user &&
      (<div className="flex items-center">
       {showGptSearch && ( 
        <select className="m-2 h-8 bg-black bg-opacity-0 hover:cursor-pointer text-white rounded px-2" onChange={handleLanguageChange}>
       {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
        </select>
        )}              
        <button className="flex items-center m-4 h-8 justify-center bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleGptSearchClick}
        >
          {showGptSearch?"Homepage":"GPT Search"}
          </button>
        <img
          className="w-9 h-9 rounded mr-2 "
          alt="usericon"
          src="https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-701751695033499brrbuebohc.png"
        />
        <button onClick={handleSignOut} className=" text-white bg-red-600 h-8 rounded-sm w-16 text-center hover:bg-red-700">
          sign out
        </button>
      </div>)}
    </div>
  );
};

export default Header;

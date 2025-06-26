import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged to
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate(); // Get the navigate function
  const user= useSelector((store) => store.user); // Access user data from Redux store
  const dispatch = useDispatch(); // Import useDispatch from react-redux
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

  return (
    <div className="absolute z-10 w-screen px-4 py-2 flex justify-between items-center">
      <img
        className="w-36 h-20"
        src= "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      {user &&
      (<div className="flex items-center">
        <img
          className="w-10 h-10 rounded mr-2"
          alt="usericon"
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className=" text-white bg-red-600 h-8 rounded-sm w-16">
          sign out
        </button>
      </div>)}
    </div>
  );
};

export default Header;

import Header from './Header';
import {useState, useRef} from 'react';
import { checkValidateData } from '../utils/validate';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';


const Login = () => {

const[isSignInForm,setIsSignForm] =useState(true);
const [errorMessage,setErrorMessage]=useState(null);

const dispatch = useDispatch();

const email = useRef(null);
const password = useRef(null);


const handleButtonClick=()=>{
// validate the form data



const message = checkValidateData(email.current.value, password.current.value);
setErrorMessage(message);

if(message=== null) {
    // proceed with sign in or sign up
    if(isSignInForm) {
       
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;

    // ✅ Add this dispatch
    const { uid, email, displayName, photoURL } = user;
    dispatch(addUser({ uid, email, displayName: displayName || "User", photoURL }));

  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + ": " + errorMessage);
  });

        // Add sign in logic here
    } else {
       createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: "Priyansh", photoURL:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
}).then(() => {
  // Profile updated!
  const { uid, email, displayName, photoURL } = auth.currentUser; // ✅ FIXED
  dispatch(addUser({ uid, email, displayName: displayName || "User", photoURL:photoURL }));
  
}).catch((error) => {
  // An error occurred
  setErrorMessage(error.message);
});

    ;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode + ": " + errorMessage);
  });
        // Add sign up logic here
    }
}
}

const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
}

  return (
    <div className="bg-gray-100">
     <Header/>
     <div>
         <img className="absolute w-full h-auto" src={BG_URL} />
     </div>
     <form className="absolute bg-black my-36 w-3/12 mx-auto right-0 left-0 bg-opacity-75 rounded-lg shadow-lg h-auto"
     onSubmit={(e) =>e.preventDefault() }     
     >
     <h1 className="font-bold text-white m-2 p-4 text-3xl text-center">{isSignInForm ? "Sign In":"Sign Up"  }</h1>
     {!isSignInForm && <input type="text" placeholder="Name" className="p-2 m-4 flex w-9/12 mx-auto my-10"/>}
        <input ref={email} type="text" placeholder="Email" className="p-2 m-4 flex w-9/12 mx-auto my-10"/>
        <input ref={password} type="password" placeholder="Password" className="p-2 m-4 flex w-9/12 mx-auto my-10"/>
       <p className="text-red-600 text-center font-bold">{errorMessage}</p>
       <button
  type="button"
  className="bg-red-700 text-white p-2 m-4 rounded w-9/12 mx-auto block"
  onClick={handleButtonClick}
>
  {isSignInForm ? "Sign In" : "Sign Up"}
</button>

        <p className="text-white my-6 mx-12" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already Registered?  Sign In now"  }</p>
     </form>

    </div>
  );
};

export default Login;
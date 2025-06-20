import Header from './Header';
import {useState} from 'react';
const Login = () => {

const[isSignInForm,setIsSignForm] =useState(true);

const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
}

  return (
    <div className="bg-gray-100">
     <Header/>
     <div>
         <img className="absolute w-full h-auto" src="https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"/>
     </div>
     <form className="absolute bg-black my-36 w-3/12 mx-auto right-0 left-0 bg-opacity-75 rounded-lg shadow-lg h-auto">
     <h1 className="font-bold text-white m-2 p-4 text-3xl text-center">{isSignInForm ? "Sign In":"Sign Up"  }</h1>
     {!isSignInForm && <input type="text" placeholder="Name" className="p-2 m-4 flex w-9/12 mx-auto my-10"/>}
        <input type="text" placeholder="Email" className="p-2 m-4 flex w-9/12 mx-auto my-10"/>
        <input type="password" placeholder="Password" className="p-2 m-4 flex w-9/12 mx-auto my-10"/>
        <button className="bg-red-700 text-white p-2 m-4 rounded w-9/12 mx-auto block">{isSignInForm ? "Sign In":"Sign Up"  }</button>
        <p className="text-white my-6 mx-16" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already Registered?  Sign In now"  }</p>
     </form>

    </div>
  );
};

export default Login;

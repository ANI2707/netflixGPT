import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
const Login = () => {
  const [isSignUp,setIsSignUp]=useState(true);//true->signUp // false -> set signIn

  const email=useRef(null);
  const password=useRef(null);

  const toggleSignInForm = () =>{
    setIsSignUp(!isSignUp);
  }
  const handleButtonClick =(e)=>{
    //Validate the form data
    // checkValidData(email,password);
    console.log(email);
    console.log(password);
  }
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img className="md:w-screen h-screen object-cover"
          class="concord-img vlv-creative"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt="backgroundImg"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-9/12 sm:w-4/12 absolute  bg-black p-12 my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignUp ? "Sign Up" : "Sign In"}</h1>
            {isSignUp && <input type="text" placeholder="Full Name" className="p-4 my-2 w-full bg-gray-700" />}
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-gray-700" />
            <input ref={password} type="password" placeholder="Password " className="p-4 my-2 w-full bg-gray-700" />
            {isSignUp && <input type="password" placeholder="Confirm Password " className="p-4 my-2 w-full bg-gray-700" />}
            <button onClick={handleButtonClick} className="p-4 my-6 bg-red-700 w-full">{isSignUp ? "Sign Up" : "Sign In"}</button>
            <p onClick={toggleSignInForm} className="p-4 cursor-pointer">
              {isSignUp ? "Already registered? Sign In Now" : " New to Netflix? Sign Up Now"}
            </p>
      </form>
    </div>
  );
};

export default Login;

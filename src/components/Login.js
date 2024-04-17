import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE,USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true); //true->signUp // false -> set signIn
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch=useDispatch();

  const name=useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignUp(!isSignUp);
  };
  const handleButtonClick = (e) => {
    //Validate the form data
    // checkValidData(email,password);
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return; //error in the email or password

    //signIn signUp logic

    if (isSignUp) {
      //Sign UP Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );

            
            
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message)
          });
          
          
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          // console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="w-screen min-h-screen object-cover"
          
          src={BG_IMAGE}
          alt="backgroundImg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-9/12 sm:w-4/12 absolute  bg-black p-12 my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4 my-2 w-full bg-gray-700"
        />
        <p className="text-red-500 ">{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p onClick={toggleSignInForm} className="p-4 cursor-pointer">
          {isSignUp
            ? "Already registered? Sign In Now"
            : " New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

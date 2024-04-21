import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user=useSelector(state=>state.user)

  const dispatch = useDispatch();
  const navigate=useNavigate();
  
  const handleSignOut =()=>{
    signOut(auth).then(() => {
       

    }).catch((error) => {
      // An error happened.
      // navigate("/error");

    });
  };


  // checking user state for signUp ,signIn,signOut
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return()=>{
      //tunsubscribe when component unmount
      unsubscribe();
    }
  }, []);

  return (
    <div className="absolute flex justify-between items-center w-screen px-1 sm:px-8 py-2 bg-gradient-to-b from-black z-20">
      <img className="w-28 sm:w-44"
        src={LOGO}
        alt="logo"
      />

      {
        user && <div className="flex justify-center items-center gap-3">
        <img className="w-12 h-12 rounded-full" src={user?.photoURL} alt="user" />
        <button onClick={handleSignOut} className="font-bold text-white border p-2 rounded-lg hover:bg-slate-400">Sign Out</button>
       </div>
      }
         
         
      
        
      
    </div>
  );
};

export default Header;

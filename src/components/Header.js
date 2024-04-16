import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  
  const navigate=useNavigate();
  const user=useSelector(state=>state.user)
  const handleSignOut =()=>{
    signOut(auth).then(() => {
        navigate("/");

    }).catch((error) => {
      // An error happened.
      navigate("/error");

    });
  }
  return (
    <div className="absolute flex justify-between items-center w-screen px-1 sm:px-8 py-2 bg-gradient-to-b from-black z-20">
      <img className="w-28 sm:w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"
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

import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        // navigate("/error");
      });
  };

  // checking user state for signUp ,signIn,signOut
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      //tunsubscribe when component unmount
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex flex-col md:flex-row justify-between items-center w-screen px-1 sm:px-8 py-2 bg-gradient-to-b from-black z-20 ">
      <img className="w-44  mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex justify-center items-center gap-3">
          {showGptSearch && (
            <select
              onChange={handleLangChange}
              className="p-2 m-2 bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 bg-purple-800 text-white rounded-lg"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img
            className=" hidden w-12 h-12 rounded-full"
            src={user?.photoURL}
            alt="user"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white border p-2 rounded-lg hover:bg-slate-400"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

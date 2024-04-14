import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img className="w-[100vw] h-[100vh] object-cover"
          class="concord-img vlv-creative"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt="backgroundImg"
        />
      </div>
      <form className="w-[70vw] md:w-3/12 absolute  bg-black p-12 my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">Sign In</h1>
            <input type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-gray-700" />
            <input type="password" placeholder="Password Address" className="p-4 my-2 w-full bg-gray-700" />
            <button className="p-4 my-6 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;

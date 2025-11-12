import React, { useContext } from "react";

import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { UserAuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
const Login = () => {
  const { loginUser, googleLogin } = useContext(UserAuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        if (res.user) {
          toast.success("Login successfully");
          e.target.reset();
          navigate(location.state || "/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        toast.success("Google login successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-md p-8 sm:p-10 rounded-lg shadow-2xl bg-cover bg-center text-white"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?_gl=1*mek4fj*_ga*MTM0NDYzODQ4MC4xNzYwODgxNzU4*_ga_8JE65Q40S6*czE3NjI2OTgxMTgkbzkkZzAkdDE3NjI2OTgxMTgkajYwJGwwJGgw")',
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-yellow-400 opacity-20 blur-3xl rounded-full z-0"></div>

          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-1 tracking-wider">Login</h1>
            <h2 className="text-xl font-medium mb-8 uppercase tracking-widest text-gray-300">
              Sign into your account
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full input input-bordered bg-white text-gray-800 border-none h-14 text-lg placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full input input-bordered bg-white text-gray-800 border-none h-14 text-lg placeholder-gray-400"
                  required
                />
              </div>

              <button type="submit" className="btn-all w-full rounded-full">
                Login
              </button>
            </form>

            <div className="flex flex-col items-center mt-6">
              <p className="mb-4 text-gray-300">Or Login With</p>
              <button onClick={handleGoogleLogin} className="btn">
                <FcGoogle />
                Login with Google
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm">
                Don't have an account?{" "}
                <Link
                  className="text-blue-500 font-semibold underline"
                  to={"/register"}
                >
                  {" "}
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

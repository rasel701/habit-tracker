import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { UserAuthContext } from "../../contexts/AuthContext";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { registerUser, googleLogin, setUser } = useContext(UserAuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log({ name, photo, email, password });
    if (password.length < 6) {
      return toast.error("Length must be at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      return toast.error("Password must have at least one lowercase letter");
    }

    registerUser(email, password)
      .then((res) => {
        const result = res.user;
        updateProfile(result, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log(result);
            setUser({ ...result, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            e.target.reset();
            navigate(location.state || "/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
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
    <div className=" max-w-[90%] mx-auto justify-center">
      <div className="bg-blue-400  flex flex-col justify-center items-center text-center rounded-l-lg shadow-2xl mt-6 p-3 rounded-lg">
        <h2 className="text-4xl font-bold text-white ">HABIT</h2>
        <p className="text-lg my-2 text-gray-600 ">You're new here!</p>
        <p className="text-white">
          Sign up with your email and personal details to get started!
        </p>
      </div>
      <div className="">
        <div className=" mt-5 flex  justify-center p-2">
          <div
            className="relative w-full max-w-md p-8 sm:p-10 rounded-lg shadow-2xl bg-cover bg-center text-white"
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?_gl=1*mek4fj*_ga*MTM0NDYzODQ4MC4xNzYwODgxNzU4*_ga_8JE65Q40S6*czE3NjI2OTgxMTgkbzkkZzAkdDE3NjI2OTgxMTgkajYwJGwwJGgw")',
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-3 tracking-wider">
                Register
              </h1>

              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="User-Name"
                    className="w-full input input-bordered bg-white text-gray-800 border-none h-11 text-lg placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium mb-1"
                  >
                    Photo-URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="User-Photo"
                    className="w-full input input-bordered bg-white text-gray-800 border-none h-11 text-lg placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full input input-bordered bg-white text-gray-800 border-none h-11 text-lg placeholder-gray-400"
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full input input-bordered bg-white text-gray-800 border-none h-11 text-lg placeholder-gray-400"
                    required
                  />
                </div>

                <button type="submit" className="btn-all w-full rounded-full">
                  Register
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
                <p className="text-sm ">
                  Already have an account?{" "}
                  <Link
                    className="underline text-blue-400 font-semibold"
                    to={"/login"}
                  >
                    {" "}
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

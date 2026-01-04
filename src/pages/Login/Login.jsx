// import React, { useContext } from "react";

// import { FcGoogle } from "react-icons/fc";
// import { Link, useLocation, useNavigate } from "react-router";
// import { UserAuthContext } from "../../contexts/AuthContext";
// import { toast } from "react-toastify";
// const Login = () => {
//   const { loginUser, googleLogin } = useContext(UserAuthContext);
//   const location = useLocation();
//   // console.log(location);
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     loginUser(email, password)
//       .then((res) => {
//         if (res.user) {
//           toast.success("Login successfully");
//           e.target.reset();
//           navigate(location.state || "/");
//         }
//       })
//       .catch((error) => {
//         toast.error(error.message);
//       });
//   };

//   const handleGoogleLogin = () => {
//     googleLogin()
//       .then((res) => {
//         toast.success("Google login successfully");
//         navigate(location.state || "/");
//       })
//       .catch((error) => {
//         toast.error(error);
//       });
//   };

//   return (
//     <div>
//       <div className="min-h-screen flex items-center justify-center p-4">
//         <div
//           className="relative w-full max-w-md p-8 sm:p-10 rounded-lg shadow-2xl bg-cover bg-center text-white"
//           style={{
//             backgroundImage:
//               'url("https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?_gl=1*mek4fj*_ga*MTM0NDYzODQ4MC4xNzYwODgxNzU4*_ga_8JE65Q40S6*czE3NjI2OTgxMTgkbzkkZzAkdDE3NjI2OTgxMTgkajYwJGwwJGgw")',
//             backgroundBlendMode: "multiply",
//           }}
//         >
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-yellow-400 opacity-20 blur-3xl rounded-full z-0"></div>

//           <div className="relative z-10">
//             <h1 className="text-3xl font-bold mb-1 tracking-wider">Login</h1>
//             <h2 className="text-xl font-medium mb-8 uppercase tracking-widest text-gray-300">
//               Sign into your account
//             </h2>

//             <form onSubmit={handleLogin} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-1"
//                 >
//                   Email address
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full input input-bordered bg-white text-gray-800 border-none h-14 text-lg placeholder-gray-400"
//                   required
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium mb-1"
//                 >
//                   Password
//                 </label>
//                 <input
//                   name="password"
//                   type="password"
//                   placeholder="Password"
//                   className="w-full input input-bordered bg-white text-gray-800 border-none h-14 text-lg placeholder-gray-400"
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn-all w-full rounded-full">
//                 Login
//               </button>
//             </form>

//             <div className="flex flex-col items-center mt-6">
//               <p className="mb-4 text-gray-300">Or Login With</p>
//               <button onClick={handleGoogleLogin} className="btn">
//                 <FcGoogle />
//                 Login with Google
//               </button>
//             </div>

//             <div className="mt-8 text-center">
//               <p className="text-sm">
//                 Don't have an account?{" "}
//                 <Link
//                   className="text-blue-500 font-semibold underline"
//                   to={"/register"}
//                 >
//                   {" "}
//                   Register here
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { UserAuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { Mail, Lock, UserCircle, ShieldCheck, LogIn } from "lucide-react";

const Login = () => {
  const { loginUser, googleLogin } = useContext(UserAuthContext);
  const location = useLocation();
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

  const handleDemoLogin = (role) => {
    const email = role === "user" && "nahid@na.com";
    const password = "Nahid1";

    loginUser(email, password)
      .then(() => {
        toast.success(
          `${role === "admin" ? "Admin" : "User"} Demo Login Successful`
        );
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-4 font-sans">
      <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-center">
        <div className="md:absolute md:left-0 z-20 w-full md:w-[45%] bg-[#4b79a1] rounded-[30px] p-8 text-white shadow-2xl overflow-hidden mb-[-40px] md:mb-0">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img
              src="https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg"
              className="w-full h-full object-cover"
              alt="bg"
            />
          </div>

          <div className="relative z-10 py-12 text-center md:text-left">
            <h2 className="text-5xl font-bold tracking-tight mb-4">HABIT</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Welcome Back! Please log in to your account to continue your
              habit-tracking journey.
            </p>
          </div>
        </div>

        <div className="w-full md:ml-[35%] bg-white/70 backdrop-blur-md rounded-[40px] p-8 md:p-16 md:pl-32 shadow-xl border border-white/20">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-2">
              Login
            </h1>
            <p className="text-gray-500 mb-8 uppercase tracking-widest text-xs font-semibold">
              Sign into your account
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="form-control">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-800">
                    <Mail size={18} />
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="input w-full bg-gray-500/50 border-none rounded-xl pl-11 focus:ring-2 focus:ring-blue-400 h-14 text-black font-bold"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                    <Lock size={18} />
                  </span>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input w-full bg-gray-500/50 border-none rounded-xl pl-11 focus:ring-2 focus:ring-blue-400 h-14 text-black font-bold"
                    required
                  />
                </div>
              </div>

              <button className="btn bg-blue-500 hover:bg-blue-600 border-none text-white w-full rounded-xl text-lg normal-case shadow-lg shadow-blue-200 h-14">
                <LogIn size={20} className="mr-2" /> Login
              </button>
            </form>

            <div className="divider text-gray-600 text-[10px] my-6 uppercase tracking-[0.2em]">
              Or Continue With
            </div>

            <div className="space-y-4">
              <button
                onClick={() => googleLogin().then(() => navigate("/"))}
                className="btn btn-outline w-full rounded-xl border-gray-400 hover:bg-gray-50 
                text-gray-500
                hover:text-gray-800 flex items-center justify-center gap-3 font-medium"
              >
                <FcGoogle size={22} /> Login with Google
              </button>

              <div className="flex justify-center items-center">
                <button
                  onClick={() => handleDemoLogin("user")}
                  className="btn btn-ghost bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl flex items-center gap-2 border-none text-xs"
                >
                  <UserCircle size={16} /> Demo User
                </button>
              </div>
            </div>

            <p className="mt-8 text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 font-bold hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

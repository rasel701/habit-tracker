// import React, { useContext } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useLocation, useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { UserAuthContext } from "../../contexts/AuthContext";
// import { updateProfile } from "firebase/auth";

// const Register = () => {
//   const { registerUser, googleLogin, setUser } = useContext(UserAuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const photo = e.target.photo.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     // console.log({ name, photo, email, password });
//     if (password.length < 6) {
//       return toast.error("Length must be at least 6 characters");
//     } else if (!/[A-Z]/.test(password)) {
//       return toast.error("Password must have at least one uppercase letter");
//     } else if (!/[a-z]/.test(password)) {
//       return toast.error("Password must have at least one lowercase letter");
//     }

//     registerUser(email, password)
//       .then((res) => {
//         const result = res.user;
//         updateProfile(result, {
//           displayName: name,
//           photoURL: photo,
//         })
//           .then(() => {
//             console.log(result);
//             setUser({ ...result, displayName: name, photoURL: photo });
//             toast.success("Registration successful!");
//             e.target.reset();
//             navigate(location.state || "/");
//           })
//           .catch((error) => {
//             toast.error(error.message);
//           });
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
//     <div className=" max-w-[90%] mx-auto justify-center">
//       <div className="bg-blue-400  flex flex-col justify-center items-center text-center rounded-l-lg shadow-2xl mt-6 p-3 rounded-lg">
//         <h2 className="text-4xl font-bold text-white ">HABIT</h2>
//         <p className="text-lg my-2 text-gray-600 ">You're new here!</p>
//         <p className="text-white">
//           Sign up with your email and personal details to get started!
//         </p>
//       </div>
//       <div className="">
//         <div className=" mt-5 flex  justify-center p-2">
//           <div
//             className="relative w-full max-w-md p-8 sm:p-10 rounded-lg shadow-2xl bg-cover bg-center text-white"
//             style={{
//               backgroundImage:
//                 'url("https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?_gl=1*mek4fj*_ga*MTM0NDYzODQ4MC4xNzYwODgxNzU4*_ga_8JE65Q40S6*czE3NjI2OTgxMTgkbzkkZzAkdDE3NjI2OTgxMTgkajYwJGwwJGgw")',
//               backgroundBlendMode: "multiply",
//             }}
//           >
//             <div className="relative z-10">
//               <h1 className="text-3xl font-bold mb-3 tracking-wider">
//                 Register
//               </h1>

//               <form onSubmit={handleRegister} className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium mb-1"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="User-Name"
//                     className="w-full input input-bordered bg-white text-gray-800 border-none h-11 text-lg placeholder-gray-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="photo"
//                     className="block text-sm font-medium mb-1"
//                   >
//                     Photo-URL
//                   </label>
//                   <input
//                     type="text"
//                     name="photo"
//                     placeholder="User-Photo"
//                     className="w-full input input-bordered bg-white text-gray-800 border-none h-11 text-lg placeholder-gray-400"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium mb-1"
//                   >
//                     Email address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     className="w-full input input-bordered bg-white text-gray-800 border-none h-11 text-lg placeholder-gray-400"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium mb-1"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="w-full input input-bordered bg-white text-gray-800 border-none h-11 text-lg placeholder-gray-400"
//                     required
//                   />
//                 </div>

//                 <button type="submit" className="btn-all w-full rounded-full">
//                   Register
//                 </button>
//               </form>

//               <div className="flex flex-col items-center mt-6">
//                 <p className="mb-4 text-gray-300">Or Login With</p>
//                 <button onClick={handleGoogleLogin} className="btn">
//                   <FcGoogle />
//                   Login with Google
//                 </button>
//               </div>

//               <div className="mt-8 text-center">
//                 <p className="text-sm ">
//                   Already have an account?{" "}
//                   <Link
//                     className="underline text-blue-400 font-semibold"
//                     to={"/login"}
//                   >
//                     {" "}
//                     Sign In
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { UserAuthContext } from "../../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import {
  User,
  Mail,
  Lock,
  Image as ImageIcon,
  ShieldCheck,
  UserCircle,
} from "lucide-react";

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

    if (password.length < 6) {
      return toast.error("Length must be at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have at least one uppercase letter");
    }

    registerUser(email, password)
      .then((res) => {
        const result = res.user;
        updateProfile(result, { displayName: name, photoURL: photo }).then(
          () => {
            setUser({ ...result, displayName: name, photoURL: photo });
            toast.success("Registration successful!");
            navigate(location.state || "/");
          }
        );
      })
      .catch((error) => toast.error(error.message));
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

          <div className="relative z-10 py-10 text-center md:text-left">
            <h2 className="text-5xl font-bold tracking-tight mb-4">HABIT</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              You're new here! Sign up with your email and personal details to
              get started!
            </p>
          </div>
        </div>

        <div className="w-full md:ml-[35%] bg-white/70 backdrop-blur-md rounded-[40px] p-8 md:p-16 md:pl-32 shadow-xl border border-white/20">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-2">
              Register
            </h1>
            <p className="text-gray-400 mb-8">
              Create your account to continue
            </p>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="relative">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input w-full bg-gray-500/50 border-none rounded-xl pl-4 focus:ring-2 focus:ring-blue-400 text-black font-bold"
                  required
                />
              </div>

              <div className="relative">
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo-URL"
                  className="input w-full bg-gray-500/50 border-none rounded-xl pl-4 focus:ring-2 focus:ring-blue-400 text-black font-bold"
                  required
                />
              </div>

              <div className="relative">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="input w-full bg-gray-500/50 border-none rounded-xl pl-4 focus:ring-2 focus:ring-blue-400 text-black font-bold"
                  required
                />
              </div>

              <div className="relative">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input w-full bg-gray-500/50 border-none rounded-xl pl-4 focus:ring-2 focus:ring-blue-400 text-black font-bold"
                  required
                />
              </div>

              <button className="btn bg-blue-500 hover:bg-blue-600 border-none text-white w-full rounded-xl text-lg normal-case shadow-lg shadow-blue-200">
                Register
              </button>
            </form>

            <div className="divider text-gray-500 text-xs my-6 uppercase tracking-widest">
              Or Login With
            </div>

            {/* Social & Demo Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => googleLogin().then(() => navigate("/"))}
                className="btn btn-outline w-full rounded-xl border-gray-400 hover:bg-gray-50 
                text-gray-500
                hover:text-gray-800 flex items-center justify-center gap-3 font-medium"
              >
                <FcGoogle size={22} /> Login with Google
              </button>
            </div>

            <p className="mt-8 text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 font-bold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { motion } from "framer-motion";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-8xl font-extrabold text-blue-600 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl font-semibold text-gray-800 mt-4"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-gray-600 mt-3 max-w-md"
      >
        The page you’re looking for doesn’t exist or may have been moved. Don’t
        worry — you can get back to safety below.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-full shadow-md transition-all"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </motion.div>

      <motion.img
        src="https://png.pngtree.com/png-vector/20210827/ourmid/pngtree-error-404-page-not-found-png-image_3832696.jpg"
        alt="Not Found"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="w-80 mt-10"
      />
    </div>
  );
};

export default NotFound;

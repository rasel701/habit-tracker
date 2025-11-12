import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbHandLoveYou } from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                HB
              </div>
              <div>
                <h3 className="text-xl font-semibold">HabitBase</h3>
                <p className="text-sm text-gray-400">
                  Build lasting habits, one day at a time.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm">
              HabitBase helps you track, maintain and grow positive routines.
              Join a growing community and make progress every day.
            </p>

            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.08 }}
                href="#"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
                aria-label="facebook"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08 }}
                href="#"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
                aria-label="twitter"
              >
                <FaSquareXTwitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08 }}
                href="#"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
                aria-label="instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08 }}
                href="#"
                className="p-2 rounded-md bg-gray-800 hover:bg-gray-700"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/public-habits"
                  className="hover:text-white transition"
                >
                  Public Habits
                </a>
              </li>
              <li>
                <a href="/featured" className="hover:text-white transition">
                  Featured Habits
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-400 mt-2">
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <span>rasel708211@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone />
                  <span>+880 1577031291</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-semibold">Stay Updated</h4>
              <p className="text-sm text-gray-400 mt-2">
                Get tips on building better habits, product updates and
                community stories.
              </p>

              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none"
                  aria-label="email"
                />
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-r-md text-white font-semibold"
                  type="submit"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <div className="flex gap-1 items-center">
                Built with <TbHandLoveYou /> for habit builders. <br />
              </div>
              <span className="text-xs">Privacy · Terms</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} HabitBase. All rights reserved.
          </p>
          <div className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed by <strong>Rasel</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

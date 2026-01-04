import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  PlusCircle,
} from "lucide-react";
import { Link } from "react-router";
import Loading from "../../components/Loading/Loading";

const FeaturedHabits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://habit-server-psi.vercel.app/popular-habit"
        );
        setHabits(res.data);
      } catch (error) {
        console.error("Error fetching habits:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="py-20 bg-gray-50 rounded-lg my-10 max-w-[90%] mx-auto">
      <div className="max-w-[1600px] mx-auto px-6">
        {" "}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold mb-2">
              <TrendingUp size={20} />
              <span className="uppercase tracking-widest text-xs">
                Most Popular
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-500">
              Featured Habits
            </h2>
          </div>
          <Link
            to={"/public-habit"}
            className="btn btn-primary btn-sm md:btn-md btn-outline rounded-full px-6"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {habits?.map((habit, index) => (
            <motion.div
              key={habit._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-base-100 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-base-300 flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={habit.image}
                  alt={habit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-primary badge-sm bg-primary/90 border-none text-[10px] text-white px-3 py-2 rounded-full font-bold">
                    {habit.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-lg flex items-center gap-1 text-orange-600 font-bold text-[10px] shadow-sm">
                  <Flame size={12} />
                  <span>{habit.completedCount}</span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-base-content group-hover:text-primary transition-colors line-clamp-1 mb-2">
                  {habit.title}
                </h3>

                <p className="text-gray-500 text-xs line-clamp-2 mb-4 flex-grow">
                  {habit.description}
                </p>

                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={14} />
                    <span className="text-[11px] font-medium">
                      {habit.reminderTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <User size={14} />
                    <span className="text-[11px] font-medium truncate">
                      {habit.userName}
                    </span>
                  </div>
                </div>

                <div className="divider opacity-50 my-0"></div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="flex -space-x-2 shrink-0">
                    <div className="avatar border-2 border-white rounded-full w-6">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`}
                        alt="u1"
                      />
                    </div>
                    <div className="avatar border-2 border-white rounded-full w-6 text-[8px] bg-gray-200 flex items-center justify-center font-bold">
                      +1k
                    </div>
                  </div>

                  <button className="btn btn-primary btn-xs sm:btn-sm rounded-xl gap-1 text-[10px] px-3">
                    <PlusCircle size={14} />
                    Start
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHabits;

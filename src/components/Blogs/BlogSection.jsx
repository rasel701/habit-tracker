import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// Sample blogs data with long description (~200 words)
const blogs = [
  {
    id: 1,
    title: "How to Build a Habit of Drinking 2 Liters of Water Daily",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBgl23eoxq3B-4BFhOq_fp3hycPcgvpRTMA&s",
    date: "Jan 02, 2026",
    author: "Habit Coach",
    category: "Health",
    readTime: "5 min read",
    description: `Drinking enough water is the foundation of good health. 
    To reach the 2-liter goal, start by drinking a glass immediately after waking up. 
    Use a marked bottle to track your progress throughout the day. 
    You can also set reminders on your phone or use a habit-tracking app. 
    Consistency is more important than perfection. Within a week, you'll notice improved energy, clearer skin, better digestion, and enhanced focus. 
    Hydration supports joint health, regulates body temperature, and boosts metabolism. 
    Many people underestimate the importance of water, but even mild dehydration can lead to fatigue, headaches, and decreased cognitive performance. 
    Learn how to integrate drinking water into your daily routines seamlessly and make it an effortless habit.`,
  },
  {
    id: 2,
    title: "5 Proven Ways to Boost Your Concentration in Study",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    date: "Dec 28, 2025",
    author: "Productivity Expert",
    category: "Education",
    readTime: "7 min read",
    description: `Maintaining focus in study sessions is challenging in a world full of distractions. 
    The Pomodoro technique, which alternates 25 minutes of work with a 5-minute break, enhances concentration and prevents burnout. 
    Creating a dedicated study space free of noise and gadgets is crucial. 
    Nutrition also matters: foods rich in omega-3, antioxidants, and vitamins support brain function. 
    Regular breaks, short walks, and meditation can help reset attention span. 
    This guide explores practical strategies to train your mind, manage digital distractions, and improve memory retention. 
    Students will learn how to turn focus into a skill through consistent routines and healthy habits.`,
  },
  {
    id: 3,
    title: "A Simple Daily Workout Routine for Beginners",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    date: "Dec 15, 2025",
    author: "Fitness Trainer",
    category: "Fitness",
    readTime: "6 min read",
    description: `Starting a fitness journey can feel overwhelming, but a simple routine is enough to build strength and energy. 
    Bodyweight exercises like squats, push-ups, planks, and lunges can be performed at home without any equipment. 
    Performing a 15-minute workout every morning can boost metabolism, improve cardiovascular health, and enhance mental clarity. 
    Focus on proper form instead of speed to avoid injury. 
    Consistency is key; even small daily workouts lead to remarkable results over time. 
    This routine is designed to gradually increase intensity, motivating beginners to develop a lifelong habit of daily movement. 
    Follow the detailed guide for a week-long starter plan and track your progress for best results.`,
  },
  {
    id: 4,
    title: "The Power of Journaling: Track Your Thoughts",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop",
    date: "Dec 10, 2025",
    author: "Mental Health Pro",
    category: "Mindfulness",
    readTime: "4 min read",
    description: `Journaling is a powerful tool for self-awareness and personal growth. 
    Spending 10 minutes daily writing about achievements, challenges, and emotions helps reduce stress and increase mindfulness. 
    It creates a permanent record of personal growth and allows reflection on patterns in behavior and thoughts. 
    Whether using a gratitude journal, dream log, or freewriting, the act of journaling encourages clarity and goal-setting. 
    Mental clarity from journaling improves decision-making, reduces anxiety, and strengthens emotional intelligence. 
    Over time, journaling turns into a habit that supports mental health and overall well-being.`,
  },
];

const BlogSection = () => {
  const [loading, setLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Function to get short description (approx 40 words)
  const getShortDesc = (text, wordCount = 40) => {
    const words = text.split(" ");
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(" ") + "...";
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Knowledge <span className="text-primary">Hub</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore articles designed to help you build lasting habits and live
            a more productive life.
          </p>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 h-96 rounded-3xl"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {blog.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                  {/* Short Description */}
                  <p className="text-gray-500 text-sm mb-4 flex-1">
                    {getShortDesc(blog.description, 40)}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {blog.readTime}
                      </span>
                    </div>
                    <button className="btn btn-sm btn-primary btn-circle group-hover:scale-110 transition-transform">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;

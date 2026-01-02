import React from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  ChevronRight,
} from "lucide-react";

const BlogDetails = () => {
  const navigate = useNavigate();
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
  const { id } = useParams();
  const blogData = blogs.find((b) => b.id === parseInt(id));

  if (!blogData) return <p className="text-center mt-20">Blog not found.</p>;

  return (
    <div className="min-h-screen bg-base-200 pb-12">
      {/* Navigation Bar (Simple) */}
      <div className="max-w-4xl mx-auto p-4">
        <button onClick={() => navigate(-1)} className="btn btn-ghost gap-2">
          <ArrowLeft size={18} /> Back to Blogs
        </button>
      </div>

      <main className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-3xl overflow-hidden">
        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] w-full"
        >
          <img
            src={blogData.image}
            alt={blogData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="badge badge-primary badge-lg font-semibold uppercase tracking-wider">
              {blogData.category}
            </span>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          {/* Title & Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-base-content mb-6 leading-tight">
              {blogData.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-base-content/70 mb-8 pb-8 border-b border-base-300">
              <div className="flex items-center gap-2">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span></span>
                  </div>
                </div>
                <span className="font-medium text-base-content">
                  {blogData.author}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{blogData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blogData.readTime}</span>
              </div>
            </div>
          </motion.div>

          {/* Description / Body */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg max-w-none text-base-content/80 leading-relaxed"
          >
            {/* Split description into paragraphs for better readability */}
            {blogData.description.split(". ").map((sentence, index) => (
              <p key={index} className="mb-4">
                {sentence}.
              </p>
            ))}
          </motion.article>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;

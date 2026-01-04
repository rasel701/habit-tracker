import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  Layers,
  Smartphone,
  Code2,
  Rocket,
  ShieldCheck,
  Zap,
  Target,
} from "lucide-react";

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-base-100 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
        >
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <Target size={20} />
              <span>Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-base-content mb-6 leading-tight">
              Master Your Days with{" "}
              <span className="text-primary italic">HABIT</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              HABIT tracker is not just a tool; it's your personal discipline
              partner. We help you bridge the gap between where you are and
              where you want to be by turning small actions into remarkable
              results.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Productivity"
              className="rounded-[40px] shadow-2xl object-cover h-[400px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <Zap fill="currentColor" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">95%</p>
                  <p className="text-xs text-gray-400">Consistency Rate</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          <motion.div
            variants={fadeIn}
            className="group p-8 bg-base-200 rounded-[32px] hover:bg-primary hover:text-white transition-all duration-500"
          >
            <Layers
              className="mb-6 text-primary group-hover:text-white transition-colors"
              size={40}
            />
            <h3 className="text-2xl font-bold mb-4">Core Features</h3>
            <ul className="space-y-3 opacity-80">
              {[
                "Interactive Dashboard",
                "Custom Habit Creation",
                "Progress Tracking",
                "Real-Time Updates",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="p-8 bg-white border border-gray-100 shadow-sm rounded-[32px] hover:shadow-xl transition-all"
          >
            <Cpu className="mb-6 text-secondary" size={40} />
            <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Framer Motion",
                "Tailwind",
                "Firebase",
                "MongoDB",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-400 text-sm">
              Built with the latest and most scalable modern technologies.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="p-8 bg-gray-900 text-white rounded-[32px] relative overflow-hidden"
          >
            <Rocket className="mb-6 text-accent" size={40} />
            <h3 className="text-2xl font-bold mb-4 text-white">
              Why It's Special
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <ShieldCheck className="text-accent shrink-0" />
                <p className="text-sm opacity-70">
                  Secure social login with Firebase integration.
                </p>
              </div>
              <div className="flex gap-3">
                <Smartphone className="text-accent shrink-0" />
                <p className="text-sm opacity-70">
                  Fully responsive UI for all devices.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-primary to-blue-600 rounded-[40px] p-10 md:p-16 text-white text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <Code2 size={48} className="mx-auto mb-6 opacity-50" />
            <h3 className="text-3xl font-bold mb-6">Developer Insight</h3>
            <p className="text-xl opacity-90 leading-relaxed italic">
              "This project challenged me to rethink how users interact with
              data. Implementing Framer Motion and Firebase taught me the
              balance between aesthetics and performance."
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-white/30"></div>
              <span className="font-semibold tracking-widest uppercase text-sm">
                Your Name / Developer
              </span>
              <div className="h-px w-12 bg-white/30"></div>
            </div>
          </div>

          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

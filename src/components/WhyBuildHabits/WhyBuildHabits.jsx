import Aos from "aos";
import { useEffect } from "react";
import { FaBrain, FaSmile, FaBolt, FaHeart } from "react-icons/fa";
import "aos/dist/aos.css";

const WhyBuildHabits = () => {
  const benefits = [
    {
      icon: <FaBrain className="text-4xl text-purple-600" />,
      title: "Better Focus",
      desc: "Regular habits train your mind to stay consistent and improve concentration.",
    },
    {
      icon: <FaSmile className="text-4xl text-cyan-500" />,
      title: "Reduced Stress",
      desc: "Healthy habits reduce anxiety and bring calmness to your daily routine.",
    },
    {
      icon: <FaBolt className="text-4xl text-yellow-400" />,
      title: "More Energy",
      desc: "Consistent positive habits give you motivation and boost your productivity.",
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Improved Well-Being",
      desc: "Good habits help maintain mental, physical, and emotional balance.",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <section className="py-16 bg-gray-50 mt-15 mb-9">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-500">
        Why Build Habits?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {benefits.map((item, index) => (
          <div
            data-aos="zoom-in-up"
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBuildHabits;

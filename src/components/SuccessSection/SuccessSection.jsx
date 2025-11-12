import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { FaLightbulb, FaRocket, FaUsers, FaStar } from "react-icons/fa";
const SuccessSection = () => {
  const quotes = [
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500 mb-3" />,
      text: "The secret of your success is determined by your daily agenda.",
      author: "John C. Maxwell",
      image:
        "https://www.shutterstock.com/image-photo/johannesburg-south-africa-oct-25-260nw-2097704353.jpg",
    },
    {
      icon: <FaRocket className="text-4xl text-red-500 mb-3" />,
      text: "Success is the sum of small efforts, repeated day in and day out.",
      author: "Robert Collie",
      image:
        "https://media.gettyimages.com/id/488042515/photo/hollywood-ca-actor-robert-james-collier-arrives-at-the-television-academy-presents-an.jpg?s=612x612&w=gi&k=20&c=m3yiQa8pGvOvptnrA-7dV54L4LM-zVSi8xBjT5LWldY=",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500 mb-3" />,
      text: "Motivation is what gets you started. Habit is what keeps you going.",
      author: "Jim Ryun",
      image:
        "https://media.gettyimages.com/id/494942198/photo/jim-ryun-of-the-united-states-takes-part-in-a-training-run-during-the-1968-summer-olympics-in.jpg?s=612x612&w=gi&k=20&c=PKNkORgFXLMNfwfVO9ali18JQv9xvDxH1sYcKkqCMOU=",
    },
    {
      icon: <FaStar className="text-4xl text-purple-500 mb-3" />,
      text: "Your habits will determine your future.",
      author: "Jack Canfield",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbphJ8A8uoKhF9Q_8hFlFe1Hm4zGZVDhlupNZ1J6K0TGoIJMH6OFZvrQ6Gb8nAgoL1ixA&usqp=CAU",
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <div className="max-w-[90%] mx-auto ">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-500 ">
        Advice from Successful People
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-5 justify-items-center gap-8  items-center">
        {quotes.map((item, index) => (
          <div key={index} className="">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="bg-gray-100 max-w-[300px] h-[300px] relative rounded-xl shadow-md flex flex-col items-center justify-center p-6"
            >
              <img
                className="w-[100px] h-[100px] object-cover rounded-full absolute -top-7 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-md"
                src={item.image}
                alt={item.author}
              />

              <p className="text-gray-700 text-sm italic text-center mt-16 px-6 relative">
                <span className="text-3xl text-purple-400 absolute -left-2 top-0">
                  “
                </span>
                {item.text}
                <span className="text-3xl text-purple-400 absolute -right-2 bottom-0">
                  ”
                </span>
              </p>

              <h2 className="font-semibold text-gray-900 mt-6">
                – {item.author}
              </h2>
              <div>{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessSection;

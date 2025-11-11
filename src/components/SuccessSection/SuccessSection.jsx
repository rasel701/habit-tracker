import React from "react";

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
      author:
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
  return (
    <div>
      <h2 className="text-3xl font-bold mb-10">
        Advice from Successful People
      </h2>
    </div>
  );
};

export default SuccessSection;

import React from "react";
import { motion } from "framer-motion";

const Faqsection = () => {
  const faqs = [
    {
      question: "Is this Habit Tracker completely free?",
      answer:
        "Yes! Our basic habit tracking features are free for everyone. We also have premium plans for advanced analytics.",
    },
    {
      question: "Can I track multiple habits at once?",
      answer:
        "Absolutely. You can add as many habits as you want from your dashboard and track them simultaneously.",
    },
    {
      question: "How do I see my progress over time?",
      answer:
        "Go to your Dashboard where you can see dynamic charts and statistics of your daily and weekly consistency.",
    },
    {
      question: "Can I reset my habit data?",
      answer:
        "Yes, you can edit or delete any habit from the 'My Habits' section at any time.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Currently, Habit Tracker is web-based, but fully responsive for mobile devices.",
    },
  ];
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Find answers to common questions about our platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="collapse collapse-plus bg-base-200 rounded-xl"
            >
              {" "}
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqsection;

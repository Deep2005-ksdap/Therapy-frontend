import React from "react";
import { RiRobot2Fill } from "react-icons/ri";

const Chatbot = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
        AI Chatbot
      </h2>
      <div className="flex justify-center">
        <div className="max-w-md bg-[#a6decb] border border-green-200 rounded-2xl shadow-sm hover:shadow-md p-6 transition-transform transform hover:scale-105 text-center">
          <div className="flex justify-center mb-3">
            <RiRobot2Fill className="text-6xl text-green-700" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Smart Assistant</h3>
          <p className="text-gray-600 text-sm mt-2">
            Our AI-powered chatbot is available 24/7 to answer queries, guide users, 
            and provide instant support throughout the platform.
          </p>
          <div className="flex justify-center mt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm">
              Try Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;


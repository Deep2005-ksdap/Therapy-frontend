import React from "react";
import { FaUserTie, FaUserNurse, FaUserGraduate, FaUserCog } from "react-icons/fa";

const team = [
  {
    icon: <FaUserTie className="text-6xl text-green-800 mb-3" />,
    name: "Deepanshu Kumar",
    role: "Team Leader || Frontend Developer",
    desc: "Handles project planning, Responsible for React and Tailwind implementation, turning designs into functional components.",
    bg: "bg-[#a6decb] border-green-200", // greenish
    btn: "bg-green-600 hover:bg-green-700"
  },
  {
    icon: <FaUserNurse className="text-6xl text-blue-800 mb-3" />,
    name: "Ankit Yadav",
    role: "UI/UX Designer",
    desc: "Designs clean and user-friendly interfaces with a focus on accessibility and visual appeal.",
    bg: "bg-[#cce4f6] border-blue-200", // light blue
    btn: "bg-blue-600 hover:bg-blue-700"
  },
  {
    icon: <FaUserCog className="text-6xl text-purple-800 mb-3" />,
    name: "Tushar Sharma",
    role: "Backend Developer",
    desc: "Builds and maintains the server, APIs, and database integration for the project.",
    bg: "bg-[#e0d4f7] border-purple-200", // light purple
    btn: "bg-purple-600 hover:bg-purple-700"
  },
  {
    icon: <FaUserGraduate className="text-6xl text-red-800 mb-3" />,
    name: "Abhay",
    role: "Backend Developer",
    desc: "Responsible for making Chatbot features, and AI api integration",
    bg: "bg-[#f7d4d4] border-red-200", // light red
    btn: "bg-red-600 hover:bg-red-700"
  }
];

const AboutUs = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
        Meet Our Team
      </h2>
      <div className="sm:flex sm:flex-wrap sm:gap-10 justify-center">
        {team.map((member, index) => (
          <div
            key={index}
            className={`max-w-sm ${member.bg} border rounded-2xl shadow-sm mb-6 hover:shadow-md p-5 transition-transform transform hover:scale-105 text-center`}
          >
            <div className="flex justify-center">{member.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-700 font-medium">{member.role}</p>
            <p className="text-gray-600 text-sm mt-2">{member.desc}</p>
            <div className="flex justify-center mt-4">
              <button className={`${member.btn} text-white px-4 py-2 rounded-xl text-sm`}>
                Connect →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;

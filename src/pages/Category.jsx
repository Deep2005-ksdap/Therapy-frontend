import { GiBrain } from "react-icons/gi"; // Cognitive Behavioral Therapy
import { FaChild } from "react-icons/fa"; // Play Therapy
import { MdFamilyRestroom } from "react-icons/md"; // Family Therapy
import { GiMeditation } from "react-icons/gi"; // Mindfulness Therapy
import { FaPaintBrush } from "react-icons/fa"; // Art Therapy

const TherapyCategories = () => {
  const categories = [
    {
      title: "Cognitive Behavioral Therapy",
      desc: "A practical approach to change negative thinking and improve mental resilience.",
      icon: <GiBrain className="text-5xl text-green-700" />,
    },
    {
      title: "Play Therapy",
      desc: "Helps children express feelings and resolve conflicts through play.",
      icon: <FaChild className="text-5xl text-green-700" />,
    },
    {
      title: "Family Therapy",
      desc: "Strengthens relationships and improves communication within families.",
      icon: <MdFamilyRestroom className="text-5xl text-green-700" />,
    },
    {
      title: "Mindfulness Therapy",
      desc: "Enhances awareness and reduces stress through mindfulness practices.",
      icon: <GiMeditation className="text-5xl text-green-700" />,
    },
    {
      title: "Art Therapy",
      desc: "Uses creative expression to explore emotions and promote healing.",
      icon: <FaPaintBrush className="text-5xl text-green-700" />,
    },
  ];

  return (
    <div className="sm:flex sm:flex-wrap sm:gap-10 py-6 justify-center">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="max-w-sm bg-[#a6decb] border border-green-200 rounded-2xl shadow-sm mb-4 hover:shadow-md p-5 transition-transform transform hover:scale-105"
        >
          <div className="flex justify-center mb-3">{cat.icon}</div>
          <h2 className="text-xl font-semibold text-gray-800 text-center">{cat.title}</h2>
          <p className="text-sm text-gray-600 text-center mt-2">{cat.desc}</p>
          <div className="flex justify-center mt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm">
              Explore →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TherapyCategories;


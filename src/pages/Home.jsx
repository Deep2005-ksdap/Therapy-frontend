import { AiOutlineGlobal } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { RiPsychotherapyFill } from "react-icons/ri";

const Home = () => {
  return (
    <main className="sm:py-4 h-full px-2">
      <h1 className="font-extrabold font-serif text-green-700 text-center mt-2 text-2xl">
        <i>"Healing Made Simple"</i>
      </h1>
      <div className="w-full mt-4 flex flex-col items-center justify-center">
        <img
          src="./public/images/meditating-removebg-preview.png"
          alt="meditating Person"
          className=" min-w-[306px] min-h-[245px]"
        />
        <p className="text-center text-gray-600 text-xs">
          AI-powered therapy & wellness sessions, anytime, anywhere.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="link flex max-w-[600px] w-full sm:py-6 justify-between px-4 my-4">
          <a
            href="#"
            className="bg-green-400 text-white border-1 border-white font-bold p-2 rounded-xl cursor-pointer hover:bg-green-500"
          >
            Start Therapy
          </a>
          <a
            href="#"
            className="border-1 bg-gray-200 border-green text-green-400 font-bold p-2 rounded-xl cursor-pointer hover:bg-green-400 hover:text-white"
          >
            I'm a Therapist
          </a>
        </div>
      </div>

      <div className="data flex justify-around sm:mt-4 px-4 sm:py-6">
        <div className="w-1/4 flex flex-col items-center text-center">
          <AiOutlineGlobal className="text-5xl text-green-900 hover:text-green-700" />
          <p className="font-bold text-xl">970M+</p>
          <a
            href="https://www.who.int/health-topics/mental-health#tab=tab_1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-xs">people worldwide</div>
            <div className="font-extralight text-xs text-gray-600">
              live with a mental disorder
            </div>
          </a>
        </div>

        <div className="w-1/4 flex flex-col items-center text-center">
          <GiBrain className="text-5xl text-green-900 hover:text-green-700" />
          <p className="font-bold text-xl">200M+</p>
          <a
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9122174/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-xs">Indians affected</div>
            <div className="font-extralight text-xs text-gray-600">
              but <b>75% don’t receive treatment</b>
            </div>
          </a>
        </div>

        <div className="w-1/4 flex flex-col items-center text-center">
          <RiPsychotherapyFill className="text-5xl text-green-900 hover:text-green-700" />
          <p className="font-bold text-xl">0.75</p>
          <a
            href="https://www.who.int/india/health-topics/mental-health"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-xs">psychiatrists per 100k</div>
            <div className="font-extralight text-xs text-gray-600">
              vs WHO recommendation of 3.0
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;

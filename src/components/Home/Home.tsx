import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <div className="border border-[#C7CEFE] rounded-lg p-12 ms-48 me-36 lg:mt-24 lg:mb-28 bg-[#5194ff15] h-[65vh] ">
      <div className=" my-8 px-24 ">
        <div className="text-4xl pb-4 ">I’m</div>
        <div className="ubuntu-mono-bold text-shadow text-6xl pb-8">
          Full Stack Developer.
        </div>
        <div className="text-lg ">
          "Skilled Full Stack Developer with expertise in React, Nest.js, and
          Next.js. Dedicated to delivering top-notch solutions through careful
          coding and continuous learning."
        </div>
      </div>
      <div className="flex text-2xl mt-4 ps-24">
        <button className=" rounded-lg px-6 py-1 me-8 bg-gradient-to-b from-[#4f8aff] to-[#2c36fc] hover:shadow-lg hover:shadow-[#2c36fcd8]  hover:border">
          Contact
        </button>
        <button className="flex border-b-2 pb-1 hover:border-[#0099ff]">
          <span className=" me-2">Resume</span>
          <FiDownload className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Home;

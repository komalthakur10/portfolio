import { FiDownload } from "react-icons/fi";
const Home = () => {
  return (
    <div className="border border-[#C7CEFE] rounded-lg p-12 ms-48 me-36 lg:my-20 bg-[#5194ff15] h-[65vh] ">
      <div className="ubuntu-mono-regular my-16 px-24 ">
        <div className="text-3xl pb-4 ">I’m</div>
        <div className="ubuntu-mono-bold text-shadow text-5xl pb-4">
          Full Stack Developer.
        </div>
        <div className="text-lg">
          "Skilled Full Stack Developer with expertise in React, Nest.js, and
          Next.js. Dedicated to delivering top-notch solutions through careful
          coding and continuous learning."
        </div>
      </div>
      <div className="flex text-2xl mt-8 ps-24">
        <button className="border-2 rounded-lg px-6 py-1 me-8 hover:shadow-md hover:shadow-[#0099ff] ">
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

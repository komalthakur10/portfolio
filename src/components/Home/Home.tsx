import { FiDownload } from "react-icons/fi";
import { useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";
const Home = () => {
  const { dark } = useSelector((state: rootType) => state.theme);
  const scrollToFooter = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch(
        "https://drive.google.com/file/d/1M3Kwqp0wN_skq4PHKEkehwVJo45mYUhv/view?usp=sharing"
      );
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "KomalThakur_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading Resume:", error);
    }
  };

  return (
    <div
      className={`grid place-items-center border rounded-lg my-[3rem]  md:mt-10 lg:p-2 2xl:p-12 mx-8  lg:ms-48 lg:me-36  lg:mt-14 xl:mt-16 2xl:mt-24 2xl:mb-28 3xl:mt-32 h-[78vh] md:h-[65vh]  text-[#eaeaf4]   ${
        dark
          ? "bg-[#5194ff15] border-[#C7CEFE]"
          : "bg-[#0406229c] border-[#cccfe2]"
      }`}
    >
      <div className=" ">
        <div className="   px-8 xl:px-16 2xl:px-24 md:p-8 xl:p-0">
          <div className="text-2xl 2xl:text-5xl xl:pt-8 xl:pb-6 2xl:pt-6 2xl:pb-6 3xl:py-12 pb-[1.5rem] lg:pb-[1rem] ">
            I’m
          </div>
          <div
            className={`ubuntu-mono-bold lg:py-[0.5rem] text-4xl xl:text-5xl 2xl:text-6xl  ${
              dark ? "text-shadow" : "text-shadow-dark"
            }`}
          >
            Full Stack Developer.
          </div>
          <div className="md:text-lg lg:text-base xl:text-lg 3xl:text-xl 3xl:pt-6 pt-[2rem] 3xl:pt-[3rem]">
            "Skilled Full Stack Developer with expertise in React, Nest.js, and
            Next.js. Dedicated to delivering top-notch solutions through careful
            coding and continuous learning."
          </div>
        </div>
        <div className="flex text-lg 2xl:text-2xl xl:mt-6 2xl:mt-16 md:ps-12 xl:ps-24 ps-8 pt-[2.5rem] lg:pt-0">
          <button
            className=" rounded-lg px-4 2xl:px-6 py-1 me-8 bg-gradient-to-b from-[#4f8aff] to-[#2c36fc] hover:shadow-lg hover:shadow-[#2c36fcd8]  hover:border"
            onClick={() => {
              scrollToFooter();
            }}
          >
            Contact
          </button>
          <button
            className="flex border-b-2 pb-1 hover:border-[#5860ffda]"
            onClick={() => {
              handleDownloadResume();
            }}
          >
            <span className=" me-2">Resume</span>
            <FiDownload className="mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

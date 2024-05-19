import { MdDoubleArrow } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";

const About = () => {
  const { dark } = useSelector((state: rootType) => state.theme);
  const themeColor = `${dark ? "[#4f8aff]" : "black"}`;
  return (
    <div className="py-4">
      <div className="grid grid-cols-2 mt-24 mb-10 h-[60vh]">
        <div className="">
          <img
            className={`w-3/5 mx-auto ${dark ? "" : "image-shadow-lg"}`}
            src="/assets/images/about-img.svg"
            alt="girl coding"
          />
        </div>
        <div className="px-28 mt-8">
          <div className=" text-4xl pb-8 flex">
            <MdDoubleArrow className={`me-4 mt-1 text-${themeColor} `} />
            <div>About Me</div>
          </div>
          <div className="text-lg ps-4">
            I'm Komal Thakur, an skilled Full Stack Developer passionate about
            new technologies. With 1 year of experience in technologies like
            React , Nest.js, and Next.js, I thrive on solving complex challenges
            through code. I value continuous learning, teamwork, and effective
            communication to deliver high-quality solutions.
          </div>
          <div className="flex ps-3 mt-4">
            <a
              href="mailto:komalthakur100400@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdMail className={`text-${themeColor} w-14 h-8 me-4`} />
            </a>
            <a
              href="https://www.linkedin.com/in/komal-thakur-40ab06237/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className={` text-${themeColor} w-6 h-6 mt-1 me-6`} />
            </a>
            <a
              href="https://github.com/komalthakur10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className={` text-${themeColor} w-7 h-8 `} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

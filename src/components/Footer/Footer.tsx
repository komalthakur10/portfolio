import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import { useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";

const Footer = () => {
  const { dark } = useSelector((state: rootType) => state.theme);
  const themeColor = `${dark ? "[#06080c71]" : "[#15183fc1] "}`;
  return (
    <div className="mx-10 py-12">
      <div
        className={`grid grid-cols-3 border-2  px-10 py-6 rounded-xl text-white bg-${themeColor} shadow-md  shadow-[rgba(44,54,252,0.41)] `}
      >
        <a
          href="mailto:komalthakur100400@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center">
            <IoMdMail className=" text-[#4f8aff] w-14 h-10 me-4" />
            <div className="pt-2">komalthakur100400@gmail.com</div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/komal-thakur-40ab06237/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center">
            <SiLinkedin className=" text-[#4f8aff] w-8 h-8 mt-1 me-6" />
            <div className="pt-2">komal-thakur-40ab06237</div>
          </div>
        </a>
        <a
          href="https://github.com/komalthakur10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center">
            <IoLogoGithub className=" text-[#4f8aff] w-9 h-10 " />
            <div className="pt-2 ps-5">komalthakur10</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;

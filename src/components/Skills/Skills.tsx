import { MdDoubleArrow } from "react-icons/md";
import { useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";

const Skills = () => {
  const { dark } = useSelector((state: rootType) => state.theme);
  const themeShadow = `${dark ? " image-shadow " : "image-shadow-light "}`;
  return (
    <div className="">
      <div className="text-3xl lg:text-4xl lg:pb-8 flex ms-8 lg:ms-24 ">
        <MdDoubleArrow className="me-4 mt-1 text-[#4f8aff] " />
        <div>Skills</div>
      </div>
      <div
        className={`border border-[#C7CEFE] rounded-lg py-12 mx-8 lg:mx-20 my-8 
       ${
         dark
           ? "bg-[#5194ff15] border-[#C7CEFE]"
           : "bg-[#15183fc1] border-[#cccfe2]"
       }
        `}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 text-xl text-center gap-y-10 gap-x-4 text-white">
          <div className={`${themeShadow}`}>
            <img
              src="assets/icons/react-logo.png"
              alt="react-logo"
              loading="lazy"
              className="mx-auto pb-2 "
            />
            <div>React</div>
          </div>
          <div className={`${themeShadow}`}>
            <img
              src="assets/icons/nest-logo.png"
              alt="nest-logo"
              loading="lazy"
              className="mx-auto pb-2"
            />
            <div>Nest.js</div>
          </div>
          <div className={`${themeShadow}`}>
            <img
              src="assets/icons/next-logo.png"
              alt="next-logo"
              loading="lazy"
              className="my-8 mx-auto p-2"
            />
            <div>Next.js</div>
          </div>
          <div className={`${themeShadow}`}>
            <img
              src="assets/icons/react-logo.png"
              alt="react-native-logo"
              loading="lazy"
              className="mx-auto pb-2"
            />
            <div>React Native</div>
          </div>
          <div className={`${themeShadow}`}>
            <img
              src="assets/icons/express-logo.png"
              alt="express-logo"
              loading="lazy"
              className="mx-auto pb-2"
            />
            <div>Express</div>
          </div>
          <div className={`${themeShadow}`}>
            <img
              src="assets/icons/python-logo.png"
              alt="python-logo"
              loading="lazy"
              className="mx-auto pb-2"
            />
            <div>Python</div>
          </div>
          <div className={`${themeShadow}`}>
            <img
              src="assets/icons/aws-logo.png"
              alt="aws-logo"
              loading="lazy"
              className="mx-auto pb-4 px-8"
            />
            <div>AWS</div>
          </div>
          <div className={`${themeShadow}`}>
            <img
              src="assets/icons/gcp-logo.png"
              alt="gcp-logo"
              loading="lazy"
              className="mx-auto pb-4 px-8"
            />
            <div>GCP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
<div>Skills</div>;

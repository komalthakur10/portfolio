import { MdDoubleArrow } from "react-icons/md";

const Skills = () => {
  return (
    <div className="mt-24">
      <div className=" text-4xl pb-8 flex ms-24">
        <MdDoubleArrow className="me-4 mt-1 text-[#4f8aff] " />
        <div>Skills</div>
      </div>
      <div className="border bg-[#5194ff15] border-[#C7CEFE] rounded-lg py-12  mx-20 my-8">
        <div className="grid grid-cols-4 text-xl text-center gap-y-10 gap-x-4">
          <div>
            <img
              src="assets/icons/react-logo.png"
              alt="react-logo"
              loading="lazy"
              className="mx-auto pb-2"
            />
            <div>React</div>
          </div>
          <div>
            <img
              src="assets/icons/nest-logo.png"
              alt="nest-logo"
              loading="lazy"
              className="mx-auto pb-2"
            />
            <div>Nest.js</div>
          </div>
          <div>
            <img
              src="assets/icons/next-logo.png"
              alt="next-logo"
              loading="lazy"
              className="my-8 mx-auto p-2"
            />
            <div>Next.js</div>
          </div>
          <div>
            <img
              src="assets/icons/react-logo.png"
              alt="react-native-logo"
              loading="lazy"
              className="mx-auto pb-2"
            />
            <div>React Native</div>
          </div>
          <div>
            <img
              src="assets/icons/express-logo.png"
              alt="express-logo"
              loading="lazy"
              className="mx-auto pb-2"
            />
            <div>Express</div>
          </div>
          <div>
            <img
              src="assets/icons/python-logo.png"
              alt="python-logo"
              loading="lazy"
              className="mx-auto pb-2"
            />
            <div>Python</div>
          </div>
          <div>
            <img
              src="assets/icons/aws-logo.png"
              alt="aws-logo"
              loading="lazy"
              className="mx-auto pb-4 px-8"
            />
            <div>AWS</div>
          </div>
          <div>
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

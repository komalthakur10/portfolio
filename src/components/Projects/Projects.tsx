import { useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";

const Projects = () => {
  const { dark } = useSelector((state: rootType) => state.theme);
  return (
    <div className="pb-8 pt-20">
      <div className="text-3xl my-12 flex justify-center ">
        <div
          className={`ml-12 border-b-2 pb-2 ${dark ? "" : " border-black "}`}
        >
          My Personal Projects
        </div>
      </div>
      <div className="grid grid-cols-2 mb-10">
        <div className="mx-10 p-5">
          <a
            href="https://scape-chat.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/images/scape-project-img.png"
              alt="scape-project-images "
              loading="lazy"
              className="drop-shadow-2xl"
            />
          </a>
        </div>
        <div className="p-5">
          <div className="text-3xl my-8 ">
            <a
              href="https://scape-chat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scape
            </a>
          </div>
          <div className="text-lg ">
            Built a real-time chat application utilizing Socket.io for instant
            communication, seamlessly integrated within a Next.js and Nest.js
            environment. Implemented responsive design with Tailwind CSS for
            visually appealing UI/UX.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-10">
        <div className="px-16 py-5">
          <div className="text-3xl my-8 ">
            <a
              href="https://zest-organic.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="drop-shadow-2xl"
            >
              Zest
            </a>
          </div>
          <div className="text-lg ">
            Built a user-friendly online store for effortless shopping
            experiences. Enabled secure logins, smooth payments, and order
            confirmations for customers.Integrated features such as user
            authentication via JWT, streamlined payment processing with Razorpay
            Checkout, and automated email notifications through Nodemailer.
          </div>
        </div>
        <div className="mx-10 p-5">
          <a
            href="https://zest-organic.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/images/zest-project-img.png"
              alt="zest-project-images"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-10">
        <div className="mx-10 p-5">
          <a
            href="https://sparky-9f2fa.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/images/sparky-project-img.png"
              alt="sparky-project-images"
              loading="lazy"
              className="drop-shadow-2xl"
            />
          </a>
        </div>
        <div className="p-5">
          <div className="text-3xl my-8 ">
            <a
              href="https://sparky-9f2fa.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sparky
            </a>
          </div>
          <div className="text-lg ">
            Built a user-friendly online store for effortless shopping
            experiences. Enabled secure logins, smooth payments, and order
            confirmations for customers.Integrated features such as user
            authentication via JWT, streamlined payment processing with Razorpay
            Checkout, and automated email notifications through Nodemailer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

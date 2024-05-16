const Projects = () => {
  return (
    <div>
      <div className="text-3xl my-12 flex justify-center">
        <div className="ml-12 border-b pb-2">My Personal Projects</div>
      </div>
      <div className="grid grid-cols-2 mb-10">
        <div className="mx-10 p-5">
          <img
            src="assets/images/scape-project-img.png"
            alt="scape-project-images"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <div className="text-3xl my-8 ">Scape</div>
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
          <div className="text-3xl my-8 ">Zest</div>
          <div className="text-lg ">
            Built a user-friendly online store for effortless shopping
            experiences. Enabled secure logins, smooth payments, and order
            confirmations for customers.Integrated features such as user
            authentication via JWT, streamlined payment processing with Razorpay
            Checkout, and automated email notifications through Nodemailer.
          </div>
        </div>
        <div className="mx-10 p-5">
          <img
            src="assets/images/zest-project-img.png"
            alt="scape-project-images"
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mb-10">
        <div className="mx-10 p-5">
          <img
            src="assets/images/sparky-project-img.png"
            alt="scape-project-images"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <div className="text-3xl my-8 ">Sparky</div>
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

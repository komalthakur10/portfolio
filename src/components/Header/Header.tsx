import { MdLightMode } from "react-icons/md";
const Header = () => {
  return (
    <div className="p-4 border-b mx-4">
      <div className="grid lg:grid-cols-2">
        <div className="flex">
          <img
            className="cursor-pointer w-12"
            src="/assets/icons/logo.svg"
            alt="profile-logo"
          />
          <div className="text-2xl pt-1 ps-4">Komal Thakur</div>
        </div>
        <div className="">
          <div className="grid grid-flow-col gap-8 text-xl pt-2 lg:ms-[15rem]">
            <div className="text-center pb-1 hover:border-b-2 hover:border-[#2c36fc]">
              Home
            </div>
            <div className="text-center pb-1 hover:border-b-2 hover:border-[#2c36fc]">
              About
            </div>
            <div className="text-center pb-1 hover:border-b-2 hover:border-[#2c36fc]">
              Projects
            </div>
            <div className="text-center">
              <button className="bg-gradient-to-b from-[#4f8aff] to-[#2c36fc] rounded-lg hover:shadow-md hover:shadow-[#2c36fc] hover:border-black hover:dark:border pb-1 px-4 text-white">
                Contact
              </button>
            </div>
            <div className="rounded-full bg-white hover:bg-black hover:border w-8 h-8 p-[6px] ">
              <MdLightMode className="text-black hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

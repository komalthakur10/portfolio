import { useDispatch, useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";
import { setTheme } from "../../redux/reducer/themeReducer";
import { MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdNightlight } from "react-icons/md";

interface HeaderProps {
  scrollToHome: Function;
  scrollToAbout: Function;
  scrollToProject: Function;
  scrollToSkill: Function;
  active: string | null;
}

const Header = ({
  scrollToHome,
  scrollToAbout,
  scrollToProject,
  scrollToSkill,
  active,
}: HeaderProps) => {
  const dispatch = useDispatch();
  const { dark } = useSelector((state: rootType) => state.theme);
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div
      className={`z-10 p-4 border-b sticky top-0 ${
        dark ? "bg-[#020A20]" : "bg-[#15183ff1]"
      } `}
    >
      <div className="grid lg:block grid-cols-12">
        <div className="col-span-11  grid grid-cols-1 lg:grid-cols-2 text-white">
          <div
            className="flex cursor-pointer"
            onClick={() => {
              scrollToHome();
              setMobileMenu(false);
            }}
          >
            <img
              className="w-10 xl:w-12 drop-shadow-lg"
              src="/assets/icons/logo.svg"
              alt="profile-logo"
            />
            <div className="text-xl xl:text-2xl pt-1 ps-4  ">Komal Thakur</div>
          </div>
          <div className={`${mobileMenu ? "" : "hidden"} lg:block`}>
            <div className="grid lg:grid-flow-col lg:gap-4 2xl:gap-8 md:text-md xl:text-xl pt-2 lg:ms-24 2xl:ms-[15rem]">
              <div
                className={` xl:pb-1 hover:border-b-2 hover:border-[#52d3e4] mx-auto ${
                  active === "Home" ? " border-b-2 border-[#52d3e4]  " : ""
                }`}
                onClick={() => {
                  scrollToHome();
                  setMobileMenu(false);
                }}
              >
                Home
              </div>
              <div
                className={`text-center xl:pb-1 hover:border-b-2 hover:border-[#52d3e4] mx-auto ${
                  active === "About" ? " border-b-2 border-[#52d3e4]  " : ""
                }`}
                onClick={() => {
                  scrollToAbout();
                  setMobileMenu(false);
                }}
              >
                About
              </div>
              <div
                className={` xl:pb-1 hover:border-b-2 hover:border-[#52d3e4] mx-auto ${
                  active === "Project" ? " border-b-2 border-[#52d3e4]  " : ""
                }`}
                onClick={() => {
                  scrollToProject();
                  setMobileMenu(false);
                }}
              >
                Projects
              </div>{" "}
              <div
                className={` xl:pb-1 hover:border-b-2 hover:border-[#52d3e4] mx-auto ${
                  active === "Skill" ? " border-b-2 border-[#52d3e4]  " : ""
                }`}
                onClick={() => {
                  scrollToSkill();
                  setMobileMenu(false);
                }}
              >
                Skills
              </div>
              <div
                className={`lg:hidden xl:pb-1 hover:border-b-2 hover:border-[#52d3e4] mx-auto ${
                  active === "Skill" ? " border-b-2 border-[#52d3e4]  " : ""
                }`}
                onClick={() => {
                  dispatch(setTheme(!dark));
                  setMobileMenu(false);
                }}
              >
                {dark ? "Light Theme" : "Dark Theme"}
              </div>
              <div
                className={`hidden lg:block rounded-full w-8 h-8 md:p-2 xl:p-[6px] ${
                  dark ? " bg-white" : " bg-black"
                }`}
                onClick={() => {
                  dispatch(setTheme(!dark));
                  setMobileMenu(false);
                }}
              >
                {dark ? (
                  <MdLightMode className="text-black" />
                ) : (
                  <MdNightlight className="text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:hidden"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          {mobileMenu ? (
            <IoMdClose className=" text-white w-6 h-6 md:ms-4 mt-1" />
          ) : (
            <GiHamburgerMenu className=" text-white w-6 h-6 md:ms-4 mt-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

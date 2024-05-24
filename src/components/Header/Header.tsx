import { useDispatch, useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";
import { setTheme } from "../../redux/reducer/themeReducer";
import { MdLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

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
            }}
          >
            <img
              className="w-10 xl:w-12 drop-shadow-lg"
              src="/assets/icons/logo.svg"
              alt="profile-logo"
            />
            <div className="text-xl xl:text-2xl pt-1 ps-4  ">Komal Thakur</div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-flow-col lg:gap-4 2xl:gap-8 md:text-md xl:text-xl pt-2 ms-24 2xl:ms-[15rem]">
              <div
                className={`text-center xl:pb-1 hover:border-b-2 hover:border-[#52d3e4] ${
                  active === "Home" ? " border-b-2 border-[#52d3e4]  " : ""
                }`}
                onClick={() => {
                  scrollToHome();
                }}
              >
                Home
              </div>
              <div
                className={`text-center xl:pb-1 hover:border-b-2 hover:border-[#52d3e4] ${
                  active === "About" ? " border-b-2 border-[#52d3e4]  " : ""
                }`}
                onClick={() => {
                  scrollToAbout();
                }}
              >
                About
              </div>
              <div
                className={`text-center xl:pb-1 hover:border-b-2 hover:border-[#52d3e4] ${
                  active === "Project" ? " border-b-2 border-[#52d3e4]  " : ""
                }`}
                onClick={() => {
                  scrollToProject();
                }}
              >
                Projects
              </div>{" "}
              <div
                className={`text-center xl:pb-1 hover:border-b-2 hover:border-[#52d3e4] ${
                  active === "Skill" ? " border-b-2 border-[#52d3e4]  " : ""
                }`}
                onClick={() => {
                  scrollToSkill();
                }}
              >
                Skills
              </div>
              <div
                className="rounded-full bg-white hover:bg-black hover:border w-8 h-8 md:p-2 xl:p-[6px]"
                onClick={() => {
                  dispatch(setTheme(!dark));
                }}
              >
                <MdLightMode className="text-black hover:text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <GiHamburgerMenu className="w-6 h-6 md:ms-4 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Header;

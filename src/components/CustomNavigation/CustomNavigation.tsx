import { useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";

interface CustomNavigationProps {
  scrollToHome: Function;
  scrollToAbout: Function;
  scrollToProject: Function;
  scrollToSkill: Function;
  active: string | null;
}

const CustomNavigation = ({
  scrollToHome,
  scrollToAbout,
  scrollToProject,
  scrollToSkill,
  active,
}: CustomNavigationProps) => {
  const { dark } = useSelector((state: rootType) => state.theme);
  return (
    <div className=" fixed md:right-10 xl:right-16">
      <div className="flex justify-center md:mt-24 xl:mt-16 2xl:mt-[12rem] 3xl:mt-[15rem] ">
        <div>
          <div
            className={
              active === "Home"
                ? "rounded-full bg-gradient-to-b from-[#4f8aff] to-[#000dff] md:h-6 xl:h-8 md:w-6 xl:w-8"
                : `rounded-full md:border-2 xl:border-4 md:h-6 xl:h-8 md:w-6 xl:w-8 ${
                    dark ? "border-[#7798FF]" : "border-[#000dff]"
                  }`
            }
            onClick={() => {
              scrollToHome();
            }}
          ></div>
          <div className="border-e md:h-16 xl:h-20 ps-2 me-3 xl:me-[15px]"></div>
          <div
            className={
              active === "About"
                ? "rounded-full bg-gradient-to-b from-[#4f8aff] to-[#000dff] md:h-6 xl:h-8 md:w-6 xl:w-8"
                : `rounded-full md:border-2 xl:border-4 md:h-6 xl:h-8 md:w-6 xl:w-8 ${
                    dark ? "border-[#7798FF]" : "border-[#000dff]"
                  }`
            }
            onClick={() => {
              scrollToAbout();
            }}
          ></div>
          <div className="border-e md:h-16 xl:h-20 ps-2 me-3 xl:me-[15px]"></div>
          <div
            className={
              active === "Project"
                ? "rounded-full bg-gradient-to-b from-[#4f8aff] to-[#000dff] md:h-6 xl:h-8 md:w-6 xl:w-8"
                : `rounded-full md:border-2 xl:border-4 md:h-6 xl:h-8 md:w-6 xl:w-8 ${
                    dark ? "border-[#7798FF]" : "border-[#000dff]"
                  }`
            }
            onClick={() => {
              scrollToProject();
            }}
          ></div>
          <div className="border-e md:h-16 xl:h-20 ps-2 me-3 xl:me-[15px]"></div>
          <div
            className={
              active === "Skill"
                ? "rounded-full bg-gradient-to-b from-[#4f8aff] to-[#000dff] md:h-6 xl:h-8 md:w-6 xl:w-8"
                : `rounded-full md:border-2 xl:border-4 md:h-6 xl:h-8 md:w-6 xl:w-8 ${
                    dark ? "border-[#7798FF]" : "border-[#000dff]"
                  }`
            }
            onClick={() => {
              scrollToSkill();
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CustomNavigation;

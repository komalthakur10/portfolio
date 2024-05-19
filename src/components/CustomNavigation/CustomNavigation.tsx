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
    <div className=" fixed md:right-10 lg:right-16">
      <div className="flex justify-center mt-36 ">
        <div>
          <div
            className={
              active === "Home"
                ? "rounded-full bg-gradient-to-b from-[#5188f4] to-[#000dff] h-8 w-8"
                : `rounded-full border-4  h-8 w-8 ${
                    dark ? "border-[#7798FF]" : "border-[#000dff]"
                  }`
            }
            onClick={() => {
              scrollToHome();
            }}
          ></div>
          <div className="border-e h-20 ps-2 me-[15px]"></div>
          <div
            className={
              active === "About"
                ? "rounded-full bg-gradient-to-b from-[#4f8aff] to-[#000dff] h-8 w-8"
                : `rounded-full border-4  h-8 w-8 ${
                    dark ? "border-[#7798FF]" : "border-[#000dff]"
                  }`
            }
            onClick={() => {
              scrollToAbout();
            }}
          ></div>
          <div className="border-e h-20 ps-2 me-[15px]"></div>
          <div
            className={
              active === "Project"
                ? "rounded-full bg-gradient-to-b from-[#4f8aff] to-[#000dff] h-8 w-8"
                : `rounded-full border-4  h-8 w-8 ${
                    dark ? "border-[#7798FF]" : "border-[#000dff]"
                  }`
            }
            onClick={() => {
              scrollToProject();
            }}
          ></div>
          <div className="border-e h-20 ps-2 me-[15px]"></div>
          <div
            className={
              active === "Skill"
                ? "rounded-full bg-gradient-to-b from-[#4f8aff] to-[#000dff] h-8 w-8"
                : `rounded-full border-4  h-8 w-8 ${
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

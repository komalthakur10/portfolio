import { ReactNode, RefObject } from "react";
import { useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";

//components
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CustomNavigation from "../CustomNavigation/CustomNavigation";

interface LayoutProps {
  children: ReactNode;
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
  skillRef: RefObject<HTMLDivElement>;
  active: string | null;
}

const Layout = ({
  children,
  homeRef,
  aboutRef,
  projectRef,
  skillRef,
  active,
}: LayoutProps) => {
  const { dark } = useSelector((state: rootType) => state.theme);

  const scrollToHome = () =>
    homeRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToSkill = () =>
    skillRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <div
      className={
        dark
          ? `bg-gradient-to-r from-[#1A1B54] via-[#11143F] to-[#020A20] dark:text-white`
          : `bg-gradient-to-r from-[#9ecae8] via-[#90b3ea] to-[#5176d4]`
      }
    >
      <Header
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToProject={scrollToProject}
        scrollToSkill={scrollToSkill}
        active={active}
      />
      <div className=" max-w-[1480px] mx-auto">
        <div className="grid grid-cols-11 lg:grid-cols-12">
          <div className="col-span-12 lg:col-span-11">{children}</div>
          <div className="lg:col-span-1 hidden md:block">
            <CustomNavigation
              scrollToHome={scrollToHome}
              scrollToAbout={scrollToAbout}
              scrollToProject={scrollToProject}
              scrollToSkill={scrollToSkill}
              active={active}
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

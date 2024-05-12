import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { rootType } from "../../redux/rootReducer";

//components
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { dark }: any = useSelector((state: rootType) => state.theme);
  return (
    <div
      className={
        dark
          ? `bg-gradient-to-r from-[#1A1B54] via-[#11143F] to-[#020A20] dark:text-white`
          : `bg-gradient-to-r from-[#b0c4ff] via-[#7692ff] to-[#4f8aff]`
      }
    >
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div
      className="bg-gradient-to-r from-[#1A1B54] via-[#11143F] to-[#020A20] dark:text-white"
      // className="bg-gradient-to-r from-[#b0c4ff] via-[#7692ff] to-[#4f8aff] "
    >
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

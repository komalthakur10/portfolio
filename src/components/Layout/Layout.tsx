import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

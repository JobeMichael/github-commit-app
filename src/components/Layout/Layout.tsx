import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import * as S from "./Layout.styles";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
};

export default Layout;

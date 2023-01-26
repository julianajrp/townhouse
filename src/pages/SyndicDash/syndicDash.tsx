import { Outlet } from "react-router-dom";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

import StyledSyndicDash from "./style";

export const SyndicDash = () => {
  return (
    <StyledSyndicDash>
      <Header />
      <Outlet />
      <Footer />
    </StyledSyndicDash>
  );
};

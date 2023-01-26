import { Outlet } from "react-router-dom";

import StyledResidentDash from "./style";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

export const ResidentDash = () => {
  return (
    <StyledResidentDash>
      <Header />
      <Outlet />
      <Footer />
    </StyledResidentDash>
  );
};

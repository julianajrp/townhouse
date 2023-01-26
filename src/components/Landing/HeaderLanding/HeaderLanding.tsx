import React from "react";
import { Link } from "react-router-dom";
import { TitleLogo, StyledHeader, Navigatore, StyledP } from "./HeaderStyle";

const HeaderLanding = () => {
  const login = require("../assets/profile.png");
  const register = require("../assets/registro.png");
  return (
    <StyledHeader>
      <Link to={"/"}>
        <TitleLogo>TownHouse</TitleLogo>
      </Link>
      <Navigatore>
        <Link to={"/login"} className="headline">
          <img src={login} alt="" />
          <StyledP>Login</StyledP>
        </Link>

        <Link to={"/register"} className="headline">
          <img src={register} alt="" />
          <StyledP>Cadastro</StyledP>
        </Link>
      </Navigatore>
    </StyledHeader>
  );
};

export default HeaderLanding;

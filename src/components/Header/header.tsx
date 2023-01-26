import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import { Link } from "react-router-dom";

import StyledHeader from "./style";

const Header = () => {
  const { user } = useContext(AuthContext);
  const Logo = require("../../Img/white-logo.png");

  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt="Logo da TownHouse" />
        {user?.isSyndic ? (
          <nav>
            <Link to={"/syndic_dashboard"} className="headline">
              Home
            </Link>
            <Link to={"/syndic_dashboard/reservas"} className="headline">
              Reservas
            </Link>
            <Link to={"/syndic_dashboard/resident_delete"} className="headline">
              Usuários
            </Link>
            <Link to={"/syndic_dashboard/profile"}>Perfil</Link>
          </nav>
        ) : (
          <nav>
            <Link to={"/resident_dashboard"}>Mural</Link>
            <Link to={"/resident_dashboard/reservas"}>Reservas</Link>
            <Link to={"/resident_dashboard/profile"}>Perfil</Link>
          </nav>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;

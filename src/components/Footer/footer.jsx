import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import { Link } from "react-router-dom";

import { GrHomeRounded } from "react-icons/gr";
import { BsCalendar3, BsPerson } from "react-icons/bs";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import StyledFooter from "./style";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <StyledFooter>
      {user?.isSyndic ? (
        <nav>
          <Link to={"/syndic_dashboard"}>
            <GrHomeRounded strokeOpacity={0.5} />
          </Link>
          <Link to={"/syndic_dashboard/reservas"}>
            <BsCalendar3 />
          </Link>
          <Link to={"/syndic_dashboard/resident_delete"}>
            <MdPersonRemoveAlt1 />
          </Link>
          <Link to={"/syndic_dashboard/profile"}>
            <BsPerson />
          </Link>
        </nav>
      ) : (
        <nav>
          <Link to={"/resident_dashboard"}>
            <GrHomeRounded />
          </Link>
          <Link to={"/resident_dashboard/reservas"}>
            <BsCalendar3 />
          </Link>
          <Link to={"/resident_dashboard/profile"}>
            <BsPerson />
          </Link>
        </nav>
      )}
    </StyledFooter>
  );
};

export default Footer;

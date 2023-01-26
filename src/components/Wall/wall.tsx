import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const Wall = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return (
      <>
        <p>Muro das lamentações</p>
        <p>{user.name}</p>
        <p>{user.aptNumber}</p>
      </>
    );
  } else {
    return null;
  }
};

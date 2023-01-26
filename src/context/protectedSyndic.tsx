import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./authContext";

//Componente para autenticação das rotas do síndico
export const ProtectedSyndic = () => {
  const { user } = useContext(AuthContext);

  if (user?.isSyndic) {
    return <Outlet />;
  } else {
    return (
      <>
        {localStorage.clear()}
        <Navigate to="/" replace />
      </>
    );
  }
};

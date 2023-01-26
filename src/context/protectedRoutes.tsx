import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./authContext";

//Componente de proteção das rotas que necessitam de autenticação: dash do síndico e do morador

export const ProtectedRoutes = () => {
  const { loadingAuth, user } = useContext(AuthContext);

  if (loadingAuth) {
    return null;
  }
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

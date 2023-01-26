import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiLoginUser, ILogUser, IUser } from "../services/userServices/login";
import { authUser } from "../services/userServices/authUser";
import { apiRegisterUser } from "../services/userServices/register";
import { notifyError, notifySuccess } from "../components/Toastify/toast";
import { apiGetUsers } from "../services/userServices/getUsersL";

interface IAuthContexProps {
  children: React.ReactNode;
}

interface IAuthContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loadingAuth: boolean;
  setLoadingAuth: React.Dispatch<React.SetStateAction<boolean>>;
  loginUser: (data: ILogUser) => Promise<void>;
  registerUser: (data: IUser) => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthContexProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //UseEffect de montagem que verifica se o token e o id são válidos
  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("userToken");
      const userId = localStorage.getItem("userId");

      if (token && userId) {
        try {
          const userInfo = await authUser(userId, token);
          setUser(userInfo);
        } catch (error) {
          localStorage.removeItem("userToken");
          localStorage.removeItem("userId");
          console.log(error);
        }
      }
      setLoadingAuth(false);
    }

    loadUser();
  }, []);

  async function loginUser(data: ILogUser) {
    try {
      setLoading(true);
      const { accessToken, user: userInfo } = await apiLoginUser(data);
      localStorage.setItem("userToken", accessToken);
      localStorage.setItem("userId", JSON.stringify(userInfo.id));
      await apiGetUsers(accessToken);
      setUser(userInfo); //guardando as informações de usuário no state de user

      notifySuccess("Login realizado com sucesso");

      if (userInfo.isSyndic === true) {
        navigate("/syndic_dashboard");
      } else {
        navigate("/resident_dashboard");
      }
    } catch (error) {
      notifyError("Email ou senha inválidos 😓");
      if (axios.isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function registerUser(data: IUser) {
    try {
      setLoading(true);
      await apiRegisterUser(data);

      navigate("/"); //redireciona para fazer login

      notifySuccess("Cadastro realizado");
    } catch (error) {
      notifyError("Algo deu errado");
      if (axios.isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }

  const globalValues: IAuthContext = {
    user: user,
    setUser: setUser,
    loadingAuth: loadingAuth,
    setLoadingAuth: setLoadingAuth,
    loginUser: loginUser,
    registerUser: registerUser,
    loading: loading,
  };

  return (
    <AuthContext.Provider value={globalValues}>{children}</AuthContext.Provider>
  );
};

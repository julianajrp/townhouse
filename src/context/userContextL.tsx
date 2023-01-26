import axios from "axios";
import React, {
  createContext,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { notifyError, notifySuccess } from "../components/Toastify/toast";
import { apiDeleteUser } from "../services/userServices/deleteUser";
import { apiGetUsers } from "../services/userServices/getUsersL";
import { IUser } from "../services/userServices/login";

interface IUserContextProps {
  children: React.ReactNode;
}

export interface IUserData {
  userId: number | undefined;
  userName: string;
  userApartament: string;
}

interface IUserContext {
  openModal: (id: number | undefined, name: string, apartment: string) => void;
  deleteUser: (userId: number | undefined) => void;
  currentUser: IUserData | null;
  setCurrentUser: React.Dispatch<SetStateAction<IUserData | null>>;
  userList: IUser[];
  closeModal: () => void;
  setUserList: React.Dispatch<SetStateAction<IUser[]>>;
  loading: boolean;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [currentUser, setCurrentUser] = useState<IUserData | null>(null);
  const [userList, setUserList] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiGetUsers(localStorage.getItem("userToken")).then((res) => {
      setUserList(res.data);
    });
  }, []);

  function openModal(id: number | undefined, name: string, apartment: string) {
    setCurrentUser({
      userId: id,
      userName: name,
      userApartament: apartment,
    });
  }

  function closeModal() {
    setCurrentUser(null);
  }

  async function deleteUser(userId: number | undefined) {
    try {
      setCurrentUser(null);
      setLoading(true);
      const token = localStorage.getItem("userToken");
      await apiDeleteUser(userId, token);
      const newUserList = userList.filter((x) => {
        return x.id !== userId;
      });
      notifySuccess("Usuário deletado com sucesso");

      setUserList(newUserList);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notifyError(
          "Algo deu errado, favor atualizar a página e tentar novamente"
        );
      } else {
        notifyError(
          "Algo deu errado, favor atualizar a página e tentar novamente"
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        deleteUser,
        currentUser,
        openModal,
        setCurrentUser,
        userList,
        closeModal,
        setUserList,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

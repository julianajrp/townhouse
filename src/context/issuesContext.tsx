import axios from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { notifyError, notifySuccess } from "../components/Toastify/toast";
import { apiCreateIssues } from "../services/IssuesServices/createIssues";
import { apiDeleteIssues } from "../services/IssuesServices/deleteIssues";
import { apiEditIssues } from "../services/IssuesServices/editIssues";
import { apiGetIssues } from "../services/IssuesServices/getIssues";
import { IUser } from "../services/userServices/login";

interface IIssuesContextProps {
  children: ReactNode;
}

export interface IIssues {
  type: string | undefined;
  description: string;
  date: string;
  user: IUser | null;
}

export interface IIssuesResponse {
  id: number;
  type: string;
  title: string;
  description: string;
  date: string;
  user: IUser;
  reply: string;
}

export interface IIssuesCreate extends IIssues {
  title: string;
}

interface IIssuesContext {
  createIssues(data: IIssuesCreate): void;
  deleteIssues(id: number | undefined): void;
  editIssues(data: string, id: number | undefined): void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  filteredIssues: IIssuesResponse[] | null | undefined;
  currentIssue: IIssuesResponse | null | undefined;
  setCurrentIssueFunction(id: number): void;
  modalCreate: boolean;
  setModalCreate: React.Dispatch<React.SetStateAction<boolean>>;
  modalDelete: boolean;
  setModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  modalResponse: boolean;
  setModalResponse: React.Dispatch<React.SetStateAction<boolean>>;
  replyIssues: (replyText: string, id: number | undefined) => void;
  loading: boolean;
  date: string;
  setNewDate: React.Dispatch<React.SetStateAction<string>>;
  newIssue: string;
  setNewIssue: React.Dispatch<React.SetStateAction<string>>;
  typeIssue: string | undefined;
  setTypeIssue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const IssuesContext = createContext({} as IIssuesContext);

export const IssuesProvider = ({ children }: IIssuesContextProps) => {
  const [issuesList, setIssuesList] = useState<IIssuesResponse[]>([]);
  const [filter, setFilter] = useState<string>("todos");
  const [currentIssue, setCurrentIssue] = useState<
    IIssuesResponse | null | undefined
  >(null);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalResponse, setModalResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setNewDate] = useState<string>("");
  const [newIssue, setNewIssue] = useState<string>("");
  const [typeIssue, setTypeIssue] = useState<string | undefined>("");

  let filteredIssues = //o filteredIssues é o array que deve ser renderizada
    filter === "todos"
      ? issuesList?.filter((elem) => elem.type === "aviso")
      : issuesList?.filter(
          (elem) => elem.type === filter || elem.type === "reclamação"
        );

  //a partir daqui, deve dever ser usado um onClick no button
  //chamando a função setFilter() e setar o type das issues a
  // serem renderizadas.

  const token = localStorage.getItem("userToken");
  useEffect(() => {
    async function getIssues() {
      const token = localStorage.getItem("userToken");

      const allIssues = await apiGetIssues(token);
      setIssuesList(allIssues);
    }
    getIssues();
  }, []);

  async function createIssues(data: IIssuesCreate) {
    if (token) {
      try {
        setLoading(true);
        await apiCreateIssues(data, token);
        await apiGetIssues(token).then((res) => setIssuesList(res));
        notifySuccess(`${data.type} criado com sucesso`);
      } catch (error) {
        notifyError("Algo deu errado !");
        if (axios.isAxiosError(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    }
  }

  async function editIssues(newText: string, id: number | undefined) {
    if (token) {
      try {
        setModalEdit(false);
        setLoading(true);
        const newDescription = { description: newText };
        await apiEditIssues(newDescription, id, token);
        await apiGetIssues(token).then((res) => setIssuesList(res));
        notifySuccess("Alteração feita com sucesso!");
      } catch (error) {
        notifyError("Algo deu errado !");
        if (axios.isAxiosError(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    }
  }

  async function replyIssues(replyText: string, id: number | undefined) {
    if (token) {
      try {
        setModalResponse(false);
        setLoading(true);
        const newText = { reply: replyText };
        await apiEditIssues(newText, id, token);
        await apiGetIssues(token).then((res) => setIssuesList(res));
      } catch (error) {
        notifyError("Algo deu errado !");
        if (axios.isAxiosError(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    }
  }

  async function deleteIssues(id: number | undefined) {
    if (token) {
      try {
        setModalDelete(false);
        setLoading(true);
        await apiDeleteIssues(id, token);
        const newIssueList = issuesList?.filter((x) => {
          return x.id !== id;
        });
        setIssuesList(newIssueList);
        notifySuccess("Deletada com sucesso!");
      } catch (error) {
        notifyError("Algo deu errado !");
        if (axios.isAxiosError(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    }
  }

  const setCurrentIssueFunction = (id: number) => {
    setCurrentIssue(issuesList?.find((elem) => elem.id === id));
  };

  return (
    <IssuesContext.Provider
      value={{
        createIssues,
        deleteIssues,
        editIssues,
        setFilter,
        filteredIssues,
        currentIssue,
        setCurrentIssueFunction,
        modalCreate,
        setModalCreate,
        modalDelete,
        setModalDelete,
        modalEdit,
        setModalEdit,
        modalResponse,
        setModalResponse,
        replyIssues,
        filter,
        loading,
        date,
        setNewDate,
        newIssue,
        setNewIssue,
        typeIssue,
        setTypeIssue,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

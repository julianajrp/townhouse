import { api } from "../api";
import { IRegisterLoginResponse } from "./register";

export interface IUser {
  email: string;
  name: string;
  cpf: string | null;
  isSyndic: boolean;
  contact: string | null;
  id?: number;
  aptNumber: string;
  password?: string;
}

export interface ILogUser {
  email: string;
  password: string;
}

//Requisição que faz o login do usuário

export async function apiLoginUser(
  dataLogin: ILogUser
): Promise<IRegisterLoginResponse> {
  const { data } = await api.post<IRegisterLoginResponse>("/login", dataLogin);

  return data;
}

import { api } from "../api";
import { IUser } from "./login";

export interface IRegisterLoginResponse {
  accessToken: string;
  user: IUser;
}

//Requisição que faz o cadastro do usuário

export async function apiRegisterUser(
  dataRegister: IUser
): Promise<IRegisterLoginResponse> {
  const { data } = await api.post<IRegisterLoginResponse>(
    "/register",
    dataRegister
  );

  return data;
}

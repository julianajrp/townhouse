import { api } from "../api";
import { IUser } from "./login";

export async function authUser(userId: string, token: string): Promise<IUser> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.get<IUser>(`/users/${userId}`);

  //Deve retornar o perfil do usuário logado com o password (não tem como mudar isso, pois não tem uma rota direta de autenticação que retorne apenas o perfil do logado)
  return data;
}

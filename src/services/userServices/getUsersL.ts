import { AxiosResponse } from "axios";
import { api } from "../api";
import { IUser } from "./login";

export async function apiGetUsers(
  token: string | null
): Promise<AxiosResponse<IUser[]>> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const data = await api.get<IUser[]>("/users");
  return data;
}
import { IComomArea } from "../../context/reservationContext";
import { api } from "../api";

export async function apiGetComomAreas(token: string): Promise<IComomArea[]> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.get<IComomArea[]>(`commom_areas`);

  return data;
}

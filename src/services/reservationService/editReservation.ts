import { IReservation, TAreas } from "../../context/reservationContext";
import { api } from "../api";

export interface ITitleData {
  title: string;
}

export async function apiEditReservation(
  area: TAreas,
  title_data: ITitleData,
  token: string,
  id: number
): Promise<IReservation> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.patch<IReservation>(
    `/${area}_reservation/${id}`,
    title_data
  );

  return data;
}

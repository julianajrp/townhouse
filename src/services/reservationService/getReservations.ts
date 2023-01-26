import { DayValue } from "react-modern-calendar-datepicker";
import { IReservation, TAreas } from "../../context/reservationContext";
import { api } from "../api";

//Requisição que busca as datas reservadas naquela área

export async function apiGetReservedDays(
  area: TAreas,
  token: string
): Promise<DayValue[]> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.get<DayValue[]>(`/${area}_reserved_dates`);

  return data;
}

//Requisição que busca as reservas daquela área

export async function apiGetReservations(
  area: TAreas,
  token: string
): Promise<IReservation[]> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.get<IReservation[]>(`/${area}_reservation`);

  return data;
}

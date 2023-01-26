import { TAreas } from "../../context/reservationContext";
import { api } from "../api";

//Requisição que deleta a data reservada no end-point de reserved_dates

export async function apiDeleteReservedDate(
  area: TAreas,
  token: string,
  id: number
): Promise<void> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  await api.delete<void>(`/${area}_reserved_dates/${id}`);
}

//Requisição que deleta uma reserva no end-point de area_reservation

export async function apiDeleteReservation(
  area: TAreas,
  token: string,
  id: number
): Promise<void> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  await api.delete<void>(`/${area}_reservation/${id}`);
}

import { DayValue } from "react-modern-calendar-datepicker";
import { IReservation, TAreas } from "../../context/reservationContext";
import { api } from "../api";

interface IReserveDateResp {
  year?: number | undefined;
  month?: number | undefined;
  day?: number | undefined;
  id: number;
}

//Requisição que reserva a data no end-point de reserved_dates

export async function apiCreateReservedDate(
  area: TAreas,
  token: string,
  date: DayValue
): Promise<IReserveDateResp> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.post<IReserveDateResp>(
    `/${area}_reserved_dates`,
    date
  );

  return data;
}

//Requisição que insere uma reserva no end-point de area_reservation

export async function apiCreateReservation(
  area: TAreas,
  token: string,
  reservation: IReservation
): Promise<IReservation> {
  api.defaults.headers.authorization = `Bearer ${token}`;
  const { data } = await api.post<IReservation>(
    `/${area}_reservation`,
    reservation
  );

  return data;
}

import React, { createContext, useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { DayValue } from "react-modern-calendar-datepicker";
import { IUser } from "../services/userServices/login";
import {
  apiGetReservedDays,
  apiGetReservations,
} from "../services/reservationService/getReservations";
//import { date } from "yup";
import {
  apiCreateReservation,
  apiCreateReservedDate,
} from "../services/reservationService/createReservation";
import { notifyError, notifySuccess } from "../components/Toastify/toast";
import axios from "axios";
import {
  apiEditReservation,
  ITitleData,
} from "../services/reservationService/editReservation";
import {
  apiDeleteReservation,
  apiDeleteReservedDate,
} from "../services/reservationService/deleteReservation";
import { apiGetComomAreas } from "../services/reservationService/getComomAreas";

interface IReservationContexProps {
  children: React.ReactNode;
}

export interface IReservation {
  title: string;
  user: IUser;
  reserved_date: DayValue;
  id: number;
}

export interface IDayMod {
  className?: string;
  year?: number | undefined;
  month?: number | undefined;
  day?: number | undefined;
  id?: number;
}

export type TAreas = "saloon" | "grill" | "pool" | null | undefined | "";

export interface IComomArea {
  value: "grill" | "pool" | "saloon" | null | undefined;
  label:
    | "Churrasqueira"
    | "Piscina"
    | "Salão de Festas"
    | null
    | undefined
    | "";
}

export interface IReservationContext {
  area: TAreas;
  setArea: React.Dispatch<React.SetStateAction<TAreas>>;
  selectedDay: DayValue | null;
  setSelectedDay: React.Dispatch<React.SetStateAction<DayValue | null>>;
  reservedDays: any;
  setReservedDays: React.Dispatch<React.SetStateAction<any>>;
  reservation: IReservation | null | undefined;
  setReservation: React.Dispatch<
    React.SetStateAction<IReservation | null | undefined>
  >;
  createReservation: (
    area: TAreas,
    date: DayValue,
    reservation: IReservation
  ) => Promise<void>;
  editReservation: (
    area: TAreas,
    title_data: ITitleData,
    id: number
  ) => Promise<void>;
  deleteReservation: (area: TAreas, id: number) => Promise<void>;
  comomAreas: IComomArea[];
  loading: boolean;
}

export const ReservationContext = createContext({} as IReservationContext);

export const ReservationProvider = ({ children }: IReservationContexProps) => {
  const [area, setArea] = useState<TAreas>(null); //área escolhida para a reserva
  const [selectedDay, setSelectedDay] = useState<DayValue | null | undefined>(
    null
  ); //dia selecionado no calendário
  const [reservedDays, setReservedDays] = useState<any>([]); //Dias reservados naquela área - ficarão com cor diferente
  const [reservation, setReservation] = useState<
    IReservation | null | undefined
  >(null); // Mostra a reserva da data selecionada

  const [comomAreas, setComomAreas] = useState<IComomArea[]>([]);
  const [loading, setLoading] = useState(false);

  //Useffect que alimenta o state de comomAreas apenas na montagem do componente
  useEffect(() => {
    const getComomAreas = async () => {
      const token = localStorage.getItem("userToken");

      if (token) {
        try {
          const comomAreasUpdate = await apiGetComomAreas(token);
          setComomAreas(comomAreasUpdate);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getComomAreas();
  }, []);

  //Use effect para atualizar as reservas da área selecionada

  useEffect(() => {
    const getDatesReservations = async () => {
      const token = localStorage.getItem("userToken");

      if (token && area) {
        const reservedDates = await apiGetReservedDays(area, token);

        setReservedDays(() => {
          return reservedDates.map((date: DayValue) => {
            return { ...date, className: `reserved_dates` };
          });
        });

        const reservations = await apiGetReservations(area, token);

        setReservation(() => {
          return reservations.find((reserv: IReservation) => {
            return (
              reserv.reserved_date?.day === selectedDay?.day &&
              reserv.reserved_date?.month === selectedDay?.month &&
              reserv.reserved_date?.year === selectedDay?.year
            );
          });
        });
      }
    };

    getDatesReservations();
  }, [selectedDay, area]);

  async function createReservation(
    area: TAreas,
    date: DayValue,
    reservation: IReservation
  ): Promise<void> {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        setLoading(true);
        await apiCreateReservedDate(area, token, date);
        await apiCreateReservation(area, token, reservation);
        setSelectedDay(null);
        notifySuccess("Reserva feita com sucesso!");
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

  async function editReservation(
    area: TAreas,
    title_data: ITitleData,
    id: number
  ): Promise<void> {
    const token = localStorage.getItem("userToken");

    if (token) {
      try {
        setLoading(true);
        await apiEditReservation(area, title_data, token, id);
        setSelectedDay(null);
        notifySuccess("Reserva alterada com sucesso!");
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

  async function deleteReservation(area: TAreas, id: number): Promise<void> {
    const token = localStorage.getItem("userToken");

    if (token) {
      try {
        setLoading(true);
        await apiDeleteReservedDate(area, token, id);
        await apiDeleteReservation(area, token, id);
        setSelectedDay(null);
        notifySuccess("Reserva deletada com sucesso!");
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

  const globalValues: IReservationContext = {
    area: area,
    setArea: setArea,
    selectedDay: selectedDay,
    setSelectedDay: setSelectedDay,
    reservedDays: reservedDays,
    setReservedDays: setReservedDays,
    reservation: reservation,
    setReservation: setReservation,
    createReservation: createReservation,
    editReservation: editReservation,
    deleteReservation: deleteReservation,
    comomAreas,
    loading,
  };

  return (
    <ReservationContext.Provider value={globalValues}>
      {children}
    </ReservationContext.Provider>
  );
};

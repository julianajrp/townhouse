import React from "react";
import { ReservationOutlet } from "../../components/Reservation/reservation";
import { ReservationProvider } from "../reservationContext";

export const ReservationProviderComponent = () => {
  return (
    <ReservationProvider>
      <ReservationOutlet />
    </ReservationProvider>
  );
};

import React from "react";
import { CalendarComponent } from "./ComponentsReservation/Calendar/calendar";
import { StyledSection } from "./StyleReservation";

export const ReservationOutlet = () => {
  return (
    <StyledSection>
      <CalendarComponent />
    </StyledSection>
  );
};

import React, { ReactElement, useContext } from "react";
import { ReservationContext } from "../../../../context/reservationContext";
import { BiCheckboxChecked } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import { StyledAvailability } from "./styleDataAvailability";

export const DateAvailability = (): ReactElement => {
  const { selectedDay, reservation } = useContext(ReservationContext);

  if (selectedDay) {
    return (
      <>
        {reservation ? (
          <StyledAvailability color={"--error"}>
            <span>Data indisponível</span> <ImCancelCircle className="x_mark" />
          </StyledAvailability>
        ) : (
          <StyledAvailability color={"--color-primary-focus"}>
            <span>Data disponível</span>{" "}
            <BiCheckboxChecked className="check_mark" />
          </StyledAvailability>
        )}
      </>
    );
  } else {
    return <></>;
  }
};

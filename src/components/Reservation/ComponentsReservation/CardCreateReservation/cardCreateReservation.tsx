import React, { ReactElement, useContext } from "react";
import { ReservationContext } from "../../../../context/reservationContext";
import { MdOutlinePushPin } from "react-icons/md";
import {
  StyledCreatCardReservation,
  StyledWarning,
} from "./styleCardCreateReservation";

interface ICardProps {
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateReservationCard = ({
  setIsCreateModalOpen,
}: ICardProps): ReactElement => {
  const { selectedDay, reservation } = useContext(ReservationContext);

  if (selectedDay && !reservation) {
    return (
      <>
        <StyledCreatCardReservation>
          <MdOutlinePushPin className="pin_icon" />
          <span className="headline">
            Registrar reserva - {selectedDay?.day}/{selectedDay?.month}/
            {selectedDay?.year}{" "}
          </span>
          <div className="circle" onClick={() => setIsCreateModalOpen(true)}>
            +
          </div>
        </StyledCreatCardReservation>
        <StyledWarning>
          <span className=" heading four tag">Aviso</span>
          <span className="headline warning">
            Caros residentes, os espaços reservados devem ser entregues limpos e
            organizados até às 07h00 do dia seguinte à reserva. Att, Alysson.
          </span>
        </StyledWarning>
      </>
    );
  } else {
    return <></>;
  }
};

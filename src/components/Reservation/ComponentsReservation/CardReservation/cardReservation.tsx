import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/authContext";
import {
  IComomArea,
  ReservationContext,
} from "../../../../context/reservationContext";
import { StyledCardReservation } from "./styledCardReservation";
import { MdEdit } from "react-icons/md";

interface ICardProps {
  setEditDelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardReservation = ({ setEditDelModalOpen }: ICardProps) => {
  const { selectedDay, reservation, area, comomAreas } =
    useContext(ReservationContext);
  const { user } = useContext(AuthContext);
  const [local, setLocal] = useState<IComomArea["label"]>(null);

  useEffect(() => {
    const localName = comomAreas.find((local) => {
      return local.value === area;
    });

    if (localName) {
      setLocal(localName.label);
    }
  }, [area, comomAreas]);

  if (selectedDay && reservation) {
    return (
      <StyledCardReservation>
        <p className="heading four">
          Data: {selectedDay.day}/{selectedDay.month}/{selectedDay.year}
        </p>
        {reservation.user.id === user?.id || user?.isSyndic ? (
          <MdEdit
            className="edit_icon"
            onClick={() => setEditDelModalOpen(true)}
          />
        ) : (
          <></>
        )}
        <p className="headline">Local: {local}</p>
        <p className="headline">Nome do evento: {reservation.title}</p>
        <p className="headline strong">
          {reservation.user.name} - Apt.: {reservation.user.aptNumber}
        </p>
      </StyledCardReservation>
    );
  } else {
    return <></>;
  }
};

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../context/authContext";
import { ReservationContext } from "../../../../context/reservationContext";
import { schemaReservation } from "../../../../validations/newReservation";
import { StyledModalCreateReservBack } from "../../StyleReservation";
import { StyledModalCreateReserv } from "./styleModalCreateReserv";
interface IModalProps {
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDay: any; //por enquanto
  area: any;
}
export const ModalCreateReserv = ({
  setIsCreateModalOpen,
  selectedDay,
  area,
}: IModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaReservation),
  });
  const { user } = useContext(AuthContext);
  const { createReservation } = useContext(ReservationContext);
  function translatePlace(area: string) {
    let local = "";
    if (area === "pool") {
      local = " Piscina";
    } else if (area === "saloon") {
      local = " Salão de Festas";
    } else if (area === "grill") {
      local = " Churrasqueira";
    }
    return local;
  }
  function changeName() {
    return translatePlace(area);
  }
  async function onSubmit(data: any) {
    setIsCreateModalOpen(false);
    const dataReservation = {
      ...data,
      user: user,
      reserved_date: selectedDay,
    };
    const dataDate = {
      ...selectedDay,
    };
    await createReservation(area, dataDate, dataReservation);
  }
  return (
    <>
      <StyledModalCreateReservBack>
        <StyledModalCreateReserv onSubmit={handleSubmit(onSubmit)}>
          <span
            className="close_btn"
            onClick={() => setIsCreateModalOpen(false)}
          >
            X
          </span>
          <p className="headline">
            {selectedDay?.day}/{selectedDay?.month}/{selectedDay?.year} -
            {changeName()}
          </p>
          <label htmlFor="event_title" className="headline">
            <span>Nome do evento:</span>
            <span className="headline error">
              {errors.title && `${errors.title?.message}`}
            </span>
          </label>
          <input
            id="event_title"
            className="input"
            type="text"
            {...register("title")}
          />
          <button type="submit" className="btn" disabled={!isDirty || !isValid}>
            Reservar
          </button>
        </StyledModalCreateReserv>
      </StyledModalCreateReservBack>
    </>
  );
};

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ReservationContext } from "../../../../context/reservationContext";
import { schemaReservation } from "../../../../validations/newReservation";
import { StyledModalCreateReservBack } from "../../StyleReservation";
import { StyledModalContent } from "./styleModalEditDelReserv";

interface IModalProps {
  setEditDelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditDeleteReserv = ({ setEditDelModalOpen }: IModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaReservation),
  });
  const { reservation, editReservation, area, deleteReservation } =
    useContext(ReservationContext);

  async function onSubmitEdit(title_data: any) {
    setEditDelModalOpen(false);
    if (reservation) {
      await editReservation(area, title_data, reservation?.id);
    }
  }

  async function handleDelete() {
    setEditDelModalOpen(false);
    if (reservation) {
      await deleteReservation(area, reservation?.id);
    }
  }

  return (
    <>
      <StyledModalCreateReservBack>
        <StyledModalContent>
          <form onSubmit={handleSubmit(onSubmitEdit)}>
            <span
              className="close_btn"
              onClick={() => setEditDelModalOpen(false)}
            >
              X
            </span>
            <label className="headline" htmlFor="event_title">
              <span>Novo nome para o evento:</span>
              <span className="headline error">
                {errors.title && `${errors.title?.message}`}
              </span>
            </label>
            <input
              id="event_title"
              className="input"
              type="text"
              {...register("title")}
              defaultValue={reservation?.title}
            />
            <button
              className="btn"
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Editar
            </button>
          </form>
          <span>Ou</span>
          <button className="btn second" onClick={handleDelete}>
            Excluir reserva ?
          </button>
        </StyledModalContent>
      </StyledModalCreateReservBack>
    </>
  );
};

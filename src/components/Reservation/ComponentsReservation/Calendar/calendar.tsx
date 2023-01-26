import React, { useContext, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { utils } from "react-modern-calendar-datepicker";
import { ReservationContext } from "../../../../context/reservationContext";
import Select from "react-select";
import { customStyles, StyledCalendar } from "./styleCalendar";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import { DateAvailability } from "../DateAva/dateAvailability";
import { CreateReservationCard } from "../CardCreateReservation/cardCreateReservation";
import { CardReservation } from "../CardReservation/cardReservation";
import { ModalCreateReserv } from "../ModalCreateReserv/modalCreateReserv";
import { ModalEditDeleteReserv } from "../ModalEditDeleteReserv/modalEditDeleteReserv";
import { Loading } from "../../../Loading/loading";
export const CalendarComponent = () => {
  const {
    selectedDay,
    setSelectedDay,
    comomAreas,
    area,
    setArea,
    reservedDays,
    loading,
  } = useContext(ReservationContext);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditDelModalOpen, setEditDelModalOpen] = useState(false);

  return (
    <>
      {isCreateModalOpen && (
        <ModalCreateReserv
          setIsCreateModalOpen={setIsCreateModalOpen}
          selectedDay={selectedDay}
          area={area}
        />
      )}
      {isEditDelModalOpen && (
        <ModalEditDeleteReserv setEditDelModalOpen={setEditDelModalOpen} />
      )}
      <StyledCalendar>
        <div className="div_date_selection">
          <div className="div_select">
            <h2 className="headline">Escolha um local para reserva</h2>
            <Select
              styles={customStyles}
              options={comomAreas}
              placeholder="Selecionar ambiente"
              onChange={(option) => setArea(option?.value)}
            />
          </div>
          <div className="div_calendar">
            {area && (
              <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                minimumDate={utils("en").getToday()}
                shouldHighlightWeekends
                customDaysClassName={reservedDays}
              />
            )}
          </div>
        </div>
        <div className="div_info">
          <DateAvailability />
          <CreateReservationCard setIsCreateModalOpen={setIsCreateModalOpen} />
          <CardReservation setEditDelModalOpen={setEditDelModalOpen} />
        </div>
        <Loading loading={loading} />
      </StyledCalendar>
    </>
  );
};

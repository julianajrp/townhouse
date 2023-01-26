//import { type } from "os";
import { useContext, useState } from "react";
import Select from "react-select";
import { AuthContext } from "../../../context/authContext";
import { IssuesContext } from "../../../context/issuesContext";
import { customStyles } from "../../Reservation/ComponentsReservation/Calendar/styleCalendar";
import { notifyError } from "../../Toastify/toast";
import IssuesCard from "../IssuesCard/issuesCard";

import StyledIssuesList, {
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledInput,
} from "./style";

const IssuesList = () => {
  const {
    filteredIssues,
    filter,
    createIssues,
    setModalCreate,
    date,
    setNewDate,
    newIssue,
    setNewIssue,
    typeIssue,
    setTypeIssue,
  } = useContext(IssuesContext);
  const { user } = useContext(AuthContext);

  const filtered = filteredIssues?.filter((x) => {
    return x.user.id === user?.id;
  });
  const selectOptions = [
    { label: "Reclamação", value: "reclamação" },
    { label: "Solicitação", value: "solicitação" },
  ];
  return (
    <>
      {filter === "todos" && user?.isSyndic && (
        <StyledForm
          onSubmit={(event) => {
            event.preventDefault();
            if (date.length !== 10) {
              notifyError("Favor verificar a data");
            } else {
              setModalCreate(true);
              setTypeIssue("aviso");
            }
          }}
        >
          <StyledDiv>
            <input
              type="date"
              className="input"
              value={date}
              onChange={(event) => {
                setNewDate(event.target.value);
              }}
            />
            <StyledInput
              placeholder="Escrever aviso"
              value={newIssue}
              onChange={(event) => setNewIssue(event.target.value)}
            />
          </StyledDiv>
          <StyledButton type="submit">teste</StyledButton>
        </StyledForm>
      )}

      {filter !== "todos" && !user?.isSyndic && (
        <StyledForm
          action="submit"
          onSubmit={(event) => {
            event.preventDefault();
            if (
              (typeIssue === "solicitação" || typeIssue === "reclamação") &&
              date.length === 10
            ) {
              setModalCreate(true);
            } else {
              if (date.length !== 10) {
                notifyError("Favor verificar data");
              } else {
                notifyError("Favor selecionar o tipo da solicitação");
              }
            }
          }}
        >
          <StyledDiv>
            <div>
              <Select
                styles={customStyles}
                options={selectOptions}
                placeholder="Selecionar tipo"
                onChange={(option) => setTypeIssue(option?.value)}
              />
              <input
                type="date"
                className="input"
                value={date}
                onChange={(event) => {
                  setNewDate(event.target.value);
                }}
              />
            </div>
            <StyledInput
              placeholder="Motivo da solicitação/reclamação"
              maxLength={50}
              value={newIssue}
              onChange={(event) => {
                setNewIssue(event.target.value);
              }}
            />
          </StyledDiv>
          <StyledButton type="submit">teste</StyledButton>
        </StyledForm>
      )}

      {/* lista de cards */}
      <StyledIssuesList>
        <>
          {user?.isSyndic &&
            filteredIssues
              ?.map((issue) => (
                <IssuesCard key={issue.id} id={issue.id} issue={issue} />
              ))
              .reverse()}
          {!user?.isSyndic &&
            filter !== "todos" &&
            filtered
              ?.map((issue) => (
                <IssuesCard key={issue.id} id={issue.id} issue={issue} />
              ))
              .reverse()}
          {!user?.isSyndic &&
            filter === "todos" &&
            filteredIssues
              ?.map((issue) => (
                <IssuesCard key={issue.id} id={issue.id} issue={issue} />
              ))
              .reverse()}
        </>
      </StyledIssuesList>
    </>
  );
};

export default IssuesList;

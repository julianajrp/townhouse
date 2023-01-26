import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/authContext";
import { IssuesContext } from "../../../../context/issuesContext";
import { ModalContainer, ModalBox, ButtonClose, ButtonPrimary } from "../style";
import { StyledDiv, StyledForm, StyledTextArea } from "./style";

const ModalCreate = () => {
  const {
    modalCreate,
    createIssues,
    date,
    setNewDate,
    newIssue,
    setNewIssue,
    setModalCreate,
    typeIssue,
    setTypeIssue,
  } = useContext(IssuesContext);
  const [issueDescription, setIssueDescription] = useState<string>("");
  const { user } = useContext(AuthContext);
  return (
    <>
      {modalCreate === true ? (
        <ModalContainer>
          <ModalBox>
            <StyledDiv>
              <h3>Informações adicionais:</h3>
              <ButtonClose
                className="closeBtn"
                onClick={() => setModalCreate(false)}
              >
                X
              </ButtonClose>
            </StyledDiv>
            <StyledForm
              onSubmit={(event) => {
                event.preventDefault();
                createIssues({
                  type: typeIssue,
                  title: newIssue,
                  description: issueDescription,
                  date: date,
                  user: user,
                });
                setModalCreate(false);
                setNewIssue("");
                setNewDate("");
                setTypeIssue("");
              }}
            >
              <StyledTextArea
                onChange={(event) => {
                  setIssueDescription(event.target.value);
                }}
              />
              <ButtonPrimary>Publicar</ButtonPrimary>
            </StyledForm>
          </ModalBox>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default ModalCreate;

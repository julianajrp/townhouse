import { useContext, useState } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import { ModalContainer, ModalBox, ButtonClose, ButtonPrimary } from "../style";

const ModalEdit = () => {
  const { modalEdit, setModalEdit, editIssues, currentIssue } =
    useContext(IssuesContext);
  const [newDescription, setNewDescription] = useState<string>("");
  return (
    <>
      {modalEdit && (
        <ModalContainer>
          <ModalBox>
            <ButtonClose
              className="closeBtn"
              onClick={() => setModalEdit(false)}
            >
              X
            </ButtonClose>
            <h3>Editar {currentIssue?.type}:</h3>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                editIssues(newDescription, currentIssue?.id);
              }}
            >
              <textarea
                name=""
                id=""
                onChange={(event) => setNewDescription(event.target.value)}
                defaultValue={currentIssue?.description}
              />

              <ButtonPrimary type="submit">Editar</ButtonPrimary>
            </form>
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};

export default ModalEdit;

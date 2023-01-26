import { useContext } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import {
  ModalContainer,
  ModalBox,
  ButtonClose,
  ButtonPrimary,
  ButtonGray,
} from "../style";

const ModalDelete = () => {
  const { modalDelete, setModalDelete, deleteIssues, currentIssue } =
    useContext(IssuesContext);
  return (
    <>
      {modalDelete === true ? (
        <ModalContainer>
          <ModalBox>
            <ButtonClose
              className="closeBtn"
              onClick={() => setModalDelete(false)}
            >
              X
            </ButtonClose>
            <h3>Tem certeza que deseja excluir esse anúncio?</h3>
            <div>
              <ButtonGray onClick={() => setModalDelete(false)}>
                Cancelar
              </ButtonGray>
              <ButtonPrimary onClick={() => deleteIssues(currentIssue?.id)}>
                Excluir
              </ButtonPrimary>
            </div>
          </ModalBox>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default ModalDelete;

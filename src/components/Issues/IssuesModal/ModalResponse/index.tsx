import { useContext, useState } from "react";
import { IssuesContext } from "../../../../context/issuesContext";
import { ModalContainer, ModalBox, ButtonClose, ButtonPrimary } from "../style";

const ModalResponse = () => {
  const { modalResponse, setModalResponse, replyIssues, currentIssue } =
    useContext(IssuesContext);

  const [reply, setReply] = useState("");
  return (
    <>
      {modalResponse ? (
        <ModalContainer>
          <ModalBox>
            <ButtonClose
              className="closeBtn"
              onClick={() => setModalResponse(false)}
            >
              X
            </ButtonClose>
            <h3>Escrever resposta:</h3>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                replyIssues(reply, currentIssue?.id);
              }}
            >
              <textarea
                name=""
                id=""
                onChange={(event) => setReply(event.target.value)}
                defaultValue={currentIssue?.reply}
              />
              <ButtonPrimary type="submit">Publicar</ButtonPrimary>
            </form>
          </ModalBox>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default ModalResponse;

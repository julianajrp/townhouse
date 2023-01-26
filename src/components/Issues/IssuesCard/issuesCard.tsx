import { useContext } from "react";
import { IIssuesResponse, IssuesContext } from "../../../context/issuesContext";
import { MdEdit, MdOutlineKeyboardReturn } from "react-icons/md";
import { GiTrashCan } from "react-icons/gi";
import { IssuesTag, StyledIssuesCard, StyledP } from "./style";
import { AuthContext } from "../../../context/authContext";

interface IIssuesCardProps {
  issue: IIssuesResponse;
  id: number;
}

const IssuesCard = ({ issue, id }: IIssuesCardProps) => {
  const {
    setCurrentIssueFunction,
    setModalDelete,
    setModalEdit,
    setModalResponse,
  } = useContext(IssuesContext);

  const { user } = useContext(AuthContext);

  return (
    <StyledIssuesCard key={id}>
      <div>
        <IssuesTag issueType={issue.type}>{issue.type}</IssuesTag>

        <div>
          {user?.isSyndic && (
            <button
              onClick={() => {
                setCurrentIssueFunction(issue.id);
                setModalDelete(true);
              }}
            >
              <GiTrashCan />
            </button>
          )}

          {!user?.isSyndic && issue.user.id === user?.id && (
            <button
              onClick={() => {
                setCurrentIssueFunction(issue.id);
                setModalDelete(true);
              }}
            >
              <GiTrashCan />
            </button>
          )}

          {user?.isSyndic ? (
            issue.type === "aviso" ? (
              <button
                onClick={() => {
                  setCurrentIssueFunction(issue.id);
                  setModalEdit(true);
                }}
              >
                <MdEdit />
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentIssueFunction(issue.id);
                  setModalResponse(true);
                }}
              >
                <MdOutlineKeyboardReturn />
              </button>
            )
          ) : (
            issue.type !== "aviso" &&
            issue.user.id === user?.id && (
              <button
                onClick={() => {
                  setCurrentIssueFunction(issue.id);
                  setModalEdit(true);
                }}
              >
                <MdEdit />
              </button>
            )
          )}
        </div>
      </div>

      {user?.isSyndic &&
        (issue?.type === "solicitação" || issue?.type === "reclamação") && (
          <>
            <h3 className="body">
              {issue?.user.name} - Apto {issue?.user.aptNumber}
            </h3>
            <p className="caption">
              {issue?.date?.split("-").reverse().join("/")}
            </p>
          </>
        )}

      <StyledP>{issue.title}</StyledP>
      <p className="body">{issue.description}</p>

      {user?.isSyndic && issue?.type === "aviso" && (
        <p className="caption">{issue?.date?.split("-").reverse().join("/")}</p>
      )}

      {!user?.isSyndic && (
        <p className="caption">{issue?.date?.split("-").reverse().join("/")}</p>
      )}

      {issue.reply ? <p className="body">Resposta: {issue.reply}</p> : null}
    </StyledIssuesCard>
  );
};

export default IssuesCard;

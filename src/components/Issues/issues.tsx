import { useContext } from "react";
import { IssuesContext } from "../../context/issuesContext";
import { Loading } from "../Loading/loading";
import IssuesFilter from "./IssuesFilter/issuesFilter";
import IssuesList from "./IssuesList/issuesList";
import ModalCreate from "./IssuesModal/ModalCreate/ModalCreate";
import ModalDelete from "./IssuesModal/ModalDelete";
import ModalEdit from "./IssuesModal/ModalEdit";
import ModalResponse from "./IssuesModal/ModalResponse";

import StyledIssues from "./style";

const IssuesOutlet = () => {
  const { loading } = useContext(IssuesContext);
  return (
    <StyledIssues>
      <IssuesFilter />
      <IssuesList />
      <ModalCreate />
      <ModalDelete />
      <ModalResponse />
      <ModalEdit />
      <Loading loading={loading} />
    </StyledIssues>
  );
};

export default IssuesOutlet;

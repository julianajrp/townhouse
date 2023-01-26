import { useContext } from "react";
import { IssuesContext } from "../../../context/issuesContext";

import StyledIssuesFilter from "./style";

export interface IFilterProps {
  filter: string;
}

const IssuesFilter = () => {
  const { setFilter, filter } = useContext(IssuesContext);

  return (
    <StyledIssuesFilter filter={filter}>
      <button className="heading four" onClick={() => setFilter("todos")}>
        Mural
      </button>
      <button className="heading four" onClick={() => setFilter("solicitação")}>
        Solicitações
      </button>
    </StyledIssuesFilter>
  );
};

export default IssuesFilter;

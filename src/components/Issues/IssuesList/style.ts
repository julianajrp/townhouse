import styled from "styled-components";

const StyledIssuesList = styled.ul`
  height: 80%;
  width: 100%;

  margin: 12px 0px 4px 0px;

  overflow-y: scroll;

  @media (min-width: 1024px) {
    overflow-y: scroll;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 50px;
  box-shadow: 0px 3px 7px -1px rgba(0, 0, 0, 0.75);
  padding-left: 15px;
  :hover {
    padding-left: 15px;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 8px;

  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledButton = styled.button`
  display: none;
`;

export default StyledIssuesList;

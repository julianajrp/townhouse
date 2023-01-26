import styled from "styled-components";

const StyledIssues = styled.div`
  height: calc(100% - 150px);
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    margin: auto;
    width: 1000px;
    height: calc(100vh - 80px);
  }
`;

export default StyledIssues;

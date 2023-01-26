import styled from "styled-components";

export const StyledRegister = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

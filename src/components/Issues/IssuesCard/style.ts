import styled, { css } from "styled-components";

interface IIssueType {
  issueType: string;
}

export const StyledIssuesCard = styled.li`
  width: 100%;
  height: fit-content;
  min-height: 130px;
  padding: 10px;
  margin-top: 16px;

  border: 1px solid var(--gray-2);
  border-radius: 8px;
  box-shadow: 3px 3px 5px rgba(27, 28, 30, 0.1);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  @media (min-width: 1024px) {
    padding: 18px;
    gap: 20px;
  }

  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
  }

  button {
    border: none;
    background-color: var(--white);

    cursor: pointer;

    svg {
      font-size: 18px;
      color: var(--gray-1);

      @media (min-width: 1024px) {
        font-size: 22px;
      }
    }
  }

  p {
    color: var(--gray-0);
    line-height: 24px;
    text-align: justify;
  }

  h3 {
    color: var(--gray-1);
  }
`;

export const IssuesTag = styled.span<IIssueType>`
  padding: 3px 10px;
  border-radius: 32px;

  font-size: 14px;
  font-family: var(--font-secundary);
  font-weight: 700;

  ${({ issueType }) => {
    switch (issueType) {
      case "aviso":
        return css`
          background-color: rgba(130, 201, 30, 0.3);
          color: #456b10;
        `;

      case "solicitação":
        return css`
          background-color: rgba(252, 196, 25, 0.3);
          color: #81650d;
        `;

      case "reclamação":
        return css`
          background-color: rgba(240, 62, 62, 0.3);
          color: #a52727;
        `;

      default:
        return css`
          background-color: #fff;
          color: var(--gray-0);
        `;
    }
  }}
`;

export const StyledP = styled.p`
  font-size: 18px;
  font-family: var(--font-primary);
  font-weight: 400;
`;

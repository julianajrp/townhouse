import styled from "styled-components";
import { css } from "styled-components";

export const StyledAvailability = styled.p`
  ${({ color }) => {
    return css`
      width: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      border: 1px solid var(${color});
      color: var(${color});
      text-align: center;
      padding: 10px 15px;
      border-radius: 8px;
      font-weight: 700;
    `;
  }}

  .check_mark {
    font-size: 24px;
  }

  .x_mark {
    font-size: 22px;
  }
`;

import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 70px;
  background-color: var(--gray-3);
  border-top: 2px solid var(--gray-2);

  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    svg {
      font-size: 24px;
      color: var(--gray-1);
    }

    @media (min-width: 768px) {
      padding: 0px 80px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export default StyledFooter;

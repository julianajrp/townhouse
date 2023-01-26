import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(
    to bottom right,
    var(--color-primary-focus),
    var(--color-primary)
  );

  div {
    width: 800px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  nav {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      gap: 24px;

      a {
        color: var(--gray-3);
      }

      a:hover {
        transition: 0.5s;
        color: var(--gray-0);
      }
    }
  }
`;

export default StyledHeader;

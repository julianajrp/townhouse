import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to right,
    var(--color-primary) 50%,
    var(--gray-3) 50%
  );
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    background: var(--gray-3);
  }
`;

export const LogoContainer = styled.div`
  left: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  div {
    float: left;
    width: 100%;
    height: 100%;
    margin: 1rem;
    clip-path: ellipse(50% 20%);
    background: var(--gray-3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    position: relative;
  }

  img {
    position: absolute;
    height: 30%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    img {
      position: unset;
      height: 220px;
    }

    div {
      display: none;
    }
  }
`;

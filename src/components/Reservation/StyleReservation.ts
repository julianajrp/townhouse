import styled from "styled-components";

export const StyledSection = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: var(--gray-2);
`;

export const StyledModalCreateReservBack = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

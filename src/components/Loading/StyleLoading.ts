import styled from "styled-components";
import { IoHome } from "react-icons/io5";
export const DivloadingBc = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
`;
export const LoadingContentDiv = styled.div`
  text-align: center;
`;
export const IoHomeIcon = styled(IoHome)`
  color: var(--color-primary-focus);
  width: 70px;
  height: 70px;
`;
export const IconDiv = styled.div`
  animation-name: floating;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;
export const LoadingP = styled.p`
  animation: LoadingP ease 1s infinite alternate;
  color: var(--color-primary-focus);
  font-size: 23px;
  @keyframes LoadingP {
    from {
      opacity: 0;
    }
  }
`;

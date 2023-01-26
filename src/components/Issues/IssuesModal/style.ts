import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: var(--black-opacity);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  width: 80%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 1rem;
  border-radius: 15px;
  background-color: white;
  font-family: var(--font-secundary);

  h3 {
    font-size: 14px;
    color: var(--gray-0);
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    textarea {
      height: 120px;
      border: solid 1px var(--color-primary);
      border-radius: 4px;
      background-color: var(--gray-3);
    }
  }
`;

export const ButtonClose = styled.button`
  border: none;
  background-color: var(--white);
  align-self: flex-end;

  color: var(--gray-1);
  font-weight: 600;
  transition: 0.5s;

  cursor: pointer;

  :hover {
    background-color: var(--gray-0);
  }
`;

export const ButtonGray = styled.button`
  border: none;
  background-color: var(--gray-2);
  color: var(--gray-0);
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: 0.5s;

  cursor: pointer;

  :hover {
    background-color: var(--gray-1);
  }
`;

export const ButtonPrimary = styled.button`
  border: none;
  background-color: var(--color-primary);
  color: var(--gray-3);
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  transition: 0.5s;

  cursor: pointer;

  :hover {
    background-color: var(--color-primary-focus);
  }
`;

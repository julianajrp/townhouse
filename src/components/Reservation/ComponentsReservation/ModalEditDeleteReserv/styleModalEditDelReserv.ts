import styled from "styled-components";

export const StyledModalContent = styled.div`
  width: 90%;
  max-width: 400px;
  height: fit-content;
  padding: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  border-radius: 10px;
  position: relative;

  .close_btn {
    position: absolute;
    top: 10px;
    right: 10px;
    color: var(--gray-1);
    cursor: pointer;
    font-size: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
    }
  }
`;

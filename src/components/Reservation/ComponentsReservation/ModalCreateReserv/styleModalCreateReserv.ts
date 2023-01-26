import styled from "styled-components";

export const StyledModalCreateReserv = styled.form`
  width: 90%;
  max-width: 400px;
  height: 225px;
  padding: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

  .headline {
    color: var(--gray-0);
  }

  p {
    width: 100%;
  }

  input {
    width: 100%;
  }

  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledEventInfo = styled.p`
  width: 100%;
  font-family: "Inter";
  color: #212529;
  font-size: 12px;
  font-weight: 700;
`;

import styled from "styled-components";

export const Main = styled.main`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-2);

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    overflow-y: scroll;
    height: 75%;
    width: 95%;
    padding: 30px 0 20px 0;

    li {
      width: 95%;
      display: flex;
      justify-content: space-between;
      border: 1px solid var(--gray-2);
      box-shadow: 3px 3px 5px rgba(27, 28, 30, 0.1);
      border-radius: 10px;
      padding: 10px;
      max-width: 900px;
      button {
        cursor: pointer;
        height: 20px;
        width: 20px;
        background-color: transparent;
        border: none;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 768px) {
    ul {
      margin: 0 auto;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: space-between;

      li {
        width: 45%;
      }
    }
  }
`;

export const StyledModal = styled.div`
  position: absolute;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  top: 0;
  background-color: var(--black-opacity);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;
  div {
  }
`;

export const StyledCenterDivModal = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  max-width: 500px;

  section {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    button {
      width: 200px;
      border: none;
      border-radius: 10px;
      font-weight: 700;
      transition: 0.5s;
    }
  }
`;

export const StyledDivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 900px;
  border-bottom: 2px solid var(--gray-2);
  h2 {
    line-height: 34px;
    font-size: 20px;
    color: var(--gray-1);
    margin: 20px 0 10px 0;
  }
  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 30px;
    input {
      width: 100%;
    }
    img {
      position: absolute;
    }
  }
`;

export const StyledCenterDivModalInternal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    span {
      cursor: pointer;
      color: var(--gray-1);
    }
  }
  span {
    color: var(--gray-1);
  }
`;

export const StyledCenterDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  justify-content: flex-start;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

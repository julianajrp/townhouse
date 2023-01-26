import styled from "styled-components";

export const StyledCreatCardReservation = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: fit-content;
  padding: 15px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  .pin_icon {
    color: var(--gray-1);
    font-size: 20px;
  }

  .circle {
    color: var(--gray-1);
    border: 1px dotted var(--gray-1);
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  .headline {
    font-size: 14px;
    color: var(--black);
  }
`;

export const StyledWarning = styled.div`
  display: none;
  position: relative;
  width: 100%;
  max-width: 300px;
  height: fit-content;
  padding: 15px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  .headline.warning {
    font-size: 12px;
    line-height: 20px;
    margin-top: 20px;
    color: var(--black);
  }

  .tag {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 80px;
    border: 1px solid var(--color-primary-focus);
    color: var(--color-primary-focus);
    border-radius: 25px;
    padding: 2px;
    text-align: center;
    background-color: #82c91e40;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

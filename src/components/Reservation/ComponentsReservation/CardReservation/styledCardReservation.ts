import styled from "styled-components";

export const StyledCardReservation = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: fit-content;
  padding: 15px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.3rem;
  margin: 0 auto;

  .edit_icon {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 25px;
    cursor: pointer;
  }

  .heading.four {
    color: var(--color-primary-focus);
  }

  .headline {
    font-size: 14px;
    color: var(--gray-1);
  }

  .headline.strong {
    font-weight: 600;
    color: var(--gray-0);
  }

  @media (min-width: 768px) {
    margin-bottom: 130px;

    .headline {
      font-size: 20px;
      line-height: 26px;
      color: var(--gray-1);
    }

    .heading.four {
      font-size: 18px;
    }
  }
`;

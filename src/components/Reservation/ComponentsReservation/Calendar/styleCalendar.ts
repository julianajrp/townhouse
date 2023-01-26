import styled from "styled-components";
import { CSSObject } from "@emotion/serialize";

export const StyledCalendar = styled.div`
  width: 100%;
  max-width: 1000px;
  height: calc(100% - 68px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;

  @media (min-width: 768px) {
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }

  .div_date_selection {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 500px;
      width: 50%;
    }

    .div_select {
      width: 100%;
      height: fit-content;
      margin-top: 1rem;
      position: relative;

      //container do select
      .css-b62m3t-container {
        position: absolute;
        z-index: 15;
        width: 100%;
      }

      h2 {
        line-height: 34px;
        font-size: 20px;
        color: var(--gray-1);
        margin-bottom: 1rem;
      }

      @media (min-width: 768px) {
        width: 90%;
      }
    }

    .div_calendar {
      margin-top: 1rem;
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .reserved_dates:not(.-selectedStart):not(.-selectedBetween):not(.-selectedEnd):not(.-selected) {
      border: 2px solid var(--gray-1) !important;
      background-color: var(--gray-1);
      opacity: 0.3;
    }

    .Calendar {
      margin: 0 auto;
      box-shadow: 0 0em 1em rgb(0 0 0 / 7%);

      @media (min-width: 768px) {
        width: 100%;
      }
    }
  }

  .div_info {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      height: 500px;
      width: 50%;
      justify-content: space-evenly;
    }
  }
`;

export const customStyles = {
  control: (base: CSSObject, state: { isFocused: boolean }): CSSObject => ({
    ...base,
    background: "#ffff",
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    borderColor: "#868e969c",
    boxShadow: "none",
  }),
  placeholder: (base: CSSObject): CSSObject => ({
    ...base,
    color: "#868E96",
  }),
  singleValue: (base: CSSObject): CSSObject => ({
    ...base,
    width: "fit-content",
    color: "#00804B",
    backgroundColor: "#00804b33",
    padding: "4px 8px",
    fontSize: "14px",
    fontWeight: "700",
    borderRadius: "4px",
  }),
  menu: (base: CSSObject): CSSObject => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base: CSSObject): CSSObject => ({
    ...base,
    padding: 0,
  }),
  option: (provided: CSSObject, state: { isFocused: boolean }): CSSObject => ({
    ...provided,
    background: "#fff" && state.isFocused ? "#00804b3b" : "#fff",
    color: "#6f777e",
    padding: 5,
  }),
};

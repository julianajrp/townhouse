import styled from "styled-components";
import { IFilterProps } from "./issuesFilter";

const StyledIssuesFilter = styled.div<IFilterProps>`
	height: 40px;
	width: 100%;
	max-width: 560px;

	margin-top: 24px;

	button {
		width: 50%;
		height: 40px;

		border: none;

		transition: 0.5s;

		cursor: pointer;

		@media (min-width: 768px) {
			height: 56px;
		}
	}

	button:nth-child(1) {
		border-radius: 8px 0px 0px 8px;
		background-color: ${(props) =>
			props.filter === "todos" ? "#00804B" : "#F8F9FA"};
		color: ${(props) => (props.filter === "todos" ? "#F8F9FA" : "#121214")};

		:hover {
			background-color: ${(props) =>
				props.filter === "todos" ? "#00C894" : "#DEE2E6"};
		}
	}

	button:nth-child(2) {
		border-radius: 0px 8px 8px 0px;
		background-color: ${(props) =>
			props.filter === "solicitação" ? "#00804B" : "#F8F9FA"};
		color: ${(props) =>
			props.filter === "solicitação" ? "#F8F9FA" : "#121214"};

		:hover {
			background-color: ${(props) =>
				props.filter === "solicitação" ? "#00C894" : "#DEE2E6"};
		}
	}
`;

export default StyledIssuesFilter;
